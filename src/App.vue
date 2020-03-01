<template>
  <div id="app">
    <v-app-bar app>
    <!-- -->
    <router-link to='/ItemMembers'><v-btn text large color="primary">Items list for members</v-btn></router-link>
    <v-spacer></v-spacer>
    <router-link to='/ItemJC'><v-btn text large color="primary">Items list for JC/C</v-btn></router-link>
  </v-app-bar>
  <v-content>
    <router-view/>
  </v-content>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
