<template>
    <div class="page">
        <div class="search-area" :class="{'search-area--has-searched':images && images.length !== 0}">
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
            <h3 v-if="images && !images.length && !isSearching" class="not-found-info">No results found!</h3>
        </div>
        <div class="hero-area" :class="{'hero-area--has-no-searched':images && images.length === 0}">
            <div v-if="images" class="hero__container">
                <div v-for="(image, index) in images" :key="`image ${index}`" class="hero__image">
                    <image-component :previewURL="image.previewURL" :largeImageURL="image.largeImageURL"></image-component>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import imageComponent from './_ImageComponent';

    export default {
        props: [],

        components: {
            imageComponent
        },

        data() {
            return {
                apiUrl: 'https://pixabay.com/api',
                apiKey: '8653965-67fc8570b61c58e735d9adade',
                images: null,
                isSearching: false,
                query: '',
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
    flex-direction: column;
    overflow: hidden;
}

.search-area {
    height: 100%;
    background: black;
    color:cornsilk;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 1s cubic-bezier(.7,.28,.47,1.15) height; 
}

.search-area--has-searched {
    height: 50%;
}

.not-found-info {
    color:crimson;
    font-size: 0.875rem;
}

.hero-area {
    height:50%;
    background: cadetblue;
    transition: 1s cubic-bezier(.7,.28,.47,1.15) height; 
}

.hero-area--has-no-searched {
    display: none;
}

.hero__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 165px;
}

.hero__image {
    margin: 0;
    flex: 0 1 155px;
}

</style>