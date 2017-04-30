import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro'
import Play from '@/components/Play'
import Victory from '@/components/Victory'
import Youlost from '@/components/Youlost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/play',
      name: 'Play',
      component: Play
    },
    {
      path: '/victory',
      name: 'Victory',
      component: Victory
    },
    {
      path: '/youlost',
      name: 'Youlost',
      component: Youlost
    }
  ]
})
