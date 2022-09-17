<template>
	 <div class="q-py-xl">
		  <div class="text-h4 q-pb-xl" :class="$q.screen.gt.sm ? 'text-left q-pl-xl' : 'text-center'">
				{{ $t("talk") }}
		  </div>
		  <div class="text-center" :class="$q.screen.gt.sm ? 'q-pl-lg' : ''">
				<div class="row">
					 <div class="col-12 col-md-6">
						  <q-card shaped outlined class="bg-primary q-pa-md">
								<q-form @submit.prevent="onSubmit">
									 {{ $t("mail") }}
									 <q-input v-model="mail" outlined :rules="[val => !!val || $t('mailRule'), val => /.+@.+\..+/.test(val) || $t('mailRule2')]" color="white" dark />
									 {{ $t("message") }}
									 <q-input v-model="message" type="textarea" outlined :rules="[val => val && val.length > 0 || $t('messageRule')]" color="white" dark />
									 <div>
										  <q-btn type="submit" color="white" text-color="primary" class="text-bold q-py-sm" :class="{rubberAnim: isRubbing}" @click="rub">
												{{ $t('send') }}
										  </q-btn>
									 </div>
								</q-form>
						  </q-card>
					 </div>
				</div>
		  </div>
	 </div>
</template>
<script setup>
import {ref} from 'vue';
import {useQuasar} from 'quasar';
import '@quasar/extras/animate/rubberBand.css';
import {addMessage} from "../firebase/index.js";
import {useI18n} from 'vue-i18n';

const $q = useQuasar();
const {t} = useI18n();

const mail = ref('');
const message = ref('');
const isRubbing = ref(false);

function rub() {
    isRubbing.value = true
    setTimeout(() => {
        isRubbing.value = false
    }, 1000)
}


function onSubmit() {
    if (message.value !== '' && mail.value !== '') {
        addMessage(mail.value, message.value)
            .then((result) => {
                console.log(result.id);
                if (result.id) {
                    $q.notify({
                        color: 'green-4', textColor: 'white', icon: 'cloud_done', message: t('sent')
                    })
                    mail.value = '';
                    message.value = '';
                }
            })
            .catch((e) => {
                console.log(e);
                $q.notify({
                    color: 'red-4', textColor: 'white', icon: 'cloud_done', message: t('error')
                })
            });
    }
}
</script>
<style lang="scss" scoped>
.rubberAnim {
  animation: rubberBand;
  animation-duration: 1s;
}
</style>
