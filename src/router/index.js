// 配置路由
import Vue from 'vue'
// 加载路由模块
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFount from '@/views/NotFount'
// 注册到Vue中才可以使用
Vue.use(VueRouter)
const router = new VueRouter({
  // 配置路由规则
  routes: [
    { name: 'login', path: '/login', component: Login },
    {
      path: '/',
      component: Home,
      children: [
        { name: 'welcome', path: '/', component: Welcome }
      ]
    },
    // ...很多规则
    { name: '404', path: '*', component: NotFount }
  ]
})

// 加上前置守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const user = window.sessionStorage.getItem('hm74-toutiao')
  if (user) return next()
  next('/login')
})
// 导出
export default router