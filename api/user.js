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
