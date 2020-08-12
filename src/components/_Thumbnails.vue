<template>
    <div class="thumbnails">
        <div v-for="(movie, index) in movies" :key="'movie ' + index" class="poster">
            <div @click="changeCurrent(movie)">
                <img :src="movie.poster" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['movies'],

        components: {},

        data() {
            return {
                
            }
        },

        computed: {
            
        },

        methods: {
            changeCurrent(movie) {
                this.$emit('choose-movie', movie)
            }
        }
    }
</script>

<style>

.poster{
    float: left;
 }
.thumbnails{
  display: flex;
  justify-content: left;
}
    
</style>