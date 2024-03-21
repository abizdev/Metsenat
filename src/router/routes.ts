const routes = [
  {
    path: '/',
    name: 'auth',
    meta: {
      layout: 'auth'
    },
    component: () => import('@/pages/index.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/pages/Main/Dashboard.vue')
  },
  {
    path: '/sponsors',
    name: 'sponsors',
    component: () => import('@/pages/Main/Sponsors.vue')
  },
]

export default routes