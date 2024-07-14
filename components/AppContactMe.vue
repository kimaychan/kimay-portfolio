<template>
  <section class="contact-me">
    <div class="banner">
      <div class="text">
        <h1>Contact Me</h1>
        <p>Ask me anything or just say hi</p>
        <div class="contact-links">
          <a href="mailto:mikeebersabal@gmail.com" target="_blank">
            <BaseIcon type="google" />
          </a>
          <a href="https://www.instagram.com/kimaykee" target="_blank">
            <BaseIcon type="instagram" />
          </a>
          <a href="https://www.facebook.com/mikeeroseb/" target="_blank">
            <BaseIcon type="facebook" />
          </a>
          <a href="https://github.com/kimaychan" target="_blank">
            <BaseIcon type="github" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact-me {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner {
  width: 500px;
  text-align: center;
  h1 {
    color: $regular;
    font-size: 48px;
  }
  p {
    color: $regular;
    font-size: 24px;
  }
  .text {
    height: 100%;
  }
}

.form-container {
  height: 100%;
}

.contact-links {
  margin-top: 15px;
}
</style>
