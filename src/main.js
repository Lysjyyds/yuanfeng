import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets 样式

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 样式文件
import locale from 'element-ui/lib/locale/lang/en' // lang i18n 语言

import '@/styles/index.scss' // global css 全局css文件

import App from './App'
import store from './store' // 仓库
import router from './router' // 路由

import '@/icons' // icon
import '@/permission' // permission control 权限控制

import * as echarts from 'echarts' // 引入eahcrts
Vue.prototype.$echarts = echarts

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR() // 模拟数据 mock数据 联调 >>
//   // prd >> 原型稿
// }

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app', // 挂载根组件
  router, // 路由
  store, // 存储仓库
  render: h => h(App)
})
