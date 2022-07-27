
import { setToken, removeToken } from '@/utils/auth.js'
// import { login } from '@/api/user'
// 状态
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiNTJlYWUxMS0yYWZiLTQwYjUtODg3NC01OTEwOGU0YjI0NjUiLCJzdWIiOiJ7XCJyb2xlXCI6XCJST0xFX0FETUlOXCIsXCJ0eXBlXCI6XCIyXCIsXCJ1c2VybmFtZVwiOlwiYWRtaW5cIn0iLCJpc3MiOiJhZG1pbiIsImlhdCI6MTYwNjM3MTA3NiwiZXhwIjoxNjA2OTc1ODc2fQ.pCl45pY_v2w8rZU8l60UI4cQx-Ufl7DRw0rZqhY8zeE'
const state = {
  token: token
}
// 修改状态
const mutations = {
  setToken() {
    setToken()
  },
  removeToken(state) {
    state.token = null
    removeToken()
  }
}
// 执行异步
const actions = {
  async login(context, data) {
    // const res = await login(data)
    context.commit('setToken')
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
