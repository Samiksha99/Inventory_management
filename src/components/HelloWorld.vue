<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          {{message}}
        </h1>
        <div v-if="show">
          <v-btn @click="authentication">
            Sign In
          </v-btn>
        </div>
        <div v-else>
          <h6>Redirecting you to Item's section shortly...</h6>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { authenticate, provider } from '../main.js'
  export default {
    name: 'HelloWorld',
    data: () => ({
      user: {},
      message: "Inventory Management App",
      show: true
    }),
    beforeMount() {
      this.getUser()
    },
    methods: {
      authentication() {
        authenticate.signInWithRedirect(provider);
      },
      async getUser() {
        var snapshot = await authenticate.getRedirectResult()
        console.log(snapshot)
        this.user = snapshot.user
        console.log(this.user)
        if(this.user)
        {
          this.message = "Welcome Admin!"
          this.show = false
          setTimeout(() => {
            this.$router.push({name: 'JC'})
          }, 4000);
        }
      }
    }
  }
</script>
