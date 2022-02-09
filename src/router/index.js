import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tracking',
    name: 'Tracking',
    component: () => import ('../views/Tracking.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import ('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/verification',
    name: 'Verification',
    component: () => import ('../views/Verification.vue')
  },
  {
    path: '/authentication',
    name: 'Authentication',
    component: () => import ('../views/Authentication.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import ('../views/Profile.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import ('../views/driver/Dashboard.vue')
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: () => import ('../views/driver/Transactions.vue')
  },
  {
    path: '/deliveries',
    name: 'Deliveries',
    component: () => import ('../views/customer/deliveries/Deliveries.vue')
  },
  {
    path: '/deliveries/create',
    name: 'CreateDelivery',
    component: () => import ('../views/customer/deliveries/CreateDelivery.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
