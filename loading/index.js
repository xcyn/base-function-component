import Vue from 'vue'
import Loading from './index.vue'

function _initTjLoading () {
  var container = document.createElement('div')
  document.body.appendChild(container)
  var num = 0
  const tjLoading = new Vue({
    el: container,
    methods: {
      show () {
        num++
        this.$refs.tjLoading.show()
      },
      hide (key) {
        num--
        if (num <= 0) {
          num = 0
          this.$refs.tjLoading.hide()
        } else {
          // log正在加载的loading
          // console.log(`接口${key}，还有loading正在加载中.....`)
        }
      }
    },
    render: function (createElement) {
      return createElement(Loading, {
        ref: 'tjLoading'
      })
    }
  })
  return tjLoading
}

const strategyLoading = {
  install: function (Vue) {
    Vue.prototype.$strategyLoading = _initTjLoading()
  }
}

// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(strategyLoading)
}

export default strategyLoading
