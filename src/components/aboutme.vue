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
        </div>
       
      </div>
      <div class="contact-me">
        
        <p class="description">
 <!-- Shopping can definitely take a toll on the bank account, so it’s best to put aside a budget prior to your trip! Some of our favorite stores in Myeongdong include Stylenanda, ALand, Indie Brand, 
        Innisfree, Olive Young, Aritaum, and Etude House for a mix of clothing and beauty brands. 
        After an exhausting couple of hours shopping, make your way to Ka Ho Dong Baekjeong for another 
        KBBQ meal! -->
        </p>   
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
