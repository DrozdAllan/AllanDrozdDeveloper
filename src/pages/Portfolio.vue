<template>
	 <div class="q-py-xl">
		  <div class="col text-h4 q-pb-xl" :class="$q.screen.gt.md ? 'text-left':'text-center'">
				{{ $t("done") }}
		  </div>
		  <div>
				<q-card class="bg-primary">
					 <q-tabs v-model="tab" dense active-color="white" indicator-color="white"
								align="justify" narrow-indicator>
						  <q-tab v-for="panel in panels" :name="panel.name" :label="panel.name" />
					 </q-tabs>
					 <q-separator />
					 <q-tab-panels v-model="tab" animated class="bg-primary">
						  <panel-de-ouf v-for="panel in panels" :name="panel.name" :text="panel.text" :link="panel.link"
											 :images="panel.images" />
					 </q-tab-panels>
				</q-card>
		  </div>
	 </div>
</template>
<script setup>
import PanelDeOuf from '../components/PanelDeOuf.vue'
import {ref} from 'vue'

const tab = ref('Chinese Dome');
const fullscreen = ref(false);

const panels = [{
    name: "Chinese Dome",
    text: "chinesedome",
    link: "https://chinese-dome.herokuapp.com/",
    images: ['projects/chinesedome/1.jpg', 'projects/chinesedome/2.jpg', 'projects/chinesedome/3.jpg'],
}, {
    name: "Allan\'s Blog",
    text: "blog",
    link: "https://allandrozd.info/",
    images: ['projects/blog/1.jpg', 'projects/blog/2.jpg'],
}, {
    name: "Movie Titles API",
    text: "movietitlesapi",
    link: "https://movietitlesapi.herokuapp.com/",
    images: ['projects/movietitlesapi/1.png', 'projects/movietitlesapi/2.png', 'projects/movietitlesapi/3.png']
}, {
    name: "Larallo",
    text: "larallo",
    link: "https://larallovue3quasar.herokuapp.com/",
    images: ['projects/larallo/1.png', 'projects/larallo/2.png']
}, {
    name: "Lanya",
    text: "lanya",
    link: "https://lanya-312d6.web.app/#/",
    images: ['projects/lanya/1.png', 'projects/lanya/2.png', 'projects/lanya/3.png', 'projects/lanya/4.png', 'projects/lanya/5.png', 'projects/lanya/6.png', 'projects/lanya/7.png']
}, {
    name: "My Next Game",
    text: "mynextgame",
    link: "https://play.google.com/store/apps/details?id=com.allandrozd.my_next_game",
    images: ['projects/mynextgame/1.png', 'projects/mynextgame/2.png']
}, {
    name: "Flutter Hackaton",
    text: "hackaton",
    link: "https://flutter-hackaton-afbbc.web.app/#/",
    images: ['projects/puzzle/1.png', 'projects/puzzle/2.png', 'projects/puzzle/3.png']
}, {
    name: "Movies title",
    text: "moviesTitle",
    link: "https://mysterious-woodland-51583.herokuapp.com/",
    images: ['projects/moviestitle/1.png', 'projects/moviestitle/2.png', 'projects/moviestitle/3.png']
}, {
    name: "Mültitaskÿ",
    text: "multitasky",
    link: "https://multitask-6285a.web.app/",
    images: ['projects/multitask/1.png', 'projects/multitask/2.jpg', 'projects/multitask/3.png']
}, {
    name: "Fleeting",
    text: "fleeting",
    link: "#",
    images: ['projects/fleeting/1.jpg', 'projects/fleeting/2.jpg', 'projects/fleeting/3.jpg']
}];
</script>
