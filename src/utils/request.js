import axios from 'axios'
import store from '@/store'
// 创建了一个新的axios实例
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000 // 超时时间
})
// 请求拦截器
request.interceptors.request.use(config => {
  const token = store.getters.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, error => Promise.reject(error))

// 响应拦截器
request.interceptors.response.use()
export default request
