import axios from 'axios'
import { config } from 'vue/types/umd'

// 创建一个新的axios实例
const request = axios.create({
  baseURL:'/api',//配置基础路径
  timeout:20000,//配置延迟时间
})


// 请求拦截器
request.interceptors.request.use(config => {

  return config;
})


// 响应拦截器
request.interceptors.response.use(response =>{

 //返回响应的时候，直接返回响应的data
 return response.data
},error =>{

   alert('请求出错' + error.message || '未知错误')

    return new Promise(() => {})
})

export default request