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
  { path: '<%= BASE_URL %>/', component: UeberUns },
  { path: '<%= BASE_URL %>/ueber_uns', component: UeberUns },
  { path: '<%= BASE_URL %>/dirigent', component: InfoDirigent },
  { path: '<%= BASE_URL %>/geschichte', component: InfoGeschichte },
  { path: '<%= BASE_URL %>/aktuelles', component: InfoAktuelles },
  { path: '<%= BASE_URL %>/galerie', component: BilderGalerie },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: "active",
})

app.use(router)

app.mount('#app')
