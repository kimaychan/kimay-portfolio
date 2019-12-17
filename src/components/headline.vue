<template>
  <div class="headline with-guideline">
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
    width: 100%;
    height: 35rem;
    margin: 0 auto;
    // clear float
    zoom: 1;
    &:after { 
      content: ".";
      display: block;
      clear: both;
      visibility: hidden;
      line-height: 0;
      height: 0;
    }
    .headline-banner, .headline-content { 
      width: 48%; 
    }
    .headline-banner {
      float: left;
      .banner-image {
        float: right;
        width: 30rem;
        height: 30rem;
        margin: 20px;
      }
    }
    .headline-content {
      float: right;
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