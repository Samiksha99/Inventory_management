<template>
  <div :class="setAttribute(item.Total)">
  <div class="body">
    <h5 class="card-title">{{ item.Name }}</h5>
    <p class="card-text">Number of items:- {{ item.Total }}</p>
    <a href="#" :class="setButtonAttribute(item.Total)">Go somewhere</a>
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
      setButtonAttribute(number)
      {
        if(number>=0&&number<=4)
        {
          return 'btn btn-danger'
        }
        if(number>4&&number<=9)
        {
          return 'btn btn-primary'
        }
        if(number>9)
        {
          return 'btn btn-success'
        }
      },
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
    border: solid darkred;
    color: darkred;
    background-color: rgb(255, 184, 184);
  }
  .success {
    border: solid darkgreen;
    color: darkgreen;
    background-color: rgb(211, 255, 184);
  }
  .primary {
    border: solid darkblue;
    color: darkblue;
    background-color: rgb(184, 255, 243);
  }
</style>