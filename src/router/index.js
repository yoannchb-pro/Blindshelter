import { createRouter, createWebHistory } from 'vue-router';

import basicMeta from './basicMeta';
import meta from './meta';

import Home from '../views/Home/Home.vue';
import Team from '../views/Team/Team.vue';
import Error404 from '../views/Error404/Error404.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    pageName: "Home"
  },
  {
    path: '/team',
    name: 'Team',
    component: Team,
    pageName: "Team"
  },

  //For 404 error, always need to be at the end
  {
    path: "/:pathMatch(.*)*",
    name: "Error404",
    component: Error404,
    pageName: "Not found"
  }
];

//setup meta
routes.forEach(e => {
  const title = e.pageName + " — BlindShelter";

  e.meta = {};
  e.meta.title = title;
  e.meta.metaTags = basicMeta;
  e.meta.metaTags = e.meta.metaTags.concat([
    {
      name: "title",
      content: title
    },
    {
      name: "description",
      content: `Welcome to the ${e.pageName.toLowerCase()} page of Blind Shelter project ! Blind Shelter is a post apocalyptic survival game suitable for the visually impaired. It is played on mobile with a headset. Follow us to find out more!`
    },
  ]);
});

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes
});

//go back to top when you change page
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);

  //setup SEO
  meta(to, from, next);
})

export default router
