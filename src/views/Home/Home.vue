<template>
  <div class="w-full lg:w-3/5">
      <!-- PRESENTATION -->
      <div class="relative h-screen w-full flex items-center justify-center text-white">
        <div class="flex flex-col items-center">
          <h1 data-aos="zoom-out" id="title" class="font-blindshelter text-6xl uppercase tracking-wide">{{ $t('message.title') }}</h1>
          
          <div class="w-4/5 text-center mt-5">
            <p data-aos="zoom-out" data-aos-delay="200">{{ $t('message.home.presentation') }}</p>
            <button data-aos="zoom-out" data-aos-delay="400" 
            class="rounded-full px-6 py-2 mt-5 text-black text-lg transition-all
            bg-gradient-to-r from-yellow-500 to-yellow-700 when-hover">
              {{ $t('message.home.enter-experience') }}
            </button>
            <p class="mt-3 text-sm opacity-0 change-hover transition-all">
              {{ $t('message.home.comming-soon') }}
              </p>
          </div>
        </div>

        <i class="text-xl fa-solid fa-angles-down absolute bottom-5 animate-bounce"></i>
      </div>

      <!-- ARTICLES COLS -->
      <section class="w-full overflow-hidden mb-20 p-5
      flex flex-col gap-10 items-center text-white text-center lg:text-justify">
        <article class="flex flex-col gap-7 text-center items-center">
          <h2 class="text-3xl uppercase font-bold" data-aos="zoom-in">
            {{ $t("message.home.titles.pitch") }}
          </h2>
          <div class="w-full h-ytb-phone lg:h-ytb">
            <iframe 
            data-aos="zoom-out"
            class="border border-white w-full h-full"
            :src="$t('message.ytb')" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            ref="video"
            lazy-observe
            lazy-reset
            allowfullscreen></iframe>
          </div>
          <p data-aos="zoom-in" v-html="$t('message.home.pitch-text')"></p>
        </article>

        <article class="flex flex-col gap-7 text-center items-center">
          <div class="text-center" data-aos="zoom-in">
            <h2 class="text-3xl uppercase font-bold">
              {{ $t('message.home.titles.technologies') }}
            </h2>
            <p class="text-lg">
              {{ $t('message.home.titles.immersion') }}
            </p>
          </div>
          <Model3D></Model3D>
          <!-- <img class="w-full" data-aos="zoom-out" alt="3D" src="https://p.turbosquid.com/ts-thumb/Eg/SPR0if/vr/2/jpg/1640297414/1920x1080/fit_q87/359638f2b4e5b3059e805b869b397aa52bafa2e5/2.jpg"/> -->
          <div class="w-full grid grid-cols-3 items-center px-3" data-aos="flip-left">
            <img lazy-animation="opacity" lazy-src="/static/logos/wwise.png" alt="WWISE"/>
            <p class="text-7xl transform scale-150 mx-10">+</p>
            <img lazy-animation="opacity" lazy-src="/static/logos/unity.png" alt="Unity"/>
          </div>
          <p data-aos="zoom-in" v-html="$t('message.home.3d-text')"></p>
        </article>

        <article class="flex flex-col gap-7 text-center items-center">
          <div class="text-center" data-aos="zoom-in">
            <h2 class="text-3xl uppercase font-bold">
              {{ $t('message.home.titles.gameplay') }}
            </h2>
            <p class="text-lg">
              {{ $t('message.home.titles.access') }}
            </p>
          </div>
          <div class="grid grid-cols-3 items-center" data-aos="zoom-out">
            <p class="text-4xl uppercase">{{ $t('message.yes') }}</p>
            <img lazy-animation="opacity" lazy-src="/static/gif/choose.gif" alt="Animated gif" class="invert filter"/>
            <p class="text-4xl uppercase">{{ $t('message.no') }}</p>
          </div>
          <p data-aos="zoom-in" v-html="$t('message.home.simple-text')"></p>
        </article>
      </section>

      <!-- ARTICLES LINE -->
      <section class="w-full overflow-hidden
      flex flex-col items-center text-white text-center lg:text-justify">

        <div class="text-center mb-10 mx-3" data-aos="zoom-in">
          <h2 class="text-3xl uppercase font-bold">
            {{ $t('message.home.titles.interactif') }}
          </h2>
          <p class="text-lg">
            {{ $t('message.home.titles.unique-experience') }}
          </p>
        </div>

        <article class="w-full flex gap-5 p-5 flex-col lg:flex-row items-center" data-aos="fade-left">
          <img class="flex-1 scale-75 transform" lazy-animation="opacity" lazy-src="/static/grid/masque-a-gaz.png" alt="Masque a gaz"/>
          <div>
            <h2 class="mb-3 text-xl font-bold">
              {{ $t('message.home.titles.nuclear-war') }}
            </h2>
            <p v-html="$t('message.home.nuclear-war-text')"></p>
          </div>
        </article>

        <article class="w-full flex gap-5 p-5 flex-col lg:flex-row items-center" data-aos="fade-right">
          <div class="order-2">
            <h2 class="mb-3 text-xl font-bold">
              {{ $t('message.home.titles.ai') }}
            </h2>
            <p v-html="$t('message.home.ai-text')"></p>
          </div>
          <img class="flex-1 order-1 lg:order-3 scale-75 transform" lazy-animation="opacity" lazy-src="/static/grid/ia.png" alt="Masque a gaz"/>
        </article>

        <article class="w-full flex gap-5 p-5 flex-col lg:flex-row items-center" data-aos="fade-left">
          <img class="flex-1 scale-75 transform" lazy-animation="opacity" lazy-src="/static/grid/open-book.png" alt="Masque a gaz"/>
          <div>
            <h2 class="mb-3 text-xl font-bold">
              {{ $t('message.home.titles.own-history') }}
            </h2>
            <p v-html="$t('message.home.own-history-text')"></p>
          </div>
        </article>
      </section>

      <div class="text-center text-white my-20 mx-5" data-aos="zoom-in">
        <h2 class="text-3xl uppercase font-bold">
          {{ $t('message.home.titles.support-us') }}
        </h2>
        <p class="text-lg mt-5" v-html="$t('message.home.support-text')"></p>
      </div>
  </div>
</template>

<script>
import Model3D from '../../components/3D/Model3D.vue'

export default {
  components: { Model3D },
  name: 'Home',
  mounted(){
    this.$refs.video.addEventListener('lazy-loaded', () => {
      const audio = document.querySelector('audio');
      if(audio) {
        audio.muted = true;
      }
    });

     this.$refs.video.addEventListener('transitionend', () => {
      const audio = document.querySelector('audio');
      if(audio) {
        audio.muted = true;
      }
    }, {once: true});

    this.$refs.video.addEventListener('lazy-quit', () => {
      const audio = document.querySelector('audio');
      if(audio) {
        audio.muted = false;
      }
    });
  }
}
</script>

<style scoped>
.when-hover:hover ~ .change-hover{
  opacity: 1;
}

.when-hover:hover{
  transition-delay: 0ms!important;
  opacity: 0.5!important;
}
</style>
