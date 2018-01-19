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
      msg: "KC Music Connection",
      comment: "Tracking Local Music around Kansas City",
      }
    }
  }
</script>
