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
              <tr v-for="show in shows">
                <td id="showsTableName">{{show.name}</td>
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
    //let showsRef = fb.db.ref(this.uid + "/shows");
    let showsRef = fb.db.ref().child('/shows');

    export default {
      name: 'allshows',
      firebase: {
        shows: showsRef
      },
      data() {
        return {
          name: "",
          uid: "",
          email: "",
          // foundShow: {
          //   name: '',
          //   venue: '',
          //   town: '',
          //   bands: '',
          //   date: '',
          //   time: '',
          //   url: ''
          // },
          // visible: 0,
          // currentShow: {},
          // shows: [],
        }
      },
      created() {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            console.log(firebase.auth().currentUser);
            this.name = firebase.auth().currentUser.displayName;
            this.email = firebase.auth().currentUser.email;
            this.uid = firebase.auth().currentUser.uid;
            //uid = firebase.auth().uid;
            this.$bindAsArray('music', fb.db.ref(this.uid));
            this.$bindAsArray('shows', fb.db.ref(this.uid + "/shows"));
            this.$bindAsArray('bands', fb.db.ref(this.uid + "/shows"));
            // this.$bindAsArray('venues', fb.db.ref(this.uid + "/venues"));
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
