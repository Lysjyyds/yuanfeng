import axios from 'axios' // 引入axios
const request = axios.create({}) // 创建实例

// 请求拦截器
request.interceptors.request.use()

// 响应拦截器
request.interceptors.response.use()

export default request // 导出request
