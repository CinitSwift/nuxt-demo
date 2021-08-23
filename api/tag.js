import {request} from "@/plugins/request.js";

/**
 * @description 获取文章
 * @returns {AxiosPromise}
 */
export const getTags = () => {
  return request({
    method: 'GET',
    url: '/api/tags',
  })
}
