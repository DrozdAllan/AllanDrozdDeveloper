<template>
	 <div class="column items-center q-pa-md">
		  <q-icon :name="`img:icons/${filename}.png`" size="60px" />
		  <q-tooltip class="bg-primary text-body1" :offset="[10, 10]">
				{{ title }}
		  </q-tooltip>
	 </div>
</template>
<script setup>
const props = defineProps({
    title: String,
    filename: String
})
</script>
