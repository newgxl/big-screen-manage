// 导入设置localstorage的函数
import cache from "@/utils/cache.js"

const state = {
  fullLoading: false, // 是否全屏
  path: "",
  title: "", // 每个页面的标题
  bgUrl: {}, // 背景图
  theme: "" // 系统的背景 深色 还是 浅色
}

const mutations = {
  SET_FULLLOADING: (state, payload = false) => {
    state.fullLoading = payload
  },
  SET_PATH: (state, path = "/overview/cma/device") => {
    state.path = path
    cache.setCache("path", path)
  },
  SET_TITLE: (state, title = "页面标题") => {
    state.title = title
  },
  SET_BGURL(state, bgUrl = {}) {
    state.bgUrl = bgUrl
    cache.setCache("bgUrl", bgUrl)
  },
  SET_THEME(state, theme = "dark") {
    state.theme = theme
    cache.setCache("theme", theme)
  }
}
const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
