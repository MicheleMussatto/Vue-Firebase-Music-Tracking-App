<template>
  <div id="app">
      <!-- <div class="navLinks">
          <router-link to="/" class="navLinks"><a href=""><h3>Home</h3></a></router-link>
          <router-link to="/all`band`s" class="navLinks"><a href=""><h3>Bands List</h3></a></router-link>
          <router-link to="/allvenues" class="navLinks"><a href=""><h3>Venues List</h3></a></router-link>
          <router-link to="/allshows" class="navLinks"><a href=""><h3>Events List</h3></a></router-link>
      </div> -->
    <div class="pageTitle">
      <h1 class="bigbig" id="pageTitle">{{ showstitle }}</h1>
      <p>To <b>EDIT</b> a show, click on it.</p>
      <p>Once you <b>DELETE</b> a show, it cannot be undone!</p>
      <p>To <b>ADD</b> a show, scroll down.</p>
      <button class="returnbutton"><router-link to="/profile">Return to Profile</router-link></button>
    </div>
    <div class="appBoxes">
        <div class="appBox">

          <table class="table">
            <thead class="theadVisible">
              <tr>
                <th scope="col"><abbr title="Name">Name</abbr></th>
                <th scope="col"><abbr title="Venue">Venue</abbr></th>
                <th scope="col"><abbr title="Town">Town</abbr></th>
                <th scope="col"><abbr title="Bands">Bands</abbr></th>
                <th scope="col"><abbr title="Date">Date</abbr></th>
                <th scope="col"><abbr title="Time">Time</abbr></th>
                <th scope="col"><abbr title="Website">Website</abbr></th>
                <th scope="col"><abbr title="delete"></abbr>DELETE</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="show in music">
                <td scope="row" class="blockTable" id="showsTableName" @click="openShow(show)">{{show.name}}</td>
                <td class="blockTable" id="showsTableVenue" @click="openShow(show)">{{show.venue}}</td>
                <td class="blockTable" id="showsTableTown" @click="openShow(show)">{{show.town}}</td>
                <td class="blockTable" id="showsTableBands" @click="openShow(show)">{{show.acts}}</td>
                <td class="blockTable" id="showsTableDate" @click="openShow(show)">{{show.date}}</td>
                <td class="blockTable" id="showsTableTime" @click="openShow(show)">{{show.time}}</td>
                <td class="blockTable" id="showsTableURL" @click="openShow(show)">{{show.url}}</td>
                <td class="blockTable" ><a class="delete" @click="deleteShow(show)"></a> DELETE THIS SHOW</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

  <!-- BULMA CARD COMPONENT -->

      <div class="card">
        <header class="card-header">
          <p class="card-header-title" id="cardTitle">Add New Show</p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input id="genre" v-model="showsObject.name" class="input" type="text">
              </div>
            </div>
            <div class="field">
              <label class="label">Venue</label>
              <div class="control">
                <input id="title" v-model="showsObject.venue" class="input" type="text">
              </div>
            </div>
            <div class="field">
              <label class="label">Town</label>
              <div class="control">
                <input id="year" v-model="showsObject.town" class="input" type="text">
              </div>
            </div>
            <div class="field">
              <label class="label" id="addLabel">Bands</label>
              <div class="control">
                <input id="year" v-model="showsObject.acts" class="input" type="text">
              </div>
            </div>
            <div class="field">
              <label class="label">Date</label>
              <div class="control">
                <input id="year" v-model="showsObject.date" class="input" type="text">
              </div>
            </div>
            <div class="field">
              <label class="label">Time</label>
              <div class="control">
                <input id="year" v-model="showsObject.time" class="input" type="text">
              </div>
            </div>
            <div class="field">
              <label class="label">Website</label>
              <div class="control">
                <input id="year" v-model="showsObject.url" class="input" type="text">
              </div>
            </div>
            <a class="button is-primary" id="submit" @click ="addShow">Submit</a>
          </div>
        </div>
      </div>

  <!-- BULMA MODAL COMPONENT -->

      <div v-if="visible" class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content" id="editBox">

          <div class="card">
            <header class="card-header">
              <p class="card-header-title" id="cardTitle">Edit Show</p>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="field">
                  <label class="label">Name</label>
                  <div class="control">
                    <input id="newName" v-model="showsObject.name" class="input" type="text" placeholder="Text input">
                  </div>
                </div>
                <div class="field">
                  <label class="label">Venue</label>
                  <div class="control">
                    <input id="newVenue" v-model="showsObject.venue" class="input" type="text" placeholder="Text input">
                  </div>
                </div>
                <div class="field">
                  <label class="label">Town</label>
                  <div class="control">
                    <input id="newTown" v-model="showsObject.town" class="input" type="text" placeholder="Text input">
                  </div>
                </div>
                <div class="field">
                  <label class="label">Bands</label>
                  <div class="control">
                    <input id="newBands" v-model="showsObject.acts" class="input" type="text" placeholder="Text input">
                  </div>
                </div>
                <div class="field">
                  <label class="label">Date</label>
                  <div class="control">
                    <input id="newDate" v-model="showsObject.date" class="input" type="text" placeholder="Text input">
                  </div>
                </div>
                <div class="field">
                  <label class="label">Time</label>
                  <div class="control">
                    <input id="newTime" v-model="showsObject.time" class="input" type="text" placeholder="Text input">
                  </div>
                </div>
                <div class="field">
                  <label class="label">Website</label>
                  <div class="control">
                    <input id="newURL" v-model="showsObject.url" class="input" type="text" placeholder="Text input">
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
      name: 'shows',
      firebase: {
        music: musicRef
      },
      data() {
        return {
          name: "",
          uid: "",
          email: "",
          showstitle:  'My Shows',
          showsObject: {
            name: '',
            venue: '',
            town: '',
            acts: '',
            date: '',
            time: '',
            url: ''
          },
          visible: 0,
          currentShow: {},
        }
      },
      methods: {
          addShow: function() {
            musicRef.child(this.uid + "/shows").push(this.showsObject);
            this.showsObject.name="";
            this.showsObject.venue="";
            this.showsObject.town="";
            this.showsObject.acts="";
            this.showsObject.date="";
            this.showsObject.time="";
            this.showsObject.url="";
            toastr.success("Show added!");
          },
          deleteShow: function(show) {
            musicRef.child(this.uid + "/shows").child(show['.key']).remove();
            toastr.warning("Show removed.");
          },
          openShow: function(show) {
            this.currentShow = show;
            this.showsObject.name=show.name;
            this.showsObject.venue=show.venue;
            this.showsObject.town=show.town;
            this.showsObject.acts=show.acts;
            this.showsObject.date=show.date;
            this.showsObject.time=show.time;
            this.showsObject.url=show.url;
            this.visible = 1;
          },
          editShow: function() {
            musicRef.child(this.uid + "/shows").child(this.currentShow['.key']).set({
              name: this.showsObject.name,
              venue: this.showsObject.venue,
              town: this.showsObject.town,
              acts: this.showsObject.acts,
              date: this.showsObject.date,
              time: this.showsObject.time,
              url: this.showsObject.url
            });
            this.visible =0;
            this.showsObject.name="";
            this.showsObject.venue="";
            this.showsObject.town="";
            this.showsObject.acts="";
            this.showsObject.date="";
            this.showsObject.time="";
            this.showsObject.url="";
            toastr.success("Show edited!");
          },
          closeShow: function() {
            this.visible =0;
            this.showsObject.name="";
            this.showsObject.venue="";
            this.showsObject.town="";
            this.showsObject.acts="";
            this.showsObject.date="";
            this.showsObject.time="";
            this.showsObject.url="";
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
