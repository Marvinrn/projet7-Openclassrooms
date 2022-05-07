import { createRouter, createWebHistory } from 'vue-router'
import registration from '../views/RegistrationView.vue'
import login from '../views/LoginView.vue'


const routes = [
  {
    path: '/',
    name: 'registration',
    component: registration
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
