import './assets/css/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import VueApexCharts from 'vue3-apexcharts';
// import { VueRecaptchaPlugin } from 'vue-recaptcha/head'

const app = createApp(App);

// app.use(VueRecaptchaPlugin, {
//   v3SiteKey: import.meta.env.VITE_RECAPTCHA_KEY
// });
app.use(createPinia());
app.use(VueApexCharts);
app.use(router);

app.mount('#app');
