<template>
	 <div class="q-py-xl">
		  <div class="text-h4 q-pb-xl" :class="$q.screen.gt.md ? 'text-left':'text-center'">
				{{ $t("know") }}
		  </div>
		  <div>
				<span class="q-pl-lg text-h6 text-bold">{{ $t("prog") }}</span>
				<div class="row q-py-xl justify-around items-center">
					 <div v-for="icon in iconsProg" class="col-3 col-md-2">
						  <IconDeOuf :title="icon.title" :filename="icon.filename" />
					 </div>
				</div>
				<span class="q-px-lg text-h6 text-bold">{{ $t("design") }}</span>
				<div class="row q-py-xl justify-around">
					 <div v-for="icon in iconsDesign" class="col-3 col-md-2">
						  <IconDeOuf :title="icon.title" :filename="icon.filename" />
					 </div>
				</div>
		  </div>
	 </div>
</template>
<script setup>
import IconDeOuf from '../components/IconDeOuf.vue'

const iconsProg = [{
    title: 'Laravel',
    filename: 'laravel_128'
}, {
    title: 'Vue',
    filename: 'vue_128px'
}, {
    title: 'Flutter',
    filename: 'flutter_128'
}, {
    title: 'Firebase',
    filename: 'firebase_144'
}, {
    title: 'Express',
    filename: 'expressjsbg_128'
}, {
    title: 'MongoDB',
    filename: 'mongoDB_128'
}, {
    title: 'Symfony',
    filename: 'symfony_white'
}, {
    title: 'Wordpress',
    filename: 'wordpress_128'
}, {
    title: 'ApiPlatform',
    filename: 'apiPlatform_300'
}];

const iconsDesign = [{
    title: 'Figma',
    filename: 'figma_128'
}, {
    title: 'Gimp',
    filename: 'gimp_128'
}, {
    title: 'Rive',
    filename: 'rive_92'
}]
</script>
