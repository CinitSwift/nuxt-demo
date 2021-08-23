const cookieparser = process.server ? require('cookieparser') : undefined
// 为了防止服务端渲染期间运行的都是同一个实例
// 防止数据冲突
export const state = () => {
  return {
    // 当前用户状态
    user: null
  }
}

export const mutations = {
  setUser(state, data) {
    state.user = data
  }
}

export const actions = {
  // nuxt中的特殊的一个action，仅会在服务端渲染期间自动调用
  // 初始化容器数据，传递给客户端使用
  nuxtServerInit({ commit }, { req }) {
    let user = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (e) {

      }
    }
    commit('setUser', user)
  }
}
