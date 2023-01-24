<script setup>
import AuctionAPI from "@/services/auctionAPI";
import PocketBase from "pocketbase";
import moment from "moment"
import {pb} from '@/services/api'
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const auctions = ref({})


const getAuctionList = async () => {
  try {
    const data = await pb.collection('auction').getList(1, 50);;
    if (data) {
      auctions.value = data.items
    }
  } catch (error) {
    console.log(error);
  }
};

function clickList(row) {
  console.log("clickList fired with " + row.id);
  router.push({ name: 'auctionsdetail', params: { id: row.id } })
}

onMounted(() => {
  getAuctionList();
});

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
      <tbody v-on:click="clickList(item)" v-for="item in auctions" :key="item.id">
<!--      <template >-->
        <tr>
          <td>{{ item.company }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.volume }}</td>
          <td>{{ item.lowestBid }}</td>
          <td>{{ item.timeLeft }}</td>
          <td>{{ item.auctionEnd }}</td>
        </tr>
<!--      </template>-->
      </tbody>
    </table>
  </div>
</template>


