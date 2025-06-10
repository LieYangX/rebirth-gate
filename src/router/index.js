import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from '@/view/Home.vue'
import WelcomeView from '@/view/Welcome.vue'

const routes = [
  { path: '/', component: WelcomeView },
  { path: '/home', component: HomeView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router