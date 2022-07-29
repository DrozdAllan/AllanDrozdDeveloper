<template>
	 <q-item clickable @click="$emit('clickEvent');inScroll()">
		  <q-item-section v-if="icon" avatar>
				<q-icon :name="icon" />
		  </q-item-section>
		  <q-item-section>
				<q-item-label>{{ $t(title) }}</q-item-label>
		  </q-item-section>
	 </q-item>
</template>
<script setup>
import {scroll} from 'quasar'

const {
    getScrollTarget,
    setVerticalScrollPosition
} = scroll

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        default: ''
    },
    id: {
        type: String,
    }
})

function inScroll() {
    const el = document.getElementById(props.id);
    const target = getScrollTarget(el)
    const offset = el.offsetTop
    const duration = 1000
    setVerticalScrollPosition(target, offset, duration);
}
</script>
