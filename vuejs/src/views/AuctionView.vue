<script setup>
import AuctionAPI from "@/services/auctionAPI";
import PocketBase from "pocketbase";
import moment from "moment"
import {pb} from '@/services/api'
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const auctions = ref({})
const user_id = ref({})
const create_auction = ref(false)

const address = ref({})
const volume = ref({})
const name = ref({})
const company = ref({})
const end_time = ref({})


const getAuctionList = async () => {
  try {
    const data = await pb.collection('auction').getList(1, 50)
    if (data) {
      auctions.value = data.items
    }
  } catch (error) {
  }
};

function clickList(row) {
  router.push({ name: 'auctionsdetail', params: { id: row.id } })
}

function get_UserPerms() {

  if (pb.authStore.model) {
    if (pb.authStore.model.user_permission) {
      user_id.value = pb.authStore.model.id
      console.log(user_id.value)
      return true
    }
  }
  return false
}

async function create_auction_function(event) {
  event.preventDefault()


  const data = {
    "address": address._rawValue.value,
    "volume": volume._rawValue.value,
    "name": name._rawValue.value,
    "company": company._rawValue.value,
    "end_time": new Date(end_time._rawValue.value),
    "created_by": user_id.value
  };








  const record = await pb.collection('auction').create(data);
  router.push({ name: '/auctionsdetail', params: { id: record.id } })
}

function open_auction() {
  create_auction.value = !create_auction.value
}

function get_time_diff(given_time) {
  var diff = new Date(given_time) - new Date();
  console.log(given_time)
  if (given_time == '') return 'No end'

  if (diff < 0) return 'Finished'// this is a time in milliseconds
  var diff_as_date = new Date(diff);
  let a=diff_as_date.getHours(); // hours
  let b=diff_as_date.getMinutes(); // minutes
  let c=diff_as_date.getSeconds(); // seconds


  return `${a}:${b}:${c}`
}

onMounted(() => {
  create_auction.value = false
  get_UserPerms()

  getAuctionList();
});

</script>

<template>




  <div class="container mt-3">

    <h1>

      Auktionen

    </h1>

    <button type="button" v-if="get_UserPerms" @click="open_auction">
      Create Auction
    </button>


    <table class="table table-striped">
      <thead>
      <tr>
        <th scope="col">company</th>
        <th scope="col">address</th>
        <th scope="col">volume</th>
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
          <td>{{ get_time_diff(item.end_time) }}</td>
          <td>{{ item.end_time }}</td>
        </tr>
<!--      </template>-->
      </tbody>
    </table>
    <hr>
    <div class="" v-if="get_UserPerms && create_auction">
      <h3>Create an auction</h3>
      <form @submit="create_auction_function" method="post">
        <div class="row p-1">
          <label for="username">Your Username</label>
          <input
              id="username"
              type="text"
              v-model="name.value"
              required
          />
        </div>

        <div class="row p-1">
          <label for="comp">Your Company</label>
          <input
              id="comp"
              type="text"
              v-model="company.value"
              required
          />
        </div>

        <div class="row p-1">
          <label for="addres">Your Adress</label>
          <input
              id="addres"
              type="text"
              v-model="address.value"
              required
          />
        </div>

        <div class="row p-1">
          <label for="volume">Volume</label>
          <input
              id="volume"
              type="text"
              v-model="volume.value"
              required
          />
        </div>

        <div class="row p-1">
          <label for="end_time">Endtime</label>
          <input
              id="end_time"
              type="datetime-local"
              v-model="end_time.value"
              required
          />
        </div>





        <div class="row p-2">
          <button class="btn btn-primary" type="submit" >Create</button>
        </div>

      </form>
    </div>
  </div>
</template>


