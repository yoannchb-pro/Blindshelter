<template>
  <footer class="w-full relative text-5xl px-5 py-10 flex justify-center">
      <ul class="flex gap-5 text-white">
          <li v-for="(item, index) of links" :key="item.icon" :data-aos-delay="index*100">
              <a :href="item.url" target="_blank">
                <i :class="item.icon"></i>
              </a>
          </li>
      </ul>

      <a href="mailto:charbonn.yoann@gmail.com" class="text-white text-sm absolute right-5 bottom-2">By yoannchb</a>
  </footer>
</template>

<script>
export default {
    name: "Footer",
    data(){
        return {
            links: [
                {
                    icon: "fa-brands fa-discord",
                    url: "https://discord.gg/DVM4U7HGpF"
                },
                {
                    icon: "fa-brands fa-facebook-f",
                    url: "https://www.facebook.com/blind.shelter"
                },
                {
                    icon: "fa-brands fa-instagram",
                    url: "https://www.instagram.com/blind_shelter/"
                },
                {
                    icon: "fa-brands fa-youtube",
                    url: "https://www.youtube.com/channel/UCezyzTQarxToCKUpkpQNhng"
                },
                {
                    icon: "fa-brands fa-twitter",
                    url: "https://twitter.com/BlindShelter"
                },
            ]
        }
    }
}
</script>