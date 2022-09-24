<template>
  <div class="carousel">
    <p>
      use arrow keys to navigate
    </p>
    <div ref="inner" class="inner" :style="innerStyles">
      <div class="card"
        v-for="(c, i) in cards"
        :key="i"
        :style="{ 'background-image': `url(${c.imageUrl})` }"
        @click="$emit('card:click', c)"
      >
        <div class="card-details">
          <span>
            {{ c.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'KpCarousel',
  props: {
    items: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      innerStyles: {},
      step: '',
      transitioning: false,
      cards: [] as Array<any>
    }
  },
  mounted () {
    document.addEventListener('keydown', this.onKeyPress)
    this.cards = this.items
    // make sure the cards are greater than 5 so it looks continous
    if (this.items.length < 5 && this.items.length > 1) {
      this.populateCards()
    }
    this.$nextTick(() => {
      this.setStep()
      this.resetTranslate()
    })
  },
  watch: {
    items (newItems: Array<any>) {
      this.cards = newItems
    }
  },
  methods: {
    populateCards () {
      while (this.cards.length < 5) {
        this.cards = this.cards.concat(this.cards)
      }
    },
    onKeyPress (e: KeyboardEvent) {
      switch (e.key) {
        case 'ArrowRight': this.next()
          break
        case 'ArrowLeft': this.previous()
          break
      }
    },
    setStep () {
      const innerWidth = (this.$refs.inner as HTMLElement).scrollWidth
      const totalCards = this.cards.length
      this.step = `${innerWidth / totalCards}px`
    },
    next () {
      if (this.transitioning) return
      this.transitioning = true
      this.moveLeft()
      this.afterTransition(() => {
        const card = this.cards.shift()
        this.cards.push(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },
    previous () {
      if (this.transitioning) return
      this.transitioning = true
      this.moveRight()
      this.afterTransition(() => {
        const card = this.cards.pop()
        this.cards.unshift(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },
    moveLeft () {
      this.innerStyles = {
        transform: `translateX(-${this.step}) translateX(-${this.step})`
      }
    },
    moveRight () {
      this.innerStyles = {
        transform: `translateX(${this.step}) translateX(-${this.step})`
      }
    },
    resetTranslate () {
      this.innerStyles = {
        transition: 'none',
        transform: `translateX(-${this.step})`
      }
    },
    afterTransition (callback: Function) {
      const listener = () => {
        if (callback) {
          callback()
        }
        (this.$refs.inner as HTMLElement).removeEventListener('transitionend', listener)
      }
      (this.$refs.inner as HTMLElement).addEventListener('transitionend', listener)
    }
  }
})
</script>

<style lang="scss" scoped>
.card {
  display: inline-block;
  width: 540px;
  height: 300px;
  border-radius: 5px;
  background-size: contain;
  cursor: pointer;
  position: relative;
  filter: grayscale(80%);
  &:hover {
    filter: brightness(99%);
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
}

.card-details {
  height: 100%;
  width: 100%;
  position: relative;
  > span {
    width: fit-content;
    display: block;
    padding: 10px;
    background: $black-cow;
    color: $vista-white;
    position: absolute;
    bottom: 0;
    right: 0;
  }
}

.carousel {
  overflow: hidden;
  width: 100%;
}

.inner {
  white-space: nowrap;
  transition: transform 0.2s;
}

p {
  color: $regular;
  margin-bottom: 10px;
}
</style>
