const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', name: 'app.home', component: () => import('pages/IndexPage.vue') }],
  },
  ]

export default routes