<template>
  <section class="home">
    <header>
      <p>Mikee</p>
      <p>2024 Portfolio</p>
    </header>
    <div class="content-layout">
      <img
        class="home-banner"
        src="/images/self-portrait.png"
        srcset="/images/self-portrait.png"
        alt="Self Portrait"
      />
      <div class="greetings">
        <h1> Hi, </h1>  
        <p>
          I'm a <span class="highlight">Software Developer/</span> bookworm/cat lover from Cebu, Philippines
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
}

header {
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  color: $regular;
  font-weight: bold;
  padding: 20px 40px;
}

.content-layout {
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.greetings {
  color: $regular;
  text-align: left;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  overflow-wrap: wrap;
  padding: 20px 40px;
  h1 {
    margin: 0;
    font-size: 9em;
  }
  p {
    font-size: 2em;
    width: 400px;
    font-weight: bold;
  }
}

.highlight {
  background: $powder-blue;
  padding: 5px 10px;
}

.greetings {
  overflow-wrap: wrap;
}

.banner-container {
  height: 100%;
}

@media only screen and (min-width: $breakpoint-large) {
  .greetings {
    justify-content: center;
    height: 100%;
  }
}

@media only screen and (min-width: $breakpoint-med){
  .content-layout {
    align-items: center;
  }
}


@media only screen and (max-width: $breakpoint-large){ 
  .greetings {
    h1 {
      font-size: 4em;
    }
    p {
      font-size: 1.5em;
    }
  }
  .home-banner {
    height: 55vh;
  }
}
</style>
