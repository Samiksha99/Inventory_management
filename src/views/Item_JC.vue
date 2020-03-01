<template>
    <div>
    <v-row dense>
        <v-col
          class="flex-wrap"
          v-for="item in items"
          v-bind:key="item.itemId"
          cols="12"
        >
  <v-card
    outlined
    color="#bfff00"
  >
    <v-list-item three-line>
        <v-row>
            <v-col
                cols="9">
            <div class="font-weight-black">{{ item.Name }}</div>
            </v-col>
            <v-col
                cols="1"
                >
                <v-card
                    color="#ffffff"
                    >
            <v-list-item-subtitle>Total = {{ item.Total }}</v-list-item-subtitle>
            </v-card>
            </v-col>
            <v-col
                cols="1"
                >
                <v-card
                color="#ff0000">
            <v-list-item-subtitle>Damaged = {{ item.Damaged }}</v-list-item-subtitle>
                </v-card>
            </v-col>
            <v-col
                cols="1"
                >
            <v-list-item-subtitle>Working = {{ item.Working }}</v-list-item-subtitle>
            </v-col>
        </v-row>
    </v-list-item>
  </v-card>
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
            var itemsref = db.ref('Modules_IC');
            let item = [];
            itemsref.on('value', function(snapshot){
                for(const i in snapshot.val())
                {
                    var name = snapshot.val()[i].Particulars;
                    var total = snapshot.val()[i].QUANTITY;
                    var damaged = snapshot.val()[i].damaged;
                    var working = snapshot.val()[i].Working;
                    var id = i;
                    item.push({
                        "itemId": id,
                        "Name": name,
                        "Total": total,
                        "Damaged": damaged,
                        "Working": working
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