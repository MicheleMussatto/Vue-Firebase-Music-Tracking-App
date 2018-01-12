<template>
  <div id="app">

    <h1 class="bigbig">KC Local Shows</h1>
    <button class="signoutbutton"><router-link to="/">Return to Home</router-link></button>

    <div class="appBoxes">
        <div class="appBox">

          <table class="table">
            <thead>
              <tr>
                <th><abbr title="Name">Name</abbr></th>
                <th><abbr title="Venue">Venue</abbr></th>
                <th><abbr title="Town">Town</abbr></th>
                <th><abbr title="Bands">Bands</abbr></th>
                <th><abbr title="Date">Date</abbr></th>
                <th><abbr title="Time">Time</abbr></th>
                <th><abbr title="Website">Website</abbr></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="show in music">
                <td id="showsTableName">{{show.name}}</td>
                <td id="showsTableVenue">{{show.venue}}</td>
                <td id="showsTableTown">{{show.town}}</td>
                <td id="showsTableBands">{{show.bands}}</td>
                <td id="showsTableDate">{{show.date}}</td>
                <td id="showsTableTime">{{show.time}}</td>
                <td id="showsTableURL">{{show.url}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


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

    // let musicRef = fb.db.ref(this.uid + "/shows"); ******
    // let musicRef = fb.db.ref("0/shows");
    // let musicRef = fb.db.ref.child("users/shows")
    // let musicRef = fb.db.child("users").ref("/shows")
    // let musicRef = fb.db.ref("users").child("/shows")
    // let musicRef = fb.db.ref().child("users/shows")
    // let musicRef = fb.db.ref("users/shows")

    export default {
      name: 'allshows',
      firebase: {
        music: musicRef
        // db: db.ref();
      },
      data() {
        return {
          name: "",
          uid: "",
          email: "",
          foundShow: {
            name: '',
            venue: '',
            town: '',
            bands: '',
            date: '',
            time: '',
            url: ''
          },
          // visible: 0,
          // currentShow: {},
          shows: [],
        }
      },
      // methods: {
      //
      // },
      created() {

        function listShows() {
          console.log("working");
          console.log(db);
        }
        listShows();

//michele's psuedo code attempt 1
        // function listShows() {
        //   console.log("working");
        //   let i = 0
        //   let foundUser = musicRef.child(users[i]);
        //   if (foundUser != null) {
        //
        //     let j = 0
        //     let foundShow = musicRef.foundUser.child(shows[j]);
        //     if (foundShow != null) {
        //     return foundShow
        //     //push foundShow to "shows" array
        //     j++
        //     }
        //   i++
        //   }
        // }
        // listShows();

        // firebase.auth().onAuthStateChanged((user) => {
        //   if (user) {
        //     console.log(firebase.auth().currentUser);
        //     this.name = firebase.auth().currentUser.displayName;
        //     this.email = firebase.auth().currentUser.email;
        //     this.uid = firebase.auth().currentUser.uid;
        //     this.$bindAsArray('music', fb.db.ref(this.uid + "/shows"));
        //   } else {
        //     // No user is signed in.
        //   }
        // });
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
