import { createApp } from 'vue'
import App from './App.vue'

import '@/assets/index.scss'

import TurkeyMap from 'vue-turkiye-map';
import 'vue-turkiye-map/dist/style.css'

createApp(App)
.component('TurkeyMap',TurkeyMap)
.mount('#app')
