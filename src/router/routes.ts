const routes = [
  {
    path: '/',
    name: 'Login',
    meta: {
      layout: 'auth'
    },
    component: () => import('@/pages/Auth/PLogin.vue')
  },
  {
    path: '/main',
    name: 'Main',
    meta: {
      layout: 'default'
    },
    children: [
      {
        path: 'dashboard',
        name: 'MainDashboard',
        component: () => import('@/pages/Main/PDashboard.vue')
      },
      {
        path: 'sponsors',
        name: 'MainSponsors',
        component: () => import('@/pages/Main/PSponsors.vue')
      },
      {
        path: 'students',
        name: 'MainStudents',
        component: () => import('@/pages/Main/PStudents.vue')
      },
    ],
    component: () => import('@/pages/index.vue')
  },
]

export default routes