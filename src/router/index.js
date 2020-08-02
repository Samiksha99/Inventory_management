import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ItemJC',
    name: 'JC',
    component: () => import('../views/Item_JC.vue')
  },
  {
    path: '/ItemMembers',
    name: 'Members',
    component: () => import('../views/Item_members.vue')
  },
  {
    path: '/ItemJC/:type',
    name: 'Specific Items list',
    component: () => import('../views/itemsJC.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
