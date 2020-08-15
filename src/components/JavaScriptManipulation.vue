<template>
  <div>
    <p>Given</p>
    <p>{{nums}}</p>
    <p>Padded Number</p>
    <p>{{padNumber}}</p>

    <p>Given</p>
    <p>{{camelCase}}</p>
    <p>Camel-to-Title</p>
    <p>{{camelTotitleCase}}</p>

    <p>Given</p>
    <p>{{titleCase}}</p>
    <p>Camel-to-Title</p>
    <p>{{titleToCamelCase}}</p>

  </div>

</template>

<script>
  export default {
    data() {
      return {
        nums: ['2', '4', '25', '10', '3'],
        camelCase: "the simplestThings in LIFE are alwaysThe best",
        titleCase: "These Words Should Go In Pairs"
      }
    },

    computed: {
      // 1. Padded Number
      // Pad given single numbers in array to look like "10", "05", "16", "02"
      padNumber() {
        return this.nums.map(number => number < 10 ? `0${number}`: number);
      },

      // 2. Camel-to-Title
      camelTotitleCase() {
        return this.camelCase.split(" ")
                    .map(text => text.replace(/([A-Z])/,(match, capture) => ` ${capture}` ))
                    .map(text => text.toLowerCase().trim())
                    .join(' ')
                    .split(' ')
                    .filter(text => !!text)
                    .map(text => `${text[0].toUpperCase()}${text.slice(1)}`)
                    .join(" ")
      },

      // 3. Title-to-Camel
      titleToCamelCase() {
        const sentenceArray = this.titleCase.toLowerCase().split(" ")
        const newArray = [];

        for (let i = 1; i <= sentenceArray.length ; i+=2) {
          const wordIndex = i - 1;
          const firstWord = sentenceArray[wordIndex];
          let secondWord = sentenceArray[wordIndex + 1];
          secondWord = `${secondWord[0].toUpperCase()}${secondWord.slice(1)}`

          newArray.push(`${firstWord}${secondWord}`);
        }

        return newArray.join(" ");
      }
    }
  }
</script>