/* 封装axios用于发送请求 */
import axios from 'axios'
import { Toast } from 'vant'
// 创建 axios 实例，将来对创建出来的实例，进行自定义配置
// 好处：不会污染原始的 axios 实例
const instance = axios.create({
  baseURL: 'http://smart-shop.itheima.net/index.php?s=/api',
  timeout: 5000
})

// 自定义配置 - 请求/响应 拦截器

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  Toast.loading({
    message: '请求中...',
    forbidClick: true, // 禁止背景点击。多次点击会产生路由重复警告
    loadingType: 'spinner', // 自定义图标
    duration: 0 // 持续展示 toast，需要在响应拦截器关闭
  })
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  const res = response.data
  if (res.status !== 200) {
    // 给提示
    Toast(res.message)
    // 抛出一个错误的promise
    return Promise.reject(res.message)
  } else {
    // 清除 loading 中的效果
    Toast.clear()
  }
  // 对响应数据做点什么(默认axios会多包装一层data)
  return response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance
