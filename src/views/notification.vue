<template>
<div>
    <h1 class="border-bottom">Notifications</h1>
    <div v-for="notification in newNotifications" :key="notification.id">
      <Single :notification="notification"/>
    </div>
    <v-btn @click="newNotifications = allNotifications">Show All</v-btn>
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
    newNotifications: [],
    allNotifications:[]
  }),
  mounted() {
    this.getItems()
  },
  methods: {
    async getItems()
    {
      var itemsRef = db.ref('notification');
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

    }
  }
}
</script>

<style>

</style>