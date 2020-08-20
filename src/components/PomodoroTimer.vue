<template>
  <div>
    <!-- our template -->
    <section id="app" class="hero is-info is-fullheight is-bold">
    <div class="hero-body">
    <div class="container has-text-centered">

      <h2 class="title is-6">{{ title }}</h2>

        <!--  THE TIMER NUMBERS  -->
      <div id="timer">
        <span id="minutes">{{ minutes }}</span>
        <span id="middle">:</span>
        <span id="seconds">{{ seconds }}</span>
      </div>

      <!--  THE BUTTONS  -->
      <div id="buttons">

        <!--  START BUTTON    -->
        <button
          id="start"
          class="button is-dark is-large"
          v-if="!timer"
          @click="startTimer">
            <i class="far fa-play-circle"></i>
        </button>

        <!--   PAUSE BUTTON   -->
        <button
          id="stop"
          class="button is-dark is-large"
          v-if="timer"
          @click="stopTimer"
        >
            <i class="far fa-pause-circle"></i>
        </button>

        <!--  RESET BUTTON   -->
        <button
          id="reset"
          class="button is-dark is-large"
          v-if="resetButton"
          @click="resetTimer"
        >
            <i class="fas fa-undo"></i>
        </button>
      </div>

    </div>
    </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PomodoroTimer',
  data() {
    return {
      title: "Let the countdown begin!!",
      timer: null,
      resetButton: false,
      totalTime: (25 * 60)
    };
  },

  computed: {
    minutes() {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds() {
      const seconds = this.totalTime - (this.minutes * 60);
      return this.padTime(seconds);
    }
  },

  methods: {
    padTime(time) {
      return (time < 10 ? '0' : '') + time;
    },

    countdown() {
      if (this.totalTime >= 1) {
        this.totalTime--;
      } else {
        this.totalTime = 0;
      }
    },

    startTimer() {
      this.timer = setInterval(()=>this.countdown(), 1000);
      this.resetButton = true;
      this.title = "Greatness is within sight!!"
    },

    stopTimer() {
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = true;
      this.title="Never quit, keep going!!"
    },

    resetTimer() {
      this.totalTime = (25 * 60);
      clearInterval(this.timer);
      this.resetButton = false;
      this.title = "Let the countdown begin!!"
    }
  }

}
</script>

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