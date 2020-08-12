<template>
    <div class="video-container">
        <player class="video-player" :source="this.current"></player>
        <thumbnails :movies="this.movies" class="video-choices" v-on:choose-movie="handleChangeCurrent"></thumbnails>
    </div>
</template>

<script>
import axios from 'axios';
import player from './_Player';
import thumbnails from './_Thumbnails';

    export default {
        props: [],

        components: {
            player,
            thumbnails
        },

        data() {
            return {
               api: "https://scotch-mvplayer-api.herokuapp.com/api/v1", 
               movies: [],
               current: null
            };
        },

        created() {
            axios.get(this.api)
                .then(res => {
                    this.movies = res.data;
                    this.current = this.movies[0];
                });
        },

        computed: {
            
        },

        methods: {
            handleChangeCurrent(movie) {
                this.current = movie
            }
        }
    }
</script>

<style lang="scss">

.video-choices  {
  display: flex;
  
  :not(:last-child) {
    margin-right: 5px;
  }
  
  img {
    height: 100px;
  }  
}
</style>