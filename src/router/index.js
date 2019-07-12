// 配置路由
import Vue from 'vue'
// 加载路由模块
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
// 注册到Vue中才可以使用
Vue.use(VueRouter)
const router = new VueRouter({
  // 配置路由规则
  routes: [
    { name: 'login', path: '/login', component: Login },
    { name: 'home', path: '/', component: Home }
  ]
})
// 导出
export default router
