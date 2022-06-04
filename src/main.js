import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import i18n from './i18n'

//AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

//Card3d
import "card3d";

//lazy-attr
import "lazy-attr"
import "lazy-attr/dist/lazy-attr-animation.css";

createApp(App).use(AOS.init()).use(i18n).use(router).mount('#app')
