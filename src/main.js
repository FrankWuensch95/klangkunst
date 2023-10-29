import { createApp } from 'vue'
import App from './App.vue'
import '/src/fonts.css'
import '/src/output.css'
import '/src/iconify-min'

import { createRouter, createWebHistory } from 'vue-router'

import UeberUns from '@/components/UeberUns'
import InfoDirigent from '@/components/InfoDirigent'
import InfoGeschichte from '@/components/InfoGeschichte'
import BilderGalerie from '@/components/BilderGalerie'
import InfoAktuelles from '@/components/InfoAktuelles'

const app = createApp(App)

const routes = [
  { path: '/', component: UeberUns },
  { path: '/ueber_uns', component: UeberUns },
  { path: '/dirigent', component: InfoDirigent },
  { path: '/geschichte', component: InfoGeschichte },
  { path: '/aktuelles', component: InfoAktuelles },
  { path: '/galerie', component: BilderGalerie },
]

const router = createRouter({
  mode: 'hash',
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: "active",
})

app.use(router)

app.mount('#app')
