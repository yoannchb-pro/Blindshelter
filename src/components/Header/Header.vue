<template>
  <header :class="headerClass" class="pointer-events-none nesthub:pointer-events-auto 
   fixed top-0 left-0 nesthub:left-1/2 nesthub:transform nesthub:-translate-x-1/2 
   transition-all w-full nesthub:w-3/5 z-50 text-white">
      <nav class="flex items-center w-full h-full">
          <!-- COMPUTER -->
          <ul class="pointer-events-auto hidden list-none p-3 nesthub:flex w-full">
              <!-- TITLE -->
              <li class="flex cursor-pointer tracking-wide items-center justify-center" @click="setBraille()">
                <span class="ml-2 mr-2 no-underline uppercase font-blindshelter">{{ $t('message.title') }}</span>
             </li>

              <template v-for="item of menu" :key="item.name">
                    <!-- DROPDOWN -->
                    <li v-if="item.type == 'dropdown'" class="dropdown flex items-center justify-center group">
                        <a class="ml-2 mr-2 relative no-underline   cursor-pointer" :id="item.name">
                            <i class="fa-solid fa-caret-right text-lg group-hover:opacity-0"></i>
                            <i class="fa-solid fa-caret-down absolute left-0 text-lg opacity-0 group-hover:opacity-100"></i>
                            {{ $t(item.name) }}
                        </a>

                        <div class="top-full -mt-5 menu absolute z-50 h-0 overflow-hidden">
                            <ul class="h-auto flex flex-col justify-center items-center items
                            ">
                                <li v-for="menu of item.menus" :key="menu.name" 
                                class="py-2 px-8 flex justify-center items-center">
                                    <router-link class=" no-underline " :to="menu.to">{{ $t(menu.name) }}</router-link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <!-- NOT DROPDOWN -->
                    <li v-else class="flex items-center justify-center">
                        <router-link class="ml-2 mr-2 no-underline  " :to="item.to">{{ $t(item.name) }}</router-link>
                    </li>
              </template>
              <li class="flex-1 flex justify-end">
                  <!-- CHANGE LANGUAGE -->
                  <div @click="changeLangue()" 
                  class="ml-3 w-9 h-9 
                  cursor-pointer border border-white rounded-full
                  bg-center bg-cover"
                  :style="$root.$i18n.getLocale() == 'en' ? background('english') : background('french')">
                  </div>
              </li>
          </ul>

          <!-- PHONE -->
            <ul class="pointer-events-auto flex list-none p-3 nesthub:hidden absolute right-0">
              <i @click="displayMenuPhone()" class="bg-black pr-1 pl-1 rounded-lg fas fa-bars cursor-pointer text-3xl "></i>

              <div data-aos="fade-right" v-if="showMenu" 
              class="overflow-y-auto p-5 fixed flex justify-center items-center w-full h-full
               top-0 left-0 z-50 bg-black">

                <!-- close -->
                <i class="fas fa-times  text-3xl absolute right-5 top-3 cursor-pointer"
                 @click="displayMenuPhone(false)"></i>
            
                <ul class="list-none text-xl text-center p-5 absolute">
                    <template v-for="item of menu" :key="item.name">
                        <!-- DROPDOWN -->
                        <li v-if="item.type == 'dropdown'" class="dropdown h-10 m-4 flex justify-center">
                            <template v-for="(menu, index) of item.menus" :key="menu.name">
                                <router-link @click="displayMenuPhone(false)" :to="menu.to" class="m-2 no-underline ">{{ $t(menu.name) }}</router-link>
                                <span class=" m-2" v-if="index < item.menus.length-1">|</span>
                            </template>
                        </li>

                        <!-- NOT DROPDOWN -->
                        <li v-else class="m-4 h-10">
                            <router-link class="m-2 no-underline " :to="item.to" @click="displayMenuPhone(false)">
                                <span>{{ $t(item.name) }}</span>
                            </router-link>
                        </li>
                    </template>

                    <li class="m-4 flex justify-center items-center pb-5">
                        <!-- CHANGE LANGUAGE -->
                        <div @click="changeLangue()" 
                        class="w-12 h-12  flex justify-center items-center 
                        cursor-pointer  border border-white rounded-full
                        bg-center bg-cover"
                        :style="$root.$i18n.getLocale() == 'en' ? background('english') : background('french')">
                            <!-- {{ $root.$i18n.getLocale() == "fr" ? "en" : "fr" }} -->
                        </div>
                    </li>
                </ul>
              </div>
          </ul>
      </nav>
  </header>
</template>

<script>
import HeaderMenus from "./HeaderMenus"
export default {
    name: "Header",
    created(){
        document.addEventListener('scroll',this.scroll, {passive: true});
    },
    beforeUnmount(){
        document.removeEventListener('scroll', this.scroll, {passive: true});
    },
    data(){
        return {
            menu: HeaderMenus,
            headerClass: ["h-12"],
            showMenu: false,
        }
    },
    methods: {
        displayMenuPhone(val = true){
            this.showMenu = val;
            if(val) document.body.style.overflow = "hidden";
            else document.body.style.overflow = "auto";
        },
        background(name = ""){
            return "background-image: url('/static/flags/" + name + ".png')";
        },
        changeLangue(){
            const lg = this.$root.$i18n.getLocale();
            const newLg = lg == "fr" ? "en" : "fr";
            this.$root.$i18n.setLocale(newLg);
            localStorage.langage = newLg;
        },
        setBraille(){
            console.log("ok")
            const title = document.querySelector('#title');
            if(title) {
                title.classList.toggle('font-braille');
                title.classList.toggle('text-6xl');
                title.classList.toggle('text-4xl');
            }
        },
        scroll(){
            if(window.scrollY > 0) 
                this.headerClass = ["nesthub:shadow-md", "h-16",
                "nesthub:tracking-widest", "nesthub:bg-black"];
            else 
                this.headerClass = ["h-12"];
        },
    }
}
</script>

<style scoped>
a::after{
    content: "";
    width: 0%;
    height: 0.25rem;
    background-color: rgba(220, 38, 38);
    display: block;
    transition: 0.25s ease;
}
.router-link-exact-active::after{
    width: 100%;
}
.menu::before{
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 1rem;
    height: 1rem;
    background: rgba(255,255,255,0.5)!important;
    clip-path: polygon(0 0, 100% 0, 0 100%);
    transform-origin: 0;
    transform: translateX(-25%)  rotate(45deg);
}

.dropdown:hover .menu, .menu:hover{
    height: auto;
}
.menu .items{
    margin-top: 0.85rem;
    border: thin solid rgba(255,255,255,0.3)!important;
}
</style>