<template>
<div>
    <h1 class="border-bottom">Notifications</h1>
    <div v-for="notification in notifications" :key="notification.id">
      <Single :notification="notification"/>
    </div>
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
    notifications: []
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
      this.notifications = notifications.reverse()

    }
  }
}
</script>

<style>

</style>