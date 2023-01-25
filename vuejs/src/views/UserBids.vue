<template>

  <div class="container">
    <h1>User Bids</h1>

    <p3>Press on bid to go to auction</p3>



    <hr>

    <table class="table table-striped">
      <thead>
      <tr>
        <th scope="col">Condition</th>
        <th scope="col">Delivery</th>
        <th scope="col">Price</th>
        <th scope="col">End</th>

      </tr>
      </thead>
      <tbody v-for="(bid, index) in bids" :key="bid.id">
      <tr :class="{is_winner: bid.is_winner}" @click="to_auction(bid.auction_id)">
        <td>{{ bid.conditions }}</td>
        <td>{{ bid.delivery_condition }}</td>
        <td>{{ bid.price }}</td>
        <td>{{ has_ended(bid.expand.auction_id.end_time) }}</td>


      </tr>
      </tbody>
    </table>
  </div>

</template>

<script setup>

import {ref, onMounted} from 'vue'
import {pb} from '@/services/api'
import {useRouter} from "vue-router/dist/vue-router";

const router = useRouter()
const id = router.currentRoute.value.params.id

const bids = ref({})

const fetchData =  async  () => {
  const resultList = await pb.collection('bid').getList(1, 50, {
    filter: `user_id = "${id}"`,
    expand: "auction_id"
  });
  bids.value = resultList.items

}

function to_auction(auction_id) {
  console.log(auction_id)
  router.push({ name: 'auctionsdetail', params: { id: auction_id } })
}

function has_ended(endtime) {
  if (new Date(endtime) < new Date()) {
    return 'Has ended'
  }
  return 'Ongoing'
}

onMounted( () => {
  fetchData()
})

</script>



<style scoped>
.is_winner {
  background-color:green;
}

</style>
