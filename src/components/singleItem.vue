<template>
  <div class="card">
  <div class="card-header">
    {{ type }}
  </div>
  <div class="card-body">
    <h5 class="card-title">{{ item.Name }}</h5>
    <p class="card-text">{{ item.Total }}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</template>

<script>
export default {
    props: ['item', 'type'],
    created() {
      console.log("Came Here")
    }
}
</script>

<style>

</style>