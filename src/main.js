import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import RouterMap from './router'
import VueResource from 'vue-resource'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

// 安装路由模块
Vue.use(VueRouter)

// 安装Resource模块
Vue.use(VueResource);

// 创建一个路由器实例
const router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    suppressTransitionError: true
})

// 路由表引入
RouterMap(router)

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app')
