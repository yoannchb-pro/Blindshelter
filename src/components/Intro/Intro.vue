<template>
  <div class="fixed text-white w-full h-full z-50 top-0 left-0 bg-black flex flex-col items-center justify-center">
      <h1 data-aos="zoom-out" class="font-blindshelter text-6xl uppercase tracking-wide">
          {{ $t('message.title') }}
      </h1>
      <button data-aos="zoom-out" data-aos-delay="400" 
        class="rounded-full px-6 py-2 mt-5 text-black text-lg
        bg-gradient-to-r from-yellow-500 to-yellow-700" @click="enter">
            {{ $t('message.discover-website') }}
       </button>
  </div>
</template>

<script>
export default {
    name: "Intro",
    mounted(){
        document.body.style.overflowY = "hidden";
    },
    methods: {
        enter(){
            document.body.style.overflowY = "auto";
            this.$emit('enter');
        }
    }
}
</script>