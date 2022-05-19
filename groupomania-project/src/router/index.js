import { createRouter, createWebHistory } from 'vue-router'
import registration from '../views/RegistrationView.vue'
import login from '../views/LoginView.vue'
import home from '../views/HomeView.vue'


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
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
