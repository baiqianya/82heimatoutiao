import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Login from './views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
