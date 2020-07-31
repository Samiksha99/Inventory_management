<template>
    <div>
        <h1 class="border-bottom"> Hello! </h1>
    <v-row dense>
        <v-col
          class="flex-wrap"
          v-for="name in names"
          v-bind:key="name.id"
          cols="12"
        >
  <router-link :to="redirect(name.id)" style="text-decoration: none"><v-card
    outlined
    color="#bfff00"
  >
    <v-list-item three-line>
        <v-list-item-title>{{ name.name }}</v-list-item-title>
    </v-list-item>
  </v-card></router-link>
  </v-col
        >
      </v-row>
    </div>
</template>
<script>
import { db } from '../main.js'
export default {
    data(){
        return{
            show: false,
            itemId: null,
            name: null,
            damaged: 0,
            total: 0,
            working: 0,
            names: [],
            factor: 1,
        }
    },
    mounted(){
        this.getItems()
    },
    methods:{
        async getItems()
        {
            /* eslint-disable */
            var itemsref = db.ref('data');
            let name = [];
            itemsref.on('value', function(snapshot){
                for(const i in snapshot.val())
                {
                    name.push({
                        id: i,
                        name: snapshot.val()[i].name}
                        );
                }
            });
            this.names = name;
        },
        redirect(id)
        {
            return `ItemJC/${id}`
        }
        /*writeUserData() {
        db.ref(this.itemId).set({
            name: this.name,
            damaged: this.damaged,
            total: this.total,
            working: this.total - this.damaged,
        });
    }*/
    }
}
</script>
<style scoped>

</style>