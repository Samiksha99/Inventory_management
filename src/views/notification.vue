<template>
  <h1 class="border-bottom">Notifications</h1>

</template>

<script>
import { db } from '../main'
export default {
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
            type: snapshot.val()[i].Type
          })
        }
      })
      console.log(notifications)
      this.notifications = notifications
    }
  }
}
</script>

<style>

</style>