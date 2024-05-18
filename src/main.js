import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import DistanceConverter from './components/DistanceConverter.vue';
import TemperatureConverter from './components/TemperatureConverter.vue';
import WeightConverter from './components/WeightConverter.vue';

const routes = [
  { path: '/', redirect: '/distance' },
  { path: '/distance', component: DistanceConverter },
  { path: '/temperature', component: TemperatureConverter },
  { path: '/weight', component: WeightConverter },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');