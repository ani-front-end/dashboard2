import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Four from './views/Four.vue'
import Five from './views/Five.vue'
import Six from './views/Six'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
      {
          path: '/four',
          name: 'four',
          component: Four
      },
      {
          path: '/five',
          name: 'five',
          component: Five
      },
      {
          path: '/six',
          name: 'six',
          component: Six
      },
      {
          path: '*',
          redirect: '/four',
      },
  ]
})
