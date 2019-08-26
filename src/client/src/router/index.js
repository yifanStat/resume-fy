import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import(/* webpackChunkName: "resume" */ '../views/Resume.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue')
    },
    {
      path: '/readme',
      name: 'readme',
      // route level code-splitting
      // this generates a separate chunk (readme.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "readme" */ '../views/Readme.vue')
    }
  ]
})
