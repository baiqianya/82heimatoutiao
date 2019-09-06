import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Login from './views/login'
import Main from './components/home/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      children: [{
        path: '',
        component: Main
      }, {
        path: 'comment',
        component: () => import('./views/comment')
      }, {
        path: 'material',
        component: () => import('./views/material')
      }, {
        path: 'articles',
        component: () => import('./views/articles')
      }]
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
