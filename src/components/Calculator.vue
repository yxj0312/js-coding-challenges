<template class="body">
  <div class="calculator">
    <!-- the input -->
    <input type="number">
    <!-- the buttons -->
    <div class="calculator-buttons">
      <button class="calc-button is-clear">C</button>
      <button class="calc-button">&divide;</button>

      <button class="calc-button">7</button>
      <button class="calc-button">8</button>
      <button class="calc-button">9</button>
      <button class="calc-button">&times;</button>

      <button class="calc-button">4</button>
      <button class="calc-button">5</button>
      <button class="calc-button">6</button>
      <button class="calc-button">&minus;</button>

      <button class="calc-button">1</button>
      <button class="calc-button">2</button>
      <button class="calc-button">3</button>
      <button class="calc-button">&plus;</button>

      <button class="calc-button is-zero">0</button>
      <button class="calc-button is-equals">&equals;</button>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Space+Mono');

/* quick reset so all our padding is the right size */
* {
  box-sizing: border-box;
}

.calculator input,
.calc-button   {
  font-family: 'Space Mono';
}

/* add some spacing */
body          {
  background: #F6F6F6;
  padding-bottom: 30px;
  padding-top: 30px;
}

/* limit the width and center */
.calculator   {
  max-width: 400px;
  margin: 0 auto;
  border: 2px solid #111;
  border-radius: 5px;
}

.calculator input   {
  /* reset basic form styles */
  background: none;
  border: none;
  box-shadow: none;
  outline: none;

  padding: 20px 10px;
  width: 100%;
  border-bottom: 2px solid #111;
  color: #333;
  text-align: right;
  font-size: 40px;
  border-radius: 0;
}

.calc-button  {
  background: rgba(0, 0, 0, 0.5); /* light background with opacity 50% */
  border: 1px solid #111; /* black border */
  padding: 20px;
  color: #EEE; /* white text */
  border-radius: 5px; /* rounded corners */
  font-size: 22px; /* larger fonts */
  cursor: pointer; /* make it look clickable */
}

.calculator-buttons {
  /* small spacing within our container */
  padding: 20px;

  /* the grid stuff! */
  display: grid;

  /* create 4 columns */
  grid-template-columns: 1fr 1fr 1fr 1fr;

  /* add the grid gap */
  grid-gap: 15px;
}

/* span across 3 columns */
.is-zero,
.is-clear   {
  grid-column: span 3;
}

/* go blue */
.is-clear   {
  background: #3572DB;
}

.is-equals {
  background: #28D060;
}
</style>