<template>
  <article>
    <image-item :source="'https://res.cloudinary.com/chuloo/image/upload/c_scale,w_533/v1526593811/15_eegbn0.webp'"></image-item>
    <image-item :source="`https://res.cloudinary.com/chuloo/image/upload/c_scale,w_655/v1526593811/14_alibgk.webp`"></image-item>
    <image-item :source="`https://res.cloudinary.com/chuloo/image/upload/c_scale,w_533/v1526593811/15_eegbn0.webp`"></image-item>
    <image-item :source="`https://res.cloudinary.com/chuloo/image/upload/c_scale,w_533/v1526593811/15_eegbn0.webp`"></image-item>
    <image-item :source="`https://res.cloudinary.com/chuloo/image/upload/c_scale,w_533/v1526593811/15_eegbn0.webp`"></image-item>
    <image-item :source="`https://res.cloudinary.com/chuloo/image/upload/c_scale,w_533/v1526593811/15_eegbn0.webp`"></image-item>
  </article>
</template>

<script>
// import LazyLoadDirective from "../directives/LazyLoadDirective";
import ImageItem from "./_ImageItem";

  export default {
    components: {
      ImageItem
    },
    // directives: {
    //   lazyload: LazyLoadDirective
    // }
  }
</script>