<template>
  <!-- WEBSITE -->
  <Header></Header>
  <router-view/>
  <Footer></Footer>

  <!-- AUTDIO -->
  <audio ref="audio" loop class="invisible">
    <source src="/static/sound/bunker_loop.mp3" type="audio/mp3">
  </audio>

  <!-- INTRO -->
  <Intro v-if="displayIntro && !isDev" @enter="playsong"></Intro>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import Intro from "./components/Intro/Intro.vue";
export default{
    data(){
        return {
            displayIntro: true,
            isDev: process.env.NODE_ENV === "development"
        }
    },
    components: { Header, Footer, Intro },
    mounted() {
        //i18n
        const lg = localStorage.langage;
        this.$root.$i18n.setLocale(lg != null && lg ? lg : navigator.language.split("-")[0]);
    },
    methods: {
        playsong(){
            this.displayIntro = false;
            //car le song est tres relou en mode dev
            console.log("Le song est désactivé en mode dev (voir ligne 37 de App.vue)");
            console.log(process.env.NODE_ENV);
            try{ if(!this.isDev) this.$refs?.audio?.play(); } catch(e) { console.error(e) }
        }
    }
}
</script>
