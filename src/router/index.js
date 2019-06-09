import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Pages/Home'
import Profile from '@/Pages/Profile'
import Ads from '@/Pages/Ads'
import Calendar from '@/Pages/Calendar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ads',
      component: Ads
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
