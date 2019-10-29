import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '@/components/AppLayout'
import Products from '@/components/Products'
import Cart from '@/components/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: AppLayout,
      children: [
        {
          path: 'products',
          name: 'products',
          component: Products
        },
        {
          path: 'cart',
          name: 'cart',
          component: Cart
        }
      ]
    }
  ]
})
