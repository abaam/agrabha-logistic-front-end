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
    path: '/tracking/:id',
    name: 'Tracking Details',
    component: () => import ('../views/TrackingDetails.vue')
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
    path: '/request-verification',
    name: 'Request Verification',
    component: () => import ('../views/RequestVerification.vue'),
    meta: { guestOnly: true }
  },
  {
    path: '/forgot-password',
    name: 'Forgot Password',
    component: () => import ('../views/ForgotPassword.vue'),
    meta: { guestOnly: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import ('../views/Profile.vue'),
    meta: { authOnly: true }
  },
  {
    path: '/security',
    name: 'Security',
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
    path: '/customer/transactions',
    name: 'Customer Transactions',
    component: () => import ('../views/customer/Transactions.vue'),
    meta: { authOnly: true, customer: true, role: 2 }
  },
  {
    path: '/driver/transactions',
    name: 'Driver Transactions',
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
    meta: { authOnly: true, customer: true, role: 2 }
  },
  {
    path: '/quick-search',
    name: 'Quick Search',
    component: () => import ('../views/QuickSearch.vue'),
    meta: { authOnly: true, driver: true, role: 1 }
  },
  {
    path: '/payment-success',
    name: 'Payment Success',
    component: () => import ('../views/PaymentSuccess.vue'),
    meta: { authOnly: true, customer: true, role: 2 }
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: () => import ('../views/Wallet.vue'),
    meta: { authOnly: true, driver: true, role: 1 }
  },
  {
    path: '/trace',
    name: 'Trace',
    component: () => import ('../views/Trace.vue'),
    meta: { authOnly: true }
  },
  {
    path: '/booking-details/:id',
    name: 'Booking Details',
    component: () => import ('../views/BookingDetails.vue'),
    meta: { authOnly: true }
  },
  {
    path: '/transaction-details',
    name: 'Transaction Details',
    component: () => import ('../views/TransactionDetails.vue'),
    meta: { authOnly: true }
  },
  {
    path: '/delivery-details',
    name: 'Delivery Details',
    component: () => import ('../views/DeliveryDetails.vue'),
    meta: { authOnly: true }
  },
  {
    path: '/payment-approval',
    name: 'Pending Approval',
    component: () => import ('../views/admin/PendingApproval.vue'),
    meta: { authOnly: true, admin: true, role: 3 }
  },
  {
    path: '/sales',
    name: 'Sales',
    component: () => import ('../views/admin/Sales.vue'),
    meta: { authOnly: true, admin: true, role: 3 }
  },
  {
    path: '/admin/transactions',
    name: 'Admin Transactions',
    component: () => import ('../views/admin/Transactions.vue'),
    meta: { authOnly: true, admin: true, role: 3 }
  },
  {
    path: '/customers',
    name: 'Customers',
    component: () => import ('../views/admin/Customers.vue'),
    meta: { authOnly: true, admin: true, role: 3 }
  },
  {
    path: '/drivers',
    name: 'Drivers',
    component: () => import ('../views/admin/Drivers.vue'),
    meta: { authOnly: true, admin: true, role: 3 }
  },
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
  } else if (to.matched.some(record => record.meta.admin)) {
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
