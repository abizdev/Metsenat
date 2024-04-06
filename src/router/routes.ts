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
        meta: { isAuthenticated: true },
        component: () => import('@/pages/Main/PDashboard.vue')
      },
      {
        path: 'sponsors',
        name: 'MainSponsors',
        meta: { isAuthenticated: true },
        component: () => import('@/pages/Main/PSponsors.vue')
      },
      {
        path: 'students',
        name: 'MainStudents',
        meta: { isAuthenticated: true },
        component: () => import('@/pages/Main/PStudents.vue')
      },
    ],
    component: () => import('@/pages/index.vue')
  },
  {
    path: '/sponsor/:id',
    name: 'Sponsor',
    component: () => import('@/pages/Users/PSponsor.vue')
  },
  {
    path: '/student/:id',
    name: 'Student',
    component: () => import('@/pages/Users/PStudent.vue')
  },
  {
    path: '/create-student/',
    name: 'NewStudent',
    component: () => import('@/pages/NewStudent.vue')
  }
]

export default routes