import { _initLoading } from './loading/index.js'

const XLoading = {
  install: function (Vue) {
    Vue.prototype.$XLoading = _initLoading()
  }
}

export default XLoading