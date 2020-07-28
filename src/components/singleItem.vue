<template>
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
                cols="3"
                >
                <v-card
                    color="#ffffff"
                    height="40px"
                    >
            <v-list-item-subtitle>Total = {{ item.Total }}</v-list-item-subtitle>
            </v-card>
            </v-col>
        </v-row>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style>

</style>