<template>
  <div class="glass-morphism">
    <kp-gradient-bubble
      class="gradient-bubble"
      size="100px"
      :style="{ top: '20px', left: '50px', animationDelay: '1s' }"
    />
    <kp-gradient-bubble
      class="gradient-bubble"
      size="300px"
      :style="{ top: '200px', left: '450px', animationDelay: '.5s' }"
    />
    <kp-gradient-bubble
      class="gradient-bubble"
      size="100px"
      :style="{ top: '100px', right: '250px', animationDelay: '1.3s' }"
    />
    <kp-gradient-bubble
      class="gradient-bubble"
      size="80px"
      :style="{ left: '10px', bottom: '150px', animationDelay: '1.5s' }"
    />
    <kp-gradient-bubble
      class="gradient-bubble"
      size="500px"
      :style="{ bottom: '-250px', top: 'auto', right: '20px' }"
    />
    <div class="glass-container">
      <div class="background-wrapper">
        <div class="background"></div>
      </div>
      <div class="content">
        <nuxt-child />
      </div>
    </div>
    <div class="stars"></div>
    <div class="twinkling"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import KpGradientBubble from '~/components/atoms/kp-gradient-bubble/index.vue'

export default Vue.extend({
  name: 'KpLayout',
  components: {
    KpGradientBubble
  }
})
</script>

<style lang="scss" scoped>
.glass-morphism {
  height: 100%;
  position: relative;
  overflow: hidden;
}
.gradient-bubble {
  position: absolute;
  z-index: 2;
}
.glass-container {
  position: absolute;
  // margin: 50px;
  width: 85%;
  height: 85%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 3;
  .background-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .background {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    position: relative;
    backdrop-filter: blur(50px);
    border: 1px solid rgba(180, 178, 178, 0.554);
    box-shadow: 1px 0 4px rgba(180, 178, 178, 0.554);
    &::after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }
  }
  >.content {
    width: 100%;
    height: 100%;
  }
}


@keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}
@-webkit-keyframes move-twink-back {
  from {
    background-position: 0 0;
    }
  to {
    background-position: -10000px 5000px;
  }
}
@-moz-keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}

@-ms-keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}


.stars, .twinkling {
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  display:block;
}

.stars {
  background: black url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
  z-index: 0;
}

.twinkling {
  background: transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
  z-index: 1;

  -moz-animation:move-twink-back 200s linear infinite;
  -ms-animation:move-twink-back 200s linear infinite;
  -o-animation:move-twink-back 200s linear infinite;
  -webkit-animation:move-twink-back 200s linear infinite;
  animation:move-twink-back 200s linear infinite;
}

</style>
