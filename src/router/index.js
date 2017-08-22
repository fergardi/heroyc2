import Vue from 'vue'
import Router from 'vue-router'

import World from '@/views/World'
import Help from '@/views/Help'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Settings from '@/views/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: World
    },
    {
      path: '/world',
      name: 'world',
      component: World
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    }
  ]
})
