<template>
  <section class="skills">
    <h1>My <br/> Skills</h1>
    <div class="skill-details">
      <div class="frontend-skills">
        <h2>Frontend</h2>
        <ul class="skills-list">
          <li v-for="(s, i) in frontendSkillList" :key="i">
            <kp-progress-bar :label="s.label" :progress-percent="s.percent" />
          </li>
        </ul>
      </div>
      <div class="backend-skills">
        <h2>Backend</h2>
        <ul class="skills-list">
          <li v-for="(s, i) in backendSkillList" :key="i">
            <kp-progress-bar :label="s.label" :progress-percent="s.percent" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import KpProgressBar from '~/components/molecules/kp-progress-bar/index.vue'
export default Vue.extend({
  name: 'KpSkills',
  components: {
    KpProgressBar
  },
  data () {
    return {
      frontendSkills: [
        { label: 'HTML', percent: 90 },
        { label: 'CSS', percent: 80 },
        { label: 'SASS', percent: 80 },
        { label: 'JavaScript', percent: 70 },
        { label: 'TypeScript', percent: 60 },
        { label: 'VueJS', percent: 60 },
        { label: 'NuxtJS', percent: 60 }
      ],
      backendSkills: [
        { label: 'Java', percent: 50 },
        { label: 'Scala', percent: 60 },
        { label: 'SQL', percent: 60 },
        { label: 'NodeJS', percent: 70 },
        { label: 'Express', percent: 70 }
      ],
      pageScrollTop: 0
    }
  },
  computed: {
    frontendSkillList (): Array<{ label: string, percent: number }> {
      return this.frontendSkills.map((s: any) => {
        if (this.pageScrollTop >= 1460 && this.pageScrollTop <= 2480) {
          return s
        } else {
          return { ...s, percent: 0 }
        } 
      })
    },
    backendSkillList (): Array<{ label: string, percent: number }> {
      return this.backendSkills.map((s: any) => {
        if (this.pageScrollTop >= 1460 && this.pageScrollTop <= 2480) {
          return s
        } else {
          return { ...s, percent: 0 }
        } 
      })
    }
  },
  mounted () {
    this.pageScrollTop = window.scrollY
    document.addEventListener('scroll', (): void => {
      this.pageScrollTop = window.scrollY
    })
  }
})
</script>

<style lang="scss" scoped>

@mixin line ($width, $height) {
  content: '';
  position: absolute;
  background: $spring-sage;
  height: $height;
  width: $width;
}

.skills {
  height: 100vh;
  background: $vista-white;
  padding: 90px;
  color: $black-cow;
  position: relative;
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  &::after {
    @include line(2px, 50%);
    top: 50%;
    right: 90px;
  }
}

h1 {
  font-size: 90px;
  text-align: right;
  position: relative;
  &::before {
    @include line(75%, 2px);
    left: 0;
    top: 50%;
  }
}

.skill-details {
  position: absolute;
  bottom: 0;
  > * {
    display: inline-block;
    vertical-align: top;
  }
}

ul.skills-list {
  li:not(:last-child) {
    margin-bottom: 20px;
  }
}

.backend-skills {
  margin-left: 70px;
}
</style>
