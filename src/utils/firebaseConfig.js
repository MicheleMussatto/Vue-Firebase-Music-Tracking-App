import firebase from 'firebase'
/* Replace your config info below*/
const config = {
    apiKey: "AIzaSyC5jrkEwPJYS3yM-rVwicgC2T_EdK1aQkw",
    authDomain: "local-music-app.firebaseapp.com",
    databaseURL: "https://local-music-app.firebaseio.com",
    projectId: "local-music-app",
    storageBucket: "local-music-app.appspot.com",
    messagingSenderId: "192272489042"
  };

let app = firebase.initializeApp(config);
let db = app.database();

export default {
  config,
  db
};
