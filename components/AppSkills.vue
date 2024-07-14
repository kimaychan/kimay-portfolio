<template>
  <section class="skills content-layout">
    <h1>My Skills</h1>
    <div class="skill-details">
      <div class="frontend-skills skills-set">
        <h2>Frontend</h2>
        <ul class="skills-list">
          <li v-for="(s, i) in frontendSkillList" :key="i">
            <BaseProgressBar :label="s.label" :progress-percent="s.percent" />
          </li>
        </ul>
      </div>
      <div class="backend-skills skills-set">
        <h2>Backend</h2>
        <ul class="skills-list">
          <li v-for="(s, i) in backendSkillList" :key="i">
            <BaseProgressBar :label="s.label" :progress-percent="s.percent" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default defineComponent({
  name: 'KpSkills',
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

.content-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px 40px;
  align-items: center;
}

.skills {
  // padding: 90px;
  color: $black-cow;
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
}

h1 {
  font-size: 90px;
  text-align: center;
  // position: relative;
}

h2 {
  text-align: center;
}

.skill-details {
  display: flex;
  flex-direction: column;
  margin-top: auto;
  > *:not(:first-child) {
    margin-top: 40px;
  }
}

.skills-set {
  max-width: 650px;
}

ul.skills-list {
  li:not(:last-child) {
    margin-bottom: 18px;
  }
}

@media only screen and (min-width: $breakpoint-large) {
  .content-layout {
    padding: 90px;
    align-items: unset;
  }
  h1 {
    text-align: right;
  }
  .backend-skills {
    margin-left: 70px;
  }
  .skill-details {
    flex-direction: unset;
    > .skills-set:not(:first-child) {
      margin-top: unset;
    }
  }
  h2 {
    text-align: left;
  }
}
</style>
