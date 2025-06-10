import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from '@/view/Home.vue'

const routes = [
  { path: '/', component: HomeView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router