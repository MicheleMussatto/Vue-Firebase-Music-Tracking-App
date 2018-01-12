<template>
  <div id="app">
    <h1 class="title">{{msg}}</h1>
    <h3 class="subtitle">{{comment}}</h3>

    <router-view></router-view>
  </div>
</template>

<script>
import 'bulma/css/bulma.css'
import firebase from 'firebase'
import toastr from 'toastr'
import firebaseui from 'firebaseui'

import fb from "./utils/firebaseConfig"

let musicRef = fb.db.ref();

export default {
  name: 'app',
  firebase: {
    music: musicRef
  },
  data () {
    return {
      msg: "KC Metal Connection",
      comment: "Tracking Metal Music around Kansas City",
      }
    }
  }
</script>

<style>
/*<style lang="scss">*/

#app {
  text-align: center;
  background: #5D5046;

}
.title {
  color: white;

}
.subtitle {
  color: white;
  font-family: sans-serif;
}
</style>
