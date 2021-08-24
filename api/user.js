import {request} from "@/plugins/request.js";

/**
 * @description 登录
 * @param data
 * @returns {AxiosPromise}
 */
export const login = data => {
  return request({
    method: 'POST',
    url: '/api/users/login',
    data
  })
}

/**
 * @description 注册
 * @param data
 * @returns {AxiosPromise}
 */
export const register = data => {
  return request({
    method: 'POST',
    url: '/api/users',
    data
  })
}

/**
 * @description 获取登陆用户信息
 * @param params
 * @returns {AxiosPromise}
 */
export const getCurrentUser = () => {
  return request({
    method:'GET',
    url:'/api/user'
  })
}

/**
 * @description 更新用户信息
 * @param data
 * @returns {AxiosPromise}
 */
export const updateUserInfo = data => {
  return request({
    method:'PUT',
    url:'/api/user',
    data
  })
}

/**
 * @description 关注用户
 * @param slug
 * @returns {AxiosPromise}
 */
export const focusOnUser = slug => {
  return request({
    method:'POST',
    url:`/api/profiles/${slug}/follow`
  })
}

/**
 * @description 取关用户
 * @param slug
 * @returns {AxiosPromise}
 */
export const takeOffUser = slug => {
  return request({
    method:'DELETE',
    url:`/api/profiles/${slug}/follow`
  })
}

/**
 * @description 获取用户信息
 * @param slug
 * @returns {AxiosPromise}
 */
export const getProfiles = slug => {
  return request({
    method:'GET',
    url:`/api/profiles/${slug}`
  })
}
