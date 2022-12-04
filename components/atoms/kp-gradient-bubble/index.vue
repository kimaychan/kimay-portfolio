<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'KpGradientBubble',
    props: {
    size: {
      type: String,
      default: '500px'
    }
  }
})
</script>

<template>
  <div class="gradient-circle bounce" :style="{ height: size, width: size }" />
</template>


<style lang="scss" scoped>
.gradient-circle {
  background: linear-gradient(to right top, #00020e, #6B4984, #f83112 160%);
  //linear-gradient(152deg, $watermelon 0%, $purplish-pink 45%, $lavender-blue 100%);
  border-radius: 50%;
}
.bounce {
  animation: bounce 6s ease infinite;
}

@keyframes bounce {
	0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
	40% {
    transform: translateY(-20px);
  }
	80% {
    transform: translateY(-15px);
  }
}
</style>
