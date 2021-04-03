import { createRouter, createWebHistory } from 'vue-router'
import homepage from '../views/Homepage.vue'
import document from '../views/Document.vue'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: homepage
  },
  {
    path: '/document',
    name: 'Document',
    component: document
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
