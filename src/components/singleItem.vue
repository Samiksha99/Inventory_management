<template>
  <div :class="setAttribute(item.Total)">
  <div class="card-body">
    <h5 class="card-title">{{ item.Name }}</h5>
    <p class="card-text">Number of items:- {{ item.Total }}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</template>

<script>
export default {
    props: ['item'],
    created() {
      console.log("Came Here")
    },
    methods: {
      setAttribute(number)
      {
        if(number>=0&&number<=4)
        {
          return 'danger'
        }
        if(number>4&&number<=9)
        {
          return 'primary'
        }
        if(number>9)
        {
          return 'success'
        }
      }
    }
}
</script>

<style scoped>
  .danger {
    border: solid red;
  }
  .success {
    border: solid greenyellow;
  }
  .primary {
    border: solid blue;
  }
</style>