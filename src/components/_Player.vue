<template>
    <iframe 
    :src="(source != null) ? source.trailer : null" 
    frameborder="0"
    allowfullscreen
    height="376"
    style="width:100%; min-width: 750px"></iframe>
</template>

<script>
    export default {
        props: ['source'],

        components: {},

        data() {
            return {
                
            }
        },

        computed: {
            
        },

        methods: {
            
        }
    }
</script>