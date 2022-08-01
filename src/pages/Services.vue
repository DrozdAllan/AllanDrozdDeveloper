<template>
	 <div class="q-py-xl">
		  <div class="text-h4 q-pb-xl" :class="$q.screen.gt.sm ? 'text-left q-pl-xl' : 'text-center'">
				{{ $t("what") }}
		  </div>
		  <div class="col-12 col-md-6" :class="$q.screen.gt.sm ? 'text-left q-pl-lg desktopView' : 'text-center'">
				<q-list v-model="panel" class="bg-primary rounded-borders">
					 <q-expansion-item default-opened group="somegroup" :label="$t('what0')" header-class="text-bold"
											 expand-icon-class="text-white">
						  <q-card class="bg-primary">
								<q-card-section>
									 {{ $t("whatText0") }}
								</q-card-section>
						  </q-card>
					 </q-expansion-item>
					 <q-expansion-item group="somegroup" :label="$t('what1')" header-class="text-bold"
											 expand-icon-class="text-white">
						  <q-card class="bg-primary">
								<q-card-section>
									 {{ $t("whatText1") }}
								</q-card-section>
						  </q-card>
					 </q-expansion-item>
					 <q-expansion-item group="somegroup" :label="$t('what2')" header-class="text-bold"
											 expand-icon-class="text-white">
						  <q-card class="bg-primary">
								<q-card-section>
									 {{ $t("whatText2") }}
								</q-card-section>
						  </q-card>
					 </q-expansion-item>
					 <q-expansion-item group="somegroup" :label="$t('what3')" header-class="text-bold"
											 expand-icon-class="text-white">
						  <q-card class="bg-primary">
								<q-card-section>
									 {{ $t("whatText3") }}
								</q-card-section>
						  </q-card>
					 </q-expansion-item>
				</q-list>
		  </div>
	 </div>
</template>
<script setup>
import {ref} from 'vue';

const panel = ref(0);
</script>
<style scoped>
.desktopView {
    max-width: 650px;
}
</style>
