import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueApexCharts from "vue3-apexcharts";
// import { VueRecaptchaPlugin } from 'vue-recaptcha'

const app = createApp(App)

// app.use(VueRecaptchaPlugin, {
//   v2SiteKey: 'YOUR_V2_SITEKEY_HERE',
//   v3SiteKey: 'YOUR_V3_SITEKEY_HERE',
// })
app.use(createPinia())
app.use(VueApexCharts);
app.use(router)

app.mount('#app')
