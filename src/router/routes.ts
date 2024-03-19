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
    path: '/main',
    name: 'main',
    meta: {
      layout: 'default'
    },
    children: [
      {
        path: 'dashboard',
        name: 'main-dashboard',
        component: () => import('@/pages/Main/Dashboard.vue')
      },
    ],
    component: () => import('@/pages/index.vue')
  },

]

export default routes