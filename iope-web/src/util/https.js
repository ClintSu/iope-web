import axios from 'axios' // 引用axios
import {getToken} from './util' // 引用刚才我们创建的util.js文件，并使用getCookie方法

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://localhost/pjm-shield-api/public/v1/' // 这是调用数据接口

// http request 拦截器，通过这个，我们就可以把Cookie传到后台
axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data)
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded' // 设置跨域头部
    }
    if (getToken()) {
      // config.params = {'token': token} // 后台接收的参数，后面我们将说明后台如何接收
      console.log(getToken())
      config.headers['Authorization'] = getToken()
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    // response.data.errCode是我接口返回的值，如果值为2，说明Cookie丢失，然后跳转到登录页，这里根据大家自己的情况来设定
    if (response.data.errCode === 2) {
      // eslint-disable-next-line no-undef
      router.push({
        path: '/login',
        // eslint-disable-next-line no-undef
        query: {redirect: router.currentRoute.fullPath} // 从哪个页面跳转
      })
    }
    return response
  },
  error => {
    return Promise.reject(error.response.data)
  })

export default axios

/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function fetch (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
