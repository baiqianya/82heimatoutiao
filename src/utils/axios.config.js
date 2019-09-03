import axios from 'axios'

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

axios.interceptors.request.use(function (config) {
  let token = window.localStorage.getItem('user-token')
  config.headers['authorization'] = 'Bearer ' + token
  return config
})

export default {
  install: function (Vue) {
    Vue.prototype.$axios = axios
  }
}
