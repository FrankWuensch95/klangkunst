import { createApp } from 'vue';
import App from './App.vue';
import '/dist/output.css'; // Corrected path to the CSS file

import { createRouter, createWebHistory } from 'vue-router';
import WebHeader from './components/WebHeader.vue'; // Corrected file extension
import UeberUns from './components/UeberUns.vue'; // Corrected file extension
import InfoDirigent from './components/InfoDirigent.vue'; // Corrected file extension

const routes = [
  { path: '/', component: UeberUns },
  { path: '/über uns', component: UeberUns },
  { path: '/dirigent', component: InfoDirigent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .component('WebHeader', WebHeader)
  .mount('#app');
