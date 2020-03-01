<template>

<v-app>
  <!-- Sizes your content based upon application components -->
  <v-content>
    <HelloWorld/>
    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
    </v-container>
  </v-content>
</v-app>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
