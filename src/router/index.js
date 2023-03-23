import { createRouter, createWebHistory } from 'vue-router'

import dashboard from "../pages/master/dashboaerd.vue"
import home from "../pages/home.vue"
import profile from "../pages/profile.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard,
      children:[
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/profile',
          name: 'profile',
          component: profile
        }
      ]
    },
  ]
})

export default router
