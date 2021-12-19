// 封装axios
import store from '@/store'
import { message } from 'antd'
import axios from 'axios'
import { getToken } from './token'
import { logout } from '@/store/actions/login'
import { useHistory } from 'react-router-dom'
const instance = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0/',
  timeout: 5000,
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const token = getToken()
    if (token) {
      // 添加token
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response
  },
  function (error) {
    // console.log(error.response);
    if (error.response.status === 401) {
      message.error('登录过期了', 1)
      store.dispatch(logout())
      const history = useHistory()
      history.push('/login')
    }
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default instance
