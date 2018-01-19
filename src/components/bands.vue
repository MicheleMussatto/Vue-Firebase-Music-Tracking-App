<template>
  <div id="app">
    <h1 class="bigbig">{{ bandstitle }}</h1>

      <button class="signoutbutton"><router-link to="/profile">Return to Profile</router-link></button>

      <div class="appBoxes">
          <div class="appBox">
            <h2>{{ bandstitle }}</h2>

            <table class="table">
              <thead>
                <tr>
                  <th><abbr title="Name">Name</abbr></th>
                  <th><abbr title="Town">Town</abbr></th>
                  <th><abbr title="Website">Website</abbr></th>
                  <th><abbr title="delete"></abbr>DELETE</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="band in music">
                  <td id="bandsTableName" @click="openShow(band)">{{band.Name}}</td>
                  <td id="bandsTableTown" @click="openShow(band)">{{band.Town}}</td>
                  <td id="bandsTableURL" @click="openShow(band)">{{band.URL}}</td>
                  <td><a class="delete" @click="deleteShow(band)"></a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

    <!-- BULMA CARD COMPONENT -->

        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Add New Band</p>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input id="genre" v-model="bandsObject.Name" class="input" type="text" placeholder="Text input">
                </div>
              </div>
              <div class="field">
                <label class="label">Town</label>
                <div class="control">
                  <input id="year" v-model="bandsObject.Town" class="input" type="text" placeholder="Text input">
                </div>
              </div>
              <div class="field">
                <label class="label">Website</label>
                <div class="control">
                  <input id="year" v-model="bandsObject.URL" class="input" type="text" placeholder="Text input">
                </div>
              </div>
              <a class="button is-primary" @click ="addShow">Submit</a>
            </div>
          </div>
        </div>

    <!-- BULMA MODAL COMPONENT -->

        <div v-if="visible" class="modal is-active">
          <div class="modal-background"></div>
          <div class="modal-content">

            <div class="card">
              <header class="card-header">
                <p class="card-header-title">Edit Band</p>
              </header>
              <div class="card-content">
                <div class="content">
                  <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                      <input id="newName" v-model="bandsObject.Name" class="input" type="text" placeholder="Text input">
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">Town</label>
                    <div class="control">
                      <input id="newTown" v-model="bandsObject.Town" class="input" type="text" placeholder="Text input">
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">Website</label>
                    <div class="control">
                      <input id="newURL" v-model="bandsObject.URL" class="input" type="text" placeholder="Text input">
                    </div>
                  </div>
                  <a class="button is-primary" id="submit" @click ="editShow()">Submit</a>
                  <a class="button is-primary" @click ="closeShow()">Cancel</a>
                </div>
              </div>
            </div>

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
      name: 'bands',
      firebase: {
        music: musicRef
      },
      data() {
        return {
          name: "",
          uid: "",
          email: "",
          bandstitle:  'My Bands',
          bandsObject: {
            Name: '',
            Town: '',
            URL: ''
          },
          visible: 0,
          currentShow: {},
        }
      },
      methods: {
          addShow: function() {
            musicRef.child(this.uid + "/bands").push(this.bandsObject);
            this.bandsObject.Name="";
            this.bandsObject.Town="";
            this.bandsObject.URL="";
            toastr.success("Band added!");
          },
          deleteShow: function(band) {
            musicRef.child(this.uid + "/bands").child(band['.key']).remove();
            toastr.warning("Band removed.");
          },
          openShow: function(band) {
            this.currentBand = band;
            this.bandsObject.Name=band.Name;
            this.bandsObject.Town=band.Town;
            this.bandsObject.URL=band.URL;
            this.visible = 1;
          },
          editShow: function() {
            musicRef.child(this.uid + "/bands").child(this.currentBand['.key']).set({
              Name: this.bandsObject.Name,
              Town: this.bandsObject.Town,
              URL: this.bandsObject.URL
            });
            this.visible =0;
            this.bandsObject.Name="";
            this.bandsObject.Town="";
            this.bandsObject.URL="";
            toastr.success("Band edited!");
          },
          closeShow: function() {
            this.visible =0;
            this.bandsObject.Name="";
            this.bandsObject.Town="";
            this.bandsObject.URL="";
          }
      },
      created() {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            console.log(firebase.auth().currentUser);
            this.name = firebase.auth().currentUser.displayName;
            this.email = firebase.auth().currentUser.email;
            this.uid = firebase.auth().currentUser.uid;
            this.$bindAsArray('music', fb.db.ref(this.uid + "/bands"));
          } else {
            // No user is signed in.
          }
        });
      }
    }
  </script>
