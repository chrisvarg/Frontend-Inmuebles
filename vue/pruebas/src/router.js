import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'

const routes = [{
    path: '/',
    name: 'root',
    component: App
  },
  {
    path: '/user/login',
    name: 'login',
    component: Login
  },
  {
    path: '/user/signup',
    name: 'signup',
    component: SignUp
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
