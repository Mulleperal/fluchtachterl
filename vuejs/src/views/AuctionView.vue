<script>
import AuctionAPI from "@/services/auctionAPI";
import {ref} from "vue";
import moment from "moment"

export default {

  name: "ProductView",

  components: {},

  setup() {
    const data = ref('')

    const loadData = async () => {
      try {
        const resp = await AuctionAPI.getAuctions()
        data.value = resp.data
      } catch (err) {
        alert(err)
      }

    }

    loadData()

    console.log(data.value)
    return {data}
  },

};
</script>

<template>
  <div class="container mt-3">
    <table class="table table-striped">
      <thead>
      <tr>
        <th scope="col">company</th>
        <th scope="col">address</th>
        <th scope="col">volume</th>
        <th scope="col">lowest bid</th>
        <th scope="col">time left</th>
        <th scope="col">auction end</th>
      </tr>
      </thead>
      <tbody>
      <template v-for="item in data" :key="item.id">
        <tr>
          <td>{{ item.company }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.volume }}</td>
          <td>{{ item.lowestBid }}</td>
          <td>{{ item.timeLeft }}</td>
          <td>{{ item.auctionEnd }}</td>
        </tr>
      </template>
      </tbody>
    </table>
  </div>
</template>


