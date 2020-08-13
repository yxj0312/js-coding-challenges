<template>
    <div class="page">
        <form @submit.prevent="search" class="search-form">
            <input 
                type="text"
                class="input"
                placeholder="What images would you like to see on Pixabay?"
                v-model="query">
            <button
                type="submit"
            >{{ isSearching ? 'Searching' : 'Search' }}
            </button>
        </form>
        <div class="hero">
            <div v-if="images" class="hero__container">
                <div v-for="(image, index) in images" :key="`image ${index}`" class="hero__image">
                    <img :src="image.previewURL" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        props: [],

        components: {},

        data() {
            return {
                apiUrl: 'https://pixabay.com/api',
                apiKey: '8653965-67fc8570b61c58e735d9adade',
                images: null,
                isSearching: false,
                query: ''
            }
        },

        computed: {
        },

        methods: {
            search() {
                if (this.query) {
                    this.images = [];
                    this.isSearching = true;
                    const searchQuery = encodeURIComponent(this.query);
                    
                    axios.get(`${this.apiUrl}/?key=${this.apiKey}&q=${searchQuery}s&image_type=photo&per_page=15&safesearch=true`)
                        .then(res => {
                            if (res.data.total != 0) {
                                this.images = res.data.hits
                                this.isSearching = false;
                            } else {
                               this.isSearching = false; 
                            }
                        })
                } else {
                    this.images = [];
                    this.isSearching = false;
                }
                
            }
        }
    }
</script>

<style>
.page {
    height: 100%;
    height: 100vh;
    background:burlywood;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
}

.hero__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 72px;
    padding: 0 165px;
}

.hero__image {
    margin: 0;
    flex: 0 1 155px;
}

</style>