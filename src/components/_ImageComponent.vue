<template>
    <div class="image-component">
        <img class="original-image" :src="previewURL" alt="" @mouseover="hover = true" @mouseleave="hover = false">
        <img :src="largeImageURL" alt="" class="big-image" v-if="hover">
    </div>
</template>

<script>
    export default {
        props: ['previewURL', 'largeImageURL'],

        components: {},

        data() {
            return {
                hover: false
            }
        },

        computed: {
            
        },

        methods: {
            
        }
    }
</script>

<style>
    .image-component {
        cursor: pointer;
    }

    .original-image {
        position: relative;
    }

    .original-image:hover {
        transform: scale(1.1);
        transition: all .5s ease-in-out;
    }

    .big-image {
        position: absolute;
        top: 0%;
        left: 0%;
        width: 100%;
        z-index: 2;
        transition: all 1s ease-in-out;
    }
</style>