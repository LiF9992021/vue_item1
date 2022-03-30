import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入登录注册页面
import login from '../components/login.vue'
import user from '../components/user.vue'
import product from '../components/product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    component:login
  },
  {
    path:'/user',
    component:user
  },
  {
    path:'/product',
    component:product
  }

]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
