<template lang="html">
  <div class="ve-lazyload" :style="customStyle">
    <div ref="padding" class="padding">
      <img :src="paddingImg" alt="paddingImg" :style="paddingImgStyle">
    </div>
    <div ref="target" class="target">
      <img class="target-img" v-lazyload="lazyloadOptions" src="" alt="targetImg">
    </div>
  </div>
</template>

<script>
export default {
  name: 've-lazyload',
  props: {
    src: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: '100px',
      required: true,
    },
    height: {
      type: String,
      default: '100px',
      required: true,
    },
    paddingImg: {
      type: String,
      default: '',
    },
    paddingImgWidth: {
      type: String,
      default: '100%',
    },
    paddingImgHeight: {
      type: String,
      default: 'auto',
    },
    paddingBackground: {
      type: String,
      default: '#f9f9f9',
    },
    speed: {
      type: Number,
      default: 40,
    }
  },
  data() {
    return {
    }
  },
  computed: {
    customStyle() {
      return [
        {width: this.width},
        {height: this.height},
        {background: this.paddingBackground},
      ]
    },
    paddingImgStyle() {
      return [
        {width: this.paddingImgWidth},
        {height: this.paddingImgHeight},
      ]
    },
    lazyloadOptions() {
      return {
        src: this.src,
        callback: this.onload,
      }
    }
  },
  methods: {
    onload() {
      const paddingElm = this.$refs.padding
      const targetElm = this.$refs.target
      fadeInOut(targetElm, paddingElm, this.speed)
    }
  },
  directives: {
    lazyload: {
      bind: (el, binding) => {
        const img = new Image()
        img.src = binding.value.src
        img.onload = () => {
          el.src = img.src
          binding.value.callback()
        }
      }
    }
  },
}

function fadeInOut(newElm, oldElm, speed) {
  if (!newElm) {
    return
  }
  newElm.style.opacity = 0
  newElm.style.display = "block"
  ;(function fade() {
    let val = parseFloat(newElm.style.opacity)
    if (!((val += .1) > 1)) {
      newElm.style.opacity = val
      setTimeout(fade, speed)
    } else {
      oldElm.parentNode.removeChild(oldElm)
    }
  })()
}
</script>

<style lang="less">
.ve-lazyload {
  position: relative;
  .padding {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: inherit;
  }
  .target {
    width: 100%;
    height: inherit;
    position: absolute;
    overflow: hidden;
    opacity: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .target-img {
      width: 100%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
