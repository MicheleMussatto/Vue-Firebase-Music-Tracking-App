<template>
  <div id="app">
    <h1 class="bigbig">{{ venuestitle }}</h1>

    <button class="signoutbutton"><router-link to="/profile">Return to Profile</router-link></button>

    <div class="appBoxes">
        <div class="appBox">

          <table class="table">
            <thead>
              <tr>
                <th><abbr title="Name">Name</abbr></th>
                <th><abbr title="Address">Town</abbr></th>
                <th><abbr title="Website">Website</abbr></th>
                <th><abbr title="About">About</abbr></th>
                <th><abbr title="delete"></abbr>DELETE</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="venue in music">
                <td id="venuesTableName" @click="openShow(venue)">{{venue.name}}</td>
                <td id="venuesTableVenue" @click="openShow(venue)">{{venue.address}}</td>
                <td id="venuesTableTown" @click="openShow(venue)">{{venue.url}}</td>
                <td id="venuesTableBands" @click="openShow(venue)">{{venue.about}}</td>
                <td><a class="delete" @click="deleteShow(venue)"></a> DELETE THIS VENUE</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

  <!-- BULMA CARD COMPONENT -->

      <div class="card">
        <header class="card-header">
          <p class="card-header-title">ADD NEW VENUE</p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input id="genre" v-model="venuesObject.name" class="input" type="text">
              </div>
            </div>
            <div class="field">
              <label class="label">Address</label>
              <div class="control">
                <input id="year" v-model="venuesObject.address" class="input" type="text">
              </div>
            </div>
            <div class="field">
              <label class="label">Website</label>
              <div class="control">
                <input id="year" v-model="venuesObject.url" class="input" type="text">
              </div>
            </div>
            <div class="field">
              <label class="label">About</label>
              <div class="control">
                <input id="year" v-model="venuesObject.about" class="input" type="text">
              </div>
            </div>
            <a class="button is-primary" id="submit" @click ="addShow">Submit</a>
          </div>
        </div>
      </div>

  <!-- BULMA MODAL COMPONENT -->

      <div v-if="visible" class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">Edit Venue</p>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="field">
                  <label class="label">Name</label>
                  <div class="control">
                    <input id="newName" v-model="venuesObject.name" class="input" type="text" placeholder="Text input">
                  </div>
                </div>
                <div class="field">
                  <label class="label">Address</label>
                  <div class="control">
                    <input id="newAddress" v-model="venuesObject.address" class="input" type="text" placeholder="Text input">
                  </div>
                </div>
                <div class="field">
                  <label class="label">Website</label>
                  <div class="control">
                    <input id="newURL" v-model="venuesObject.url" class="input" type="text" placeholder="Text input">
                  </div>
                </div>
                <div class="field">
                  <label class="label">About</label>
                  <div class="control">
                    <input id="newAbout" v-model="venuesObject.about" class="input" type="text" placeholder="Text input">
                  </div>
                </div>
                <a class="button is-primary" id="submit" @click ="editShow()">Submit</a>
                <a class="button is-primary" id="submit" @click ="closeShow()">Cancel</a>
              </div>
            </div>
          </div>

          <!-- Any other Bulma elements you want -->
        </div>
        <button class="modal-close is-large" @click ="closeShow()" aria-label="close"></button>
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
    name: 'venues',
    firebase: {
      music: musicRef
    },
    data() {
      return {
        name: "",
        uid: "",
        email: "",
        venuestitle:  'My Venues',
        venuesObject: {
          name: '',
          address: '',
          url: '',
          about: ''
        },
        visible: 0,
        currentVenue: {},
      }
    },
    methods: {
        addShow: function() {
          musicRef.child(this.uid + "/venues").push(this.venuesObject);
          this.venuesObject.name="";
          this.venuesObject.address="";
          this.venuesObject.url="";
          this.venuesObject.about="";
          toastr.success("Venue added!");
        },
        deleteShow: function(venue) {
          musicRef.child(this.uid + "/venues").child(venue['.key']).remove();
          toastr.warning("Venue removed.");
        },
        openShow: function(venue) {
          this.currentvenue = venue;
          this.venuesObject.name=venue.name;
          this.venuesObject.address=venue.address;
          this.venuesObject.url=venue.url;
          this.venuesObject.about=venue.about;
          this.visible = 1;
        },
        editShow: function() {
          musicRef.child(this.uid + "/venues").child(this.currentvenue['.key']).set({
            name: this.venuesObject.name,
            address: this.venuesObject.address,
            url: this.venuesObject.url,
            about: this.venuesObject.about
          });
          this.visible =0;
          this.venuesObject.name="";
          this.venuesObject.address="";
          this.venuesObject.url="";
          this.venuesObject.about="";
          toastr.success("Venue edited!");
        },
        closeShow: function() {
          this.visible =0;
          this.venuesObject.name="";
          this.venuesObject.address="";
          this.venuesObject.url="";
          this.venuesObject.about="";
        }
    },
    created() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(firebase.auth().currentUser);
          this.name = firebase.auth().currentUser.displayName;
          this.email = firebase.auth().currentUser.email;
          this.uid = firebase.auth().currentUser.uid;
          this.$bindAsArray('music', fb.db.ref(this.uid + "/venues"));
        } else {
          // No user is signed in.
        }
      });
    }
  }
</script>
