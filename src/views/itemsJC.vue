<template>
    <div>
    <v-row dense>
        <v-col
          class="flex-wrap"
          v-for="item in items"
          v-bind:key="item.itemId"
          cols="12"
        >
    <singleItem :item="item" />
  </v-col
        >
      </v-row>
    </div>
</template>
<script>
import { db } from '../main.js'
import singleItem from '../components/singleItem'
export default {
    components: {
        singleItem
    },
    data(){
        return{
            itemId: null,
            name: null,
            damaged: 0,
            total: 0,
            working: 0,
            items: [],
            factor: 1
        }
    },
    mounted(){
        this.getItems()
    },
    methods:{
        async getItems()
        {
            /* eslint-disable */
            var itemsref = db.ref(`data/${this.$route.params.id}`);
            let item = [];
            itemsref.on('value', function(snapshot){
                for(const i in snapshot.val())
                {
                    var name = snapshot.val()[i].Name;
                    var total = snapshot.val()[i].Quantity;
                    var id = i;
                    item.push({
                        "itemId": id,
                        "Name": name,
                        "Total": total,
                    });
                }
            });
            this.items = item;
        },
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