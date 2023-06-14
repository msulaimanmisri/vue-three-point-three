import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },

    {
      path: '/services',
      name: 'services',
      component: () => import('../views/Services.vue')
    }
  ]
})

export default router
