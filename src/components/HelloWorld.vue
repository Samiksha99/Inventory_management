<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Inventory Management App
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { authenticate, provider } from '../main.js'
  export default {
    name: 'HelloWorld',
    created() {
      authenticate.signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(`User = ${user}`)
        console.log(user)
        console.log(`Token = ${token}`)
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        console.log(error)
        // ...
      });
    }
  }
</script>
