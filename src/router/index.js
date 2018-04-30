import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Courses from '@/components/Courses'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Courses
    }
  ]
})
