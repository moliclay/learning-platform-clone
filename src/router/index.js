import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/assignment3' },
    {
      path: '/assignment3',
      name: 'Assignment3',
      component: () => import('../views/Assignment3.vue'),
    },
    { path: '/:pathMatch(.*)*', redirect: '/assignment3' },
  ],
})

export default router
