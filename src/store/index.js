import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app, // 管理侧边栏
    settings, // 全局设置样式
    user // 用户信息
  },
  getters // 快捷访问
})

export default store
