import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'
import Search from '@/views/search'
import SearchList from '@/views/search/list'
import ProDetail from '@/views/prodetail'
import Login from '@/views/login'
import Pay from '@/views/pay'
import MyOrder from '@/views/myorder'

import Home from '@/views/layout/home'
import Category from '@/views/layout/category'
import Cart from '@/views/layout/cart'
import User from '@/views/layout/user'

import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        { path: 'user', component: User },
        { path: 'home', component: Home },
        { path: 'category', component: Category },
        { path: 'cart', component: Cart }
      ]
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/searchlist',
      component: SearchList
    },
    {
      // 动态路由传参，确认将来是哪个商品，路由参数中携带 id
      path: '/prodetail/:id',
      component: ProDetail
    },
    {
      path: '/pay',
      component: Pay
    },
    {
      path: '/myorder',
      component: MyOrder
    }
  ]
})
// 需要拦截的页面路由
const authUrl = ['/pay', '/myorder']
router.beforeEach((to, from, next) => {
  // 1. to   往哪里去， 到哪去的路由信息对象
  // 2. from 从哪里来， 从哪来的路由信息对象
  // 3. next() 是否放行
  //    如果next()调用，就是放行
  //    next(路径) 拦截到某个路径页面
  if (!authUrl.includes(to.path)) {
    next()
    return
  }
  // 2. 验证是否登录
  // const token = store.state.user.userInfo.token
  const token = store.getters.token
  console.log(token)
  if (!token) {
    // 3. 如果没有token，跳转到登录页面
    next('/login')
    return
  }
  // 4. 如果有token，放行
  next()
})
export default router
