import VueRouter from 'vue-router';
import main from './components/main.vue'
import profile from './components/profile.vue'
import bands from './components/bands.vue'
import venues from './components/venues.vue'
import shows from './components/shows.vue'
import allshows from './components/allshows.vue'
import allvenues from './components/allvenues.vue'
import allbands from './components/allbands.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: main},
    {path: '/profile', component: profile},
    {path: '/bands', component: bands},
    {path: '/venues', component: venues},
    {path: '/shows', component: shows},
    {path: '/allshows', component: allshows},
    {path: '/allvenues', component: allvenues},
    {path: '/allbands', component: allbands}
  ]
});

export default router;
