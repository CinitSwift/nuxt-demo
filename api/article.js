import {request} from "@/plugins/request.js";

/**
 * @description 获取文章
 * @returns {AxiosPromise}
 * @param params
 */
export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles',
    params
  })
}

/**
 * @description 获取关注的文章
 * @param params
 * @returns {AxiosPromise}
 */
export const getFeedArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles/feed',
    params
  })
}

/**
 * @description 点赞
 * @returns {AxiosPromise}
 * @param slug
 */
export const addFavorite = slug => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  })
}

/**
 * @description 取消点赞
 * @returns {AxiosPromise}
 * @param slug
 */
export const deleteFavorite = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  })
}

/**
 * @description 获取文章详情
 * @param slug
 * @returns {AxiosPromise}
 */
export const getArticle = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`
  })
}

/**
 * @description 获取文章评论
 * @param slug
 * @returns {AxiosPromise}
 */
export const getComments = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  })
}

/**
 * @description 发布文章
 * @param data
 * @returns {AxiosPromise}
 */
export const releaseArticle = data => {
  return request({
    method: 'POST',
    url: '/api/articles',
    data
  })
}
