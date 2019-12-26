<template>
  <div class="about-me">
    <!-- <span class="title">About Me</span>
    <p class="description"> 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p> -->
    <div class="skill-set">
      <div class="back-end"></div>
      <div class="front-end"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .about-me {
    // padding: 5rem;
    // height: 15rem;
    text-align: center;

    .title {
      font-size: 2rem;
      display: block;
    }
    .description {
      @media (min-width: 400px) { // for web
        width: 70%;
      }
      width: 100%;
      display: inline-block;
      font-size: .9rem;
    }
  }
</style>