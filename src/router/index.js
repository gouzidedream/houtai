import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/pages/index/index.vue'
import Practicejob from '../components/pages/practicejob/practicejob.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Index,
      children: [
        {
          path: '/practicejob',
          component: Practicejob
        }
      ]
    }
  ]
})
