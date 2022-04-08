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
    component: () => import ('../views/Login.vue'),
    meta: { guestOnly: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: { guestOnly: true }
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
    component: () => import ('../views/Profile.vue'),
    meta: { authOnly: true }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import ('../views/Dashboard.vue'),
    meta: { authOnly: true }
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: () => import ('../views/customer/Transactions.vue'),
    meta: { authOnly: true, customer: true, role: 2 }
  },
  {
    path: '/deliveries',
    name: 'Deliveries',
    component: () => import ('../views/driver/Deliveries.vue'),
    meta: { authOnly: true, driver: true, role: 1 }
  },
  {
    path: '/bookings',
    name: 'Bookings',
    component: () => import ('../views/Booking.vue'),
    meta: { authOnly: true }
  },
  {
    path: '/bookings/create',
    name: 'Create Booking',
    component: () => import ('../views/CreateBooking.vue'),
    meta: { authOnly: true }
  },
  {
    path: '/quick-search',
    name: 'Quick Search',
    component: () => import ('../views/QuickSearch.vue'),
    meta: { authOnly: true }
  },
  {
    path: '/payment-success',
    name: 'Payment Success',
    component: () => import ('../views/PaymentSuccess.vue'),
    meta: { authOnly: true }
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: () => import ('../views/Wallet.vue'),
    meta: { authOnly: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

function isLoggedIn() {
  return localStorage.getItem("auth");
}

function role() {
  return localStorage.getItem("role");
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly) && !isLoggedIn()) {
    if (!isLoggedIn()) {
      next({
        path: "/login"
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.driver)) {
    if (isLoggedIn() && role() != to.meta.role) {
      next({
        path: "/dashboard"
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.customer)) {
    if (isLoggedIn() && role() != to.meta.role) {
      next({
        path: "/dashboard"
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guestOnly)) {
    if (isLoggedIn()) {
      next({
        path: "/dashboard"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
