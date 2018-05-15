import Vue from 'vue'
import VueRouter from 'vue-router'

import SearchPage from '../pages/SearchPage/SearchPage.vue'
import AttractionsPage from '../pages/AttractionsPage/AttractionsPage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'SearchPage',
      component: SearchPage
    },
    {
      path: '/list/:q?',
      name: 'AttractionsPage',
      component: AttractionsPage
    }
  ]
})
