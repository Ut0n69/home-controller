import Vue from 'vue';
import Router from 'vue-router';
import Light from './pages/Light.vue';
import TV from './pages/TV.vue';
import AC from './pages/AC.vue';
import BS from './pages/BS.vue';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [{
    path: '/light',
    name: 'light',
    component: Light,
  },
  {
    path: '/tv',
    name: 'tv',
    component: TV,
  },
  {
    path: '/ac',
    name: 'ac',
    component: AC,
  },
  {
    path: '/bs',
    name: 'bs',
    component: BS,
  },
  ],
});
