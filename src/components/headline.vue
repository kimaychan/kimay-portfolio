<template>
  <div class="headline">
    <div class="headline-banner">
      <div class="banner-image with-guideline">
        [banner here]
      </div>
    </div>
    <div class="headline-content">
      <div class="content">
        <span class="title">[Headline Title]</span>
        <p class="description">
          [Headline description]
        </p>
      </div>
    </div>
   
  </div>
</template>
<style lang="scss" scoped>

  .headline {
    @media (min-width: 400px) { // for web
      height: 100%;
    }
    background: #E6DED3;
    height: 100vh;
    margin: 0 auto;
    padding: 5rem 0 5rem 0;
    border: solid .03px #acacac;
    .headline-banner {
      text-align: center;
      padding: 1rem;
      .banner-image { // dummy 
        display: inline-block;
        border-radius: 10px;
        width: 10rem;
        height: 10rem;
      }
    }
    .headline-content {
      text-align: center;
      padding: 1rem;
      .content {
        .title {
          font-size: 2rem;
        }
        .description {
          font-size: 1rem;
        }
      }
    }
  }

</style>