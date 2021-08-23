/**
 * 基于axios封装的请求模块
 */
import axios from 'axios'
// import store from '@/store'

export const request = axios.create({
  baseURL: 'http://realworld.api.fed.lagounews.com/'
})

export default ({ store }) => {
  // 请求拦截器
  request.interceptors.request.use(config => {

    const user = store.state.user
    if (user) {
      config.headers.Authorization = `Token ${user.token}`
    }
    return config
  }, error => {
    return Promise.reject(error)
  })

}
