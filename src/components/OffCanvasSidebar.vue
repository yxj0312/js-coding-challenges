<template>
<!-- CONTAINER -->
<div class="canvas" :class="{'show-nav':show}">

  <!--   SIDE NAV  -->
  <nav class="side-nav">
    <ul class="has-text-centered">
      <h5 class="title is-7 has-text-white">The OGs!</h5>

      <li><a href="#">Thor</a></li>
      <li><a href="#">Iron Man</a></li>
      <li><a href="#">Spidey</a></li>
      <li><a href="#">Black Widow</a></li>
      <li><a href="#">Nick Fury</a></li>
      <li><a href="#">Capt. Sizzle Amizzle</a></li>
      <li><a href="#">Hawkeye</a></li>
      <li><a href="#">Hulk! Arrghh!!</a></li>
    </ul>
  </nav>

  <!--   BODY SECTION -->
  <main class="main-content">

    <!--     TOGGLE BUTTON -->
    <a href="#" class="toggle-button" @click="show =!show">
      <i class="fas fa-bars"></i>
      <i class="far fa-window-close"></i>
    </a>


    <!--     BODY TEXT -->
    <h1 class="title">Welcome to the Avengers HQ</h1>
    <h3 class="subtitle">Checkout the badasses on the left!</h3>
    <p>PS: Use the button up top to summon them!</p>
    <p>PPS: Click the menu button to send them back!</p>

  </main>
</div>

</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss">
$side-nav-width: 230px;

body, .canvas, .main-content     {
  min-height: 100vh;
}

// the overall container
.canvas.show-nav   {
  transform: translateX($side-nav-width);
  .fa-window-close {
    display: block;
  }
  .fa-bars {
    display:none;
  }
}

// style the side navigation
.canvas .side-nav  {
  position: absolute;
  display: block;
  width: $side-nav-width;
  transform: translateX(-$side-nav-width);

  color: #E6E9F7;
  background-color: #253781;
  padding-top: 20px;
  min-height: 100%;

  a {
    color: #EEE;
    display: block;
    padding: 5px 10px;
    font-size: 0.85em;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

}

// main content and toggle button
.main-content   {
  padding: 50px;
}

.toggle-button  {
  font-size: 3em;
  color: #333;
}
.fa-window-close {
  display:none;
  margin:12px 0px;
}
.canvas  {
  transition: .5s cubic-bezier(.91,.06,.47,1.05) transform;
}
</style>