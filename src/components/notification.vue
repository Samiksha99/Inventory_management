<template>
<div>
    <h1 class="border-bottom">Notifications</h1>
    <div v-for="notification in notifications" :key="notification.id">
      <Single :notification="notification"/>
    </div>
    <v-btn v-if="showall" @click="showAll()">Show All</v-btn>
    <v-btn v-if="showless" @click="showLess()">Show Less</v-btn>
</div>
</template> 

<script>
import Single from '../components/singleNotification'  
import { db } from '../main'
export default {
  components: {
    Single
  },
  data: () => ({
    notifications: [],
    newNotifications: [],
    allNotifications:[],
    showless: false,
    showall: true
  }),
  created() {
    this.getItems()
  },
  mounted() {
    this.getItems()
  },
  methods: {
    showAll() {
      this.notifications = this.allNotifications
      this.showless = true
      this.showall = false
    },
    showLess() {
      this.notifications = this.newNotifications
      this.showall = true
      this.showless = false
    },
    async getItems()
    {
      var itemsRef = await db.ref('notification');
      let notifications = []
      itemsRef.on('value', function(snapshot){
        for(const i in snapshot.val())
        {

          notifications.push({
            id: i,
            body: snapshot.val()[i].Body,
            email: snapshot.val()[i].Email,
            name: snapshot.val()[i].Name,
            type: snapshot.val()[i].Type,
          })
        }
      })
      /* `Notification for :- ${snapshot.val()[i].Type.charAt(0).toUpperCase() + snapshot.val()[i].Type.slice(1)}` */
      console.log(notifications)
      this.newNotifications = notifications.slice(-5).slice(0, 5).reverse()
      this.allNotifications = notifications.reverse()
      this.notifications = this.newNotifications
    }
  }
}
</script>

<style>

</style>