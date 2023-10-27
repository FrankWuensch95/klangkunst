import { createApp } from 'vue'
import App from './App.vue'
import '/src/output.css'

import { createRouter, createWebHistory } from 'vue-router'
import UeberUns from './components/UeberUns'
import InfoDirigent from './components/InfoDirigent'

const app = createApp(App)

const routes = [
  { path: '/', component: UeberUns },
  { path: '/ueber_uns', component: UeberUns },
  { path: '/dirigent', component: InfoDirigent },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: "active",
})

app.use(router)

app.mount('#app')
