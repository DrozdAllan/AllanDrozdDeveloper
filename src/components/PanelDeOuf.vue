<template>
	 <q-tab-panel :name="name">
		  {{$t(props.text)}} <a v-if="props.name !== 'Fleeting'" class="text-white" :href="props.link" target="new">
		  {{$t('available')}}</a>
		  <q-carousel swipeable animated arrows control-color="primary" control-type="push" v-model="slide" v-model:fullscreen="fullscreen">
				<q-carousel-slide v-for="(image,index) in props.images" :name="index" :img-src="image" />
				<template v-slot:control>
					 <q-carousel-control position="bottom-right" :offset="[18, 18]">
						  <q-btn push round dense color="primary" text-color="white"
									:icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
									@click="fullscreen = !fullscreen" />
					 </q-carousel-control>
				</template>
		  </q-carousel>
	 </q-tab-panel>
</template>
<script setup>
import {ref} from "vue";

const props = defineProps({
	 name: String,
	 text: String,
	 link: String,
	 images: Array,
})

const slide = ref(0);
const fullscreen = ref(false);
</script>
