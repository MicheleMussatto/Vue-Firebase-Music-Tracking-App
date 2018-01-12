<template>
  <div class="profileDiv">
    <h2>Welcome to Your Profile Page</h2>
    <div class="profileDisplay">
      <h2 id="displayName"><b>{{ name }}</b></h2>
      <h2 id="profileName">{{ email }}</h2>
  </div>

  <button class="signoutbutton" id="sign-in" @click='logOut'>Sign Out</button>

  <div class="appBoxes">
      <div class="appBox">
        <h2>{{ showstitle }}</h2>

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
        <router-link to="/shows">Edit Shows List</router-link>
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

    export default {
      name: 'profile',
      firebase: {
        music: musicRef
      },
      data() {
        return {
          name: "",
          uid: "",
          email: "",
          showstitle:  'My Shows'
        }
      },
      methods: {
        logOut() {
          firebase.auth().signOut();
          window.location.href = '/';
        }
      },
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
h2 {
  font-size: 24px;
}
</style>
