import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Counter from './pages/Counter.vue'
import Test from './pages/Test.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/couter', name: 'counter', component: Counter },
  { path: '/test', name: 'test', component: Test },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
