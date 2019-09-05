import layoutAside from './home/layout-aside'
import layoutHeader from './home/layout-header'
import breakCrumb from './common/bread-crumb'
export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside)
    Vue.component('layout-header', layoutHeader)
    Vue.component('break-crumb', breakCrumb)
  }
}
