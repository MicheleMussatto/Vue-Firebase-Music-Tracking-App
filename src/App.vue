<template>
  <div id="app">
    <h1 >{{msg}}</h1>
    <h3 class="subtitle">{{comment}}</h3>

    <router-view></router-view>
    <div class="copyright">
      <p>&copy; Copyright 2018 <a id="whiteLink" href="http://highsigndesign.com/" target="_blank"> HighSignDesign</a></p>
    </div>
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
    music: musicRef,
    },
  data () {
    return {
      msg: "My Music Tracker",
      comment: "Tracking Your Favorite Bands, Concerts and Venues",
      }
    }
  }
</script>
