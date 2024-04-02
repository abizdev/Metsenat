import './assets/css/main.css';
import 'v-calendar/style.css';
import "vue-awesome-paginate/dist/style.css";

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import VueApexCharts from 'vue3-apexcharts';
import VCalendar from 'v-calendar';
import VueAwesomePaginate from "vue-awesome-paginate";

const app = createApp(App);

app.use(createPinia());
app.use(VueApexCharts);
app.use(VCalendar, {})
app.use(VueAwesomePaginate)
app.use(router);

app.mount('#app');
