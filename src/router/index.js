import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../auth'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        if (auth.loggedIn) {
          next()
        } else {
          next('/login')
        }
      },
    },
  ],
})

export default router
