const routes = [
  {
    path: '/login',
    component: () => import('layouts/AuthLayout.vue'),
    children: [{ path: '', name: 'auth.login', component: () => import('pages/auth/LoginPage.vue') }],
  },
  {
    path: '/register',
    component: () => import('layouts/AuthLayout.vue'),
    children: [{ path: '', name: 'auth.register', component: () => import('pages/auth/LoginPage.vue') }],
  },
  {
    path: '/forgot-password',
    component: () => import('layouts/AuthLayout.vue'),
    children: [{ path: '', name: 'auth.forgotPassword', component: () => import('pages/auth/LoginPage.vue') }],
  }]

export default routes