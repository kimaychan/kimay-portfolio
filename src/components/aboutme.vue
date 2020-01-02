<template>
  <div class="about-me">
    <!-- <span class="title">About Me</span>
    <p class="description"> 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p> -->
    <div class="skill-set">
      <div class="back-end">
        <p class="description">
           Start your day in Myeongdong with breakfast. You’ll need to fuel up for the shopping you’re about to do! Although Myeongdong 
        is known for its delicious street food options, we also recommend checking out their many cafes, 
        some of which are listed in our article on top cafes in Seoul.
        </p>
       
      </div>
      <div class="front-end">
        <p class="description">
 Shopping can definitely take a toll on the bank account, so it’s best to put aside a budget prior to your trip! Some of our favorite stores in Myeongdong include Stylenanda, ALand, Indie Brand, 
        Innisfree, Olive Young, Aritaum, and Etude House for a mix of clothing and beauty brands. 
        After an exhausting couple of hours shopping, make your way to Ka Ho Dong Baekjeong for another 
        KBBQ meal!
        </p>   
      </div>
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