<template>
  <div id="app">

    <!-- <header>
       <div class="navbar">
       <h2><a href="#" class="logo">KC Local Music Connection</a></h2>
          <nav>
          </nav>
      </div>
     </header> -->

     <div class="imageDiv" id="imageDiv1">
         <div class="imageDivTitle">

           <div class="floating-box"><router-link to="/allbands"><a href=""><h3>Bands List</h3></a></router-link></div>
           <div class="floating-box"><router-link to="/allvenues"><a href=""><h3>Venues List</h3></a></router-link></div>
           <div class="floating-box"><router-link to="/allshows"><a href=""><h3>Shows List</h3></a></router-link></div>

          <div>
             <div class="firebaseauth" id="firebaseui-auth-container" lang="en"><h3 class="signinhere"><b>Sign In Here to Add to These Lists!</b></h3></div>
          </div>

         </div>
     </div>

  </div>
</template>

<script type="text/javascript">

  import firebase from 'firebase'
  import firebaseui from 'firebaseui'

  export default {
    name: 'mainpage',
    mounted() {
      let uiConfig = {
        signInSuccessUrl: '/profile',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
      };
      let ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start('#firebaseui-auth-container', uiConfig);
    }
  }
</script>


<link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/2.5.1/firebase-ui-auth.css" />
<style>
/*<style lang="scss">*/
h3 {
  font-size: 32px;
  color: white;
}
h3:hover {
opacity: 0.5;
}

</style>
