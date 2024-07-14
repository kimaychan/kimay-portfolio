<template>
  <section class="about content-layout">
    <div class="about-description">
      <h1>a little bit about me...</h1>
      <div class="text">
        <p>
          Hey there, I'm Mikee Rose Bersabal and I'm all about creativity.
        </p>
        <p>
          Being a millennial, tech has been a big part of my life. I've always loved using technology to fuel my creative streak. That's what got me into software development — turning ideas into reality is up my street.
        </p>
        <p>
          I graduated with a Bachelor of Science in Information Technology from the University of Cebu-Main, and pretty much jumped straight into professional coding. It's been seven years now, and I'm still soaking up new coding tricks and techniques.
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
  min-height: 100vh;
  color: $regular;
}

.about-description {
  h1 {
    font-size: 42px;
    margin-bottom: 60px;
  }
  .text {
    font-size: 18px;
    overflow-wrap: wrap;
    p:not(:last-child) {
      margin-bottom: 16px;
    }
  }
  p {
    max-width: 650px;
  }
}

.about-visual {
  img {
    height: 36vh;
    box-shadow: 30px 30px $sandy-beach;
  }
}

.content-layout {
  display: flex;
}

@media only screen and (min-width: $breakpoint-large) {
  .content-layout {
    padding: 90px 0;
    justify-content: space-between;
  }
  .about-description {
    margin-top: auto;
    padding-left: 90px;
  }
  .about-visual {
    padding-right: 100px;
  }
}

@media only screen and (max-width: $breakpoint-large) {
  .content-layout {
    flex-direction: column-reverse;
    justify-content: center;
  }
  .about-description {
    margin-top: 5rem;
    width: 100%;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .about-visual {
    text-align: center;
  }
}
</style>
