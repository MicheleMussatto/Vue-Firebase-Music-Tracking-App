import firebase from 'firebase'
import firebaseui from 'firebaseui'
import Vue from 'vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'

import App from './App.vue'
import router from './router'

Vue.use(VueRouter);
Vue.use(VueFire);

new Vue({
  el: '#app',
  router,
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        //this.$router.push('/loggedin');
      }
      else {
        // this.$router.push('/');
      }
    });
  },
  render: h => h(App)
})
