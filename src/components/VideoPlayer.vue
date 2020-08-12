<template>
    <div>123</div>
</template>

<script>
import axios from 'axios';

    export default {
        props: [],

        components: {},

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
            
        }
    }
</script>