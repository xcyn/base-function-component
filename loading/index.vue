<template>
  <div>
    <div v-show="isShow">
      <div class="tj-loading">
        <div class="k-ring-2">
          <div class="k-ball-holder">
            <div class="k-ball1a">
            </div>
          </div>
        </div>
        <div class="k-text">
          正在加载...
        </div>
      </div>
      <div class="tj-mark">
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
const COMPONENT_NAME = 'tj-loading'

export default {
  name: COMPONENT_NAME,
  data () {
    return {
      balde: 12,
      isShow: false
    }
  },
  props: {
    size: {
      type: Number
    }
  },
  computed: {
    style () {
      if (!this.size) {
        return
      }
      const value = `${this.size}px`
      return {
        width: value,
        height: value
      }
    }
  },
  methods: {
    show () {
      this.isShow = true
    },
    hide () {
      this.isShow = false
    }
  }
}
</script>
<style>
  .tj-loading {
    color: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 101;
  }
  .tj-mark {
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
  }
  .k-ball-holder {
    position:absolute;
    width:20px;
    height:40px;
    left:14px;
    top:0;
    animation:k-loadingE 1.3s linear infinite
  }
  .k-ring-2 {
    position:relative;
    width:44px;
    height:44px;
    margin:0 auto;
    border:4px solid #9C27B0;
    border-radius:100%
  }
  .k-text {
    font-size: 12px;
    padding: 5px
  }
  .k-ball1a {
    position:absolute;
    top:-10px;
    left:-1px;
    width:16px;
    height:16px;
    border-radius:100%;
    background:#F44336
  }

  @keyframes k-loadingE {
    0% {
      transform:rotate(0deg)
    }
    100% {
      transform:rotate(360deg)
    }
  }

</style>
