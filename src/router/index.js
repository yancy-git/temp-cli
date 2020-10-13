import { test } from 'shelljs'
import Vue from 'vue'
import Router from 'vue-router'

// vue-router重写push方法，解决相同路径跳转报错
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}

Vue.use(Router)

export default new Router({
  // mode: history,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '/tes',
      name: 'Tes',
      component: () => import('@/components/Tes')
    }
  ]
})
