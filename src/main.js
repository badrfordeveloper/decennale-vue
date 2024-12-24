import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { VueSpinnersPlugin } from 'vue3-spinners';
import ErrorComponent from './components/ErrorComponent.vue';

import App from './App.vue'
import router from './router'
import axios from 'axios';

import jQuery from "jquery";
const $ = jQuery;
window.$ = $;


const app = createApp(App)
app.component('ErrorComponent', ErrorComponent);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(VueSpinnersPlugin);
app.use(pinia)
app.use(router)
app.config.globalProperties.$axios = axios;


app.mount('#app')
