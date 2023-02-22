import {createApp} from 'vue'
import {Quasar, Notify} from 'quasar'

import {createI18n} from "vue-i18n";
import en from './i18n/en.json'
import fr from './i18n/fr.json'
const i18n = createI18n({
	legacy: false,
    locale: 'en',
    messages: {
        en: en,
        fr: fr
    }
})

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
import './css/style.css'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const myApp = createApp(App)

myApp.use(i18n);
myApp.use(Quasar, {
    plugins: {
        Notify,
    }, // import Quasar plugins and add here
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
