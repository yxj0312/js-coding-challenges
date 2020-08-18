<template>
  <div>
    <!-- our template -->
    <section id="app" class="hero is-info is-fullheight is-bold">
    <div class="hero-body">
    <div class="container has-text-centered">

      <h2 class="title is-6">Let the countdown begin!!</h2>

        <!--  THE TIMER NUMBERS  -->
      <div id="timer">
        <span id="minutes">25</span>
        <span id="middle">:</span>
        <span id="seconds">00</span>
      </div>

      <!--  THE BUTTONS  -->
      <div id="buttons">

        <!--  START BUTTON    -->
        <button
          id="start"
          class="button is-dark is-large">
            <i class="far fa-play-circle"></i>
        </button>

        <!--   PAUSE BUTTON   -->
        <button
          id="stop"
          class="button is-dark is-large">
            <i class="far fa-pause-circle"></i>
        </button>

        <!--  RESET BUTTON   -->
        <button
          id="reset"
          class="button is-dark is-large">
            <i class="fas fa-undo"></i>
        </button>
      </div>

    </div>
    </div>
    </section>
  </div>
</template>

<style lang="scss">
#message {
  color: #DDD;
  font-size: 50px;
  margin-bottom: 20px;
}

#timer {
  font-size: 200px;
  line-height: 1;
  margin-bottom: 40px;
}
</style>