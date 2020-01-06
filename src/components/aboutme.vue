<template>
  <div class="about-me">
    <!-- <span class="title">About Me</span>
    <p class="description"> 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p> -->
    <div class="about-article">
      <div class="article-container">
        <div class="about-content">
          <span class="title">About Me</span>
          <p class="description">
            I enjoy learning new stuff and solving problems. I started professionally coding in 2016 and have since cultivated skills in using various programming tools for both my backend and frontend projects. 
          </p>
          <p class="description">
            So far, I've used Scala, Java, Webpack, VueJS, NodeJS, SASS and HTML5 as tools in building software. I'm constantly learning new tools to add to this list.
          </p>
        </div>
       
      </div>
       <div class="contact-me">
        <div class="about-content">
          <span class="title">Contact Me</span>
          <p class="description">
            <a href="https://github.com/kimaychan"><i class="fab fa-github-square"></i></a>
            <!-- <a href="https://mail.google.com/mail/u/0/#inbox?compose=new"><i class="fas fa-envelope-square"></i></a> -->
            <a href="https://ph.linkedin.com/in/mikeerose03"><i class="fab fa-linkedin"></i></a>
          </p>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .title {
    display: block;
    font-size: 1.5rem;
    font-weight: 200px;
  }
  .description {
    @media (min-width: 400px) { // for web
      width: 90%;
    }
    width: 100%;
    display: inline-block;
    font-size: .9rem;
    // margin-left: 3rem;
  }
</style>
