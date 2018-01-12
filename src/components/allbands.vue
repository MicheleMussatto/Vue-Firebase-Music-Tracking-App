<template>
  <div id="app">

    <h1 class="bigbig">KC Local Bands</h1>
    <button class="signoutbutton"><router-link to="/">Return to Home</router-link></button>

    <!-- <div class="imageDiv" id="imageDiv1">
        <div class="imageDivTitle">

          <div class="floating-box"><router-link to="/allbands"><a href=""><h3>Bands List</h3></a></router-link></div>
          <div class="floating-box"><a href=""><h3>Venues List</h3></a></div>
          <div class="floating-box"><a href=""><h3>Events List</h3></a></div>

        </div>
    </div>

    <div class="pageTop">
      <h1>All Bands</h1>
    </div> -->

  </div>
</template>

<script>

    import 'bulma/css/bulma.css'
    import 'toastr/build/toastr.css'
    import firebase from 'firebase'
    import toastr from 'toastr'
    import firebaseui from 'firebaseui'

    import fb from "../utils/firebaseConfig"

    let musicRef = fb.db.ref();

    export default {
      name: 'allbands',
      firebase: {
        music: musicRef
      },
      data() {
        return {
          name: "",
          uid: "",
          email: "",
          // showstitle:  'My Shows',
          showsObject: {
            name: '',
            venue: '',
            town: '',
            bands: '',
            date: '',
            time: '',
            url: ''
          },
          visible: 0,
          currentShow: {},
        }
      },
      // methods: {
      //
      // },
      created() {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            console.log(firebase.auth().currentUser);
            this.name = firebase.auth().currentUser.displayName;
            this.email = firebase.auth().currentUser.email;
            this.uid = firebase.auth().currentUser.uid;
            this.$bindAsArray('music', fb.db.ref(this.uid + "/shows"));
          } else {
            // No user is signed in.
          }
        });
      }
    }
</script>

<style>
/*<style lang="scss">*/

h1, h2 {
  color: red;
  font-size: 60px;
}
.pageTop {
  margin-top: 150px;
}

</style>
