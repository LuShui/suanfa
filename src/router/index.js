import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: function (resolve) {
        require.ensure([], function (require) {
          resolve(require('@/components/Home'))
        })
      }
    }, {
      path: '/bubble',
      name: 'bubble',
      component: function (resolve) {
        require.ensure([], function (require) {
          resolve(require('@/components/detil/bubble'))
        })
      }
    }, {
      path: '/selectCom',
      name: 'selectCom',
      component: function (resolve) {
        require.ensure([], function (require) {
          resolve(require('@/components/detil/selectCom'))
        })
      }
    }
  ]
})
