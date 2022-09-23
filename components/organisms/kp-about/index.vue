<template>
  <section class="about">
    <div class="about-description">
      <h1>a little bit about me...</h1>
      <div class="text">
        <p>
          My name is Mikee Rose Bersabal. I’m 26 years old and I love being creative.
        </p>
        <p>
          As a millenial, much of my life was heavily influenced by the advancement of technology and I found that I enjoyed cultivating my creativity through the technology that I had access to growing up. I love turning ideas into reality and this passion lead me to pursue a career in software development.
        </p>
        <p>
          I graduated Bachelor of Science in Information Technology at University of Cebu-Main and started coding professionally almost immediately. Its been 6 years now and I still find ways to enjoy what I do.
        </p>
      </div>
    </div>
    <div class="about-visual">
      <img
        src="/images/mikee.jpg"
        srcset="/images/mikee.jpg"
        alt="Mikee"
        class="about-image"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  height: 850px;
  background: $vista-white;
  color: $regular;
  padding: 0 90px;
  position: relative;
  > * {
    display: inline-block;
  }
}

.about-description {
  width: 650px;
  position: absolute;
  bottom: 90px;
  h1 {
    font-size: 42px;
    margin-bottom: 60px;
  }
  .text {
    font-size: 18px;
    p:not(:last-child) {
      margin-bottom: 16px;
    }
    // position: absolute;
    // bottom: 0;
  }
}

.about-visual {

  z-index: 1;
  img {
    height: 300px;
  }
  position: relative;
  &::after {
    position: absolute;
    content: '';
    height: 300px;
    background: $sandy-beach;
    width: 100%;
    top: 30px;
    left: 30px;
    z-index: -1;
  }
}

.about-visual {
  position: absolute;
  top: 100px;
  right: 120px;
}
</style>
