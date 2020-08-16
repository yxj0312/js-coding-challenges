<template>
  <div>
    <!-- header -->
    <nav class="navbar is-link is-fixed-top">
      <div class="navbar-brand">
        <h1 class="navbar-item is-size-4">Scotchy Memes</h1>
      </div>
    </nav>

    <!-- scroll to top button -->
    <a class="is-size-6 button is-warning scroll-top" href="#top">
      Scroll To Top
    </a>

    <!-- the actual content -->
    <div class="section">
    <div class="container">
      <div class="images">
        <div class="box image is-5by4">
          <img src="https://res.cloudinary.com/chuloo/image/upload/c_scale,w_10/v1526593811/15_eegbn0.webp" data-src="https://res.cloudinary.com/chuloo/image/upload/c_scale,w_533/v1526593811/15_eegbn0.webp" alt="" id="top">
        </div>

        <div class="box image is-5by4">
          <img src="https://res.cloudinary.com/chuloo/image/upload/c_scale,w_10/v1526593811/14_alibgk.webp" data-src="https://res.cloudinary.com/chuloo/image/upload/c_scale,w_655/v1526593811/14_alibgk.webp" alt="">
        </div>

        <div class="box image is-5by4">
          <img src="https://res.cloudinary.com/chuloo/image/upload/c_scale,w_10/v1526593811/13_w6cduy.webp" data-src="https://res.cloudinary.com/chuloo/image/upload/c_scale,w_532/v1526593811/13_w6cduy.webp" alt="">
        </div>

        <div class="box image is-5by4">
          <img src="https://res.cloudinary.com/chuloo/image/upload/c_scale,w_10/v1526593810/11_sx2cpl.webp" data-src="https://res.cloudinary.com/chuloo/image/upload/c_scale,w_538/v1526593810/11_sx2cpl.webp" alt="">
        </div>

        <div class="box image is-5by4">
          <img src="https://res.cloudinary.com/chuloo/image/upload/c_scale,w_10/v1526593810/10_glcemk.webp" data-src="https://res.cloudinary.com/chuloo/image/upload/c_scale,w_650/v1526593810/10_glcemk.webp" alt="">
        </div>

        <div class="box image is-5by4">
          <img src="https://res.cloudinary.com/chuloo/image/upload/c_scale,w_10/v1526593810/08_kzi8xe.webp" data-src="https://res.cloudinary.com/chuloo/image/upload/c_scale,w_691/v1526593810/08_kzi8xe.webp" alt="">
        </div>

        <div class="box image is-5by4">
          <img src="https://res.cloudinary.com/chuloo/image/upload/c_scale,w_10/v1526593810/07_loq0b4.webp" data-src="https://res.cloudinary.com/chuloo/image/upload/c_scale,w_703/v1526593810/07_loq0b4.webp" alt="">
        </div>

        <div class="box image is-5by4">
          <img src="https://res.cloudinary.com/chuloo/image/upload/c_scale,w_10/v1526593809/05_t7l66e.webp" data-src="https://res.cloudinary.com/chuloo/image/upload/c_scale,w_613/v1526593809/05_t7l66e.webp" alt="">
        </div>

        <div class="box image is-5by4">
          <img src="https://res.cloudinary.com/chuloo/image/upload/c_scale,w_10/v1526593809/04_t9shus.webp" data-src="https://res.cloudinary.com/chuloo/image/upload/c_scale,w_535/v1526593809/04_t9shus.webp" alt="">
        </div>

        <div class="box image is-5by4">
          <img src="https://res.cloudinary.com/chuloo/image/upload/c_scale,w_10/v1526593809/03_fsaymj.webp" data-src="https://res.cloudinary.com/chuloo/image/upload/c_scale,w_715/v1526593809/03_fsaymj.webp" alt="">
        </div>

        <div class="box image is-5by4">
          <img src="https://res.cloudinary.com/chuloo/image/upload/c_scale,w_10/v1526593809/02_walsxe.webp" data-src="https://res.cloudinary.com/chuloo/image/upload/c_scale,w_649/v1526593809/02_walsxe.webp" alt="">
        </div>

        <div class="box image is-5by4">
          <img src="https://res.cloudinary.com/chuloo/image/upload/c_scale,w_10/v1526593809/01_r77clg.webp" data-src="https://res.cloudinary.com/chuloo/image/upload/c_scale,w_653/v1526593809/01_r77clg.webp" alt="">
        </div>

      </div>
    </div>
  </div>
  </div>
</template>

<script>
import 'bulma/css/bulma.css'

export  default {
  data() {
    return  {
      images: document.querySelectorAll('img'),
      options: {
        root:null,
        rootMargin: '0px',
        threshold: 1.0
      }
    }
  },

  methods: {
    fetchImage(url) {
      return new Promise((resolve, reject) => {
        const newImage = new Image();
        newImage.src = url;
        newImage.onload = resolve;
        newImage.onerror = reject;
      })
    },

    updateImage(image) {
      let src = image.dataset.src;
      this.fetchImage(src).then(() => {
        image.src = src
      })
    },

    callbackFunction(entries, observer) {
      entries.forEach(entry => {
        if (entry.intersectionRatio === 0) {
          this.updateImage(entry.target)
        }
      })
    },
  },

  created() {
    const observer = new IntersectionObserver(this.callbackFunction, this.options)

    this.images.forEach(img=> {
      observer.observe(img)
    })
  }
}

</script>

<style>
.container {
  width: 25%;
}

.image {
  margin: 30px auto;
}

.scroll-top {
  position: fixed;
  bottom: 10%;
  right: 5%;
}
</style>