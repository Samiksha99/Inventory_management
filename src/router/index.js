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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
  },
  {
    path: '/ItemJC/:type/:id',
    name: 'Specific Items list',
    component: () => import('../views/itemsJC.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
