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


    <p>Given</p>
    <p>{{passage}}</p>
    <p>Passage Counter</p>
    <p>{{timeToRead(passage)}}</p>

    <p>Given</p>
    <p>{{wordsBeginWithConsonantSounds}}</p>
    <p>Pig Latin</p>
    <div v-for="(word, index) in wordsBeginWithConsonantSounds" :index="`wordsBeginWithConsonantSounds-${index}`">
      <p>{{pigLatin(word)}}</p>
    </div>

    <p>Given</p>
    <p>{{wordsBeginWithConsonantClusters}}</p>
    <p>Pig Latin</p>
    <div v-for="(word, index) in wordsBeginWithConsonantClusters" :index="`wordsBeginWithConsonantClusters-${index}`">
      <p>{{pigLatin(word)}}</p>
    </div>

    <p>Given</p>
    <p>{{wordsBeginWithVowelSounds}}</p>
    <p>Pig Latin</p>
    <div v-for="(word, index) in wordsBeginWithVowelSounds" :index="`wordsBeginWithVowelSounds-${index}`">
      <p>{{pigLatin(word)}}</p>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        nums: ['2', '4', '25', '10', '3'],
        camelCase: "the simplestThings in LIFE are alwaysThe best",
        titleCase: "These Words Should Go In Pairs",
        passage: `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk.The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk.`,
        averageReadingTime: 200,
        wordsBeginWithConsonantSounds: ['pig', 'latin', 'banana', 'hamlet'],
        wordsBeginWithConsonantClusters: ['smile', 'string', 'stupid'],
        wordsBeginWithVowelSounds: ['eat', 'omelet', 'are'],
        vowel: /[aeiou]/i,
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
    },

    methods: {
      // 4. Passage Counter
      // How many seconds will it take to read the provided text?
      // If it goes past 60 seconds, quote in minutes!
      timeToRead(text){
        const cleanedPassage = text.split(" ").filter(el => el.trim() !== "")
        const timeInMinutes = cleanedPassage.length / this.averageReadingTime;
        return timeInMinutes < 1 ?  `${Math.round(timeInMinutes * 60)}s`
            : `${Math.round(timeInMinutes)}mins`
      },

      // 5. Pig Latin
      // Convert any word to Pig Latin, see how to convert here => https://en.wikipedia.org/wiki/Pig_Latin
      pigLatin(word) {
        const firstVowelIndex = word.indexOf(word.match(this.vowel)[0]);
        const startsWithVowel = firstVowelIndex === 0;
        return startsWithVowel ? `${word}ay` : `${word.slice(firstVowelIndex)}${word.substr(0, firstVowelIndex)}ay`;
      }
    }
  }
</script>