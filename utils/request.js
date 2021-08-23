/**
 * 基于axios封装的请求模块
 */
import axios from 'axios'
// import store from '@/store'

const request = axios.create({
  baseURL: 'http://realworld.api.fed.lagounews.com/'
})

export default request
