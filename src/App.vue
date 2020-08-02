<template>
  <div id="app">
  <v-app-bar
    color="deep-blue"
    dark
  >
    <v-toolbar-title>Item's Present</v-toolbar-title>
    <v-spacer></v-spacer>
    <p style="font-size: 15px"> {{$store.state.name}} </p>
    <img :src="$store.state.image" aspect-ratio="1:1" contain height="100%" style="border-radius: 50%" />
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
