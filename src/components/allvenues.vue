<template>
  <div id="app">

    <h1 class="bigbig">KC Local Venues</h1>
    <button class="signoutbutton"><router-link to="/">Return to Home</router-link></button>

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
      name: 'allvenues',
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


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
