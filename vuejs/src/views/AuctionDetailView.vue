<template>

  <div class="container">
    <div v-if="auction">
      <h1>Auktion {{ auction.name }} von {{ auction.company }}</h1>
      <h3>Endet am {{ new Date(auction.end_time).toLocaleDateString() }} um
        {{ new Date(auction.end_time).toLocaleTimeString() }}</h3>
      <!--      {{ id }}-->

      <!--      {{ auction }}-->

      <hr>

      <h2>Produkte</h2>

      <!--      {{ // products }}-->

      <table class="table table-striped">
        <thead>
        <tr>
          <th scope="col">brand</th>
          <th scope="col">description</th>
          <th scope="col">filling amount</th>
          <th scope="col">packaging</th>
          <th scope="col">alcoholic</th>
        </tr>
        </thead>
        <tbody>
        <template v-for="item in products" :key="item.id">
          <tr>
            <td>{{ item.brand }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.fillingAmount }}</td>
            <td>{{ item.packaging }}</td>
            <td>{{ item.alcoholic }}</td>
          </tr>
        </template>
        </tbody>
      </table>

      <hr>
      <h3>Angebote</h3>

      <div v-if="curr_user">
        <div v-if="new Date()<new Date(auction.end_time)">
          <button type="button" class="btn btn-primary" v-if="curr_user != created_by && curr_user" @click="mitbieten">
            Mitbieten
          </button>

        </div>
        <h2 v-else class="text-danger">Auktion zu Ende</h2>

        <div v-if="is_betting">

          <form method="post">
            <div class="row p-1">
              <label for="conditions">Conditions</label>
              <input
                  id="conditions"
                  type="text"
                  v-model="mit_cond.value"
              />
            </div>
            <div class="row p-1">
              <label for="password">Delivery cond.</label>
              <input
                  id="password"
                  type="text"
                  v-model="mit_delivery.value"
              />
            </div>

            <div class="row p-1">
              <label for="password">Preis</label>
              <input
                  id="password"
                  type="text"
                  v-model="mit_price.value"
              />
            </div>


            <div class="row p-2">
              <button class="btn btn-primary" type="button" @click="send_form">Bieten</button>
            </div>

          </form>

        </div>


        <div v-if="curr_user == created_by && !is_choosing && curr_user">
          <button type="button"
                  class="btn btn-primary"
                  v-if="new Date()>new Date(auction.end_time)"
                  @click="choose_offer">Angebot wahelen
          </button>
          <h3
              class="text-info"
              v-if="new Date()<new Date(auction.end_time)"
          >Bitte warten bis die Auktion zu Ende ist</h3>
        </div>


        <button type="button" class="btn btn-danger" v-if="curr_user == created_by && is_choosing && curr_user"
                @click="stop_choosing">Stop
        </button>
      </div>

      <table class="table table-striped">
        <thead>
        <tr>
          <!--          <th scope="col">User_Id</th>-->
          <th scope="col">Description</th>
          <th scope="col">Delivery cond.</th>
          <th scope="col">Price amount</th>

        </tr>
        </thead>
        <tbody v-on:click="accept_offer(item, is_choosing)" v-for="item in bids" :key="item.id">
        <!--        <template   @click>-->
        <tr :class="{is_mine: item.user_id == curr_user, is_winner: item.is_winner}">
          <!--            <td>{{ item.user_id }}</td>-->
          <td>{{ item.conditions }}</td>
          <td>{{ item.delivery_condition }}</td>
          <td>{{ item.price }}</td>
        </tr>
        <!--        </template>-->
        </tbody>
      </table>
    </div>
  </div>

<!--  <hr>-->
<!--  {{ created_by }}-->
<!--  <hr>-->
<!--  {{ curr_user }}-->
<!--  <hr>-->
<!--  &lt;!&ndash;  {{auction.id}}&ndash;&gt;-->
<!--  {{ mit_delivery }}-->

</template>

<script setup>

import {pb} from '@/services/api'
import {onMounted, ref} from 'vue';
import {useRouter} from 'vue-router';
import moment from 'moment'
import jwt_decode from "jwt-decode";


const router = useRouter()
const id = router.currentRoute.value.params.id

const auction = ref({})
const products = ref({})
const bids = ref({})

const is_choosing = ref({})

const created_by = ref({})
const curr_user = ref({})
const is_betting = ref({})


const mit_cond = ref({})
const mit_delivery = ref({})
const mit_price = ref({})

function choose_offer() {
  is_choosing.value = true
}

async function accept_offer(item, status) {

  if (status) {
    await pb.collection('bid').update(item.id, {"is_winner": true})

  }

}

async function send_form() {
  send_angebot().then(
      getAuctionData()
  )

}

async function send_angebot() {
  console.log(mit_delivery._rawValue.value)
  const data = {
    "conditions": mit_cond._rawValue.value,
    "price": mit_price._rawValue.value,
    "auction_id": id,
    "user_id": curr_user.value,
    "delivery_condition": mit_delivery._rawValue.value
  };

  const record = await pb.collection('bid').create(data);
  console.log(record)
  bids.value.push(record)


}

function stop_choosing() {
  is_choosing.value = false
}

function mitbieten() {
  is_betting.value = true
}

const getAuctionData = async () => {
  try {
    const data = await pb.collection('auction').getOne(id, {
      expand: 'product,bids,created_by',
    })

    const auction_products = await pb.collection('product').getList(1, 200, {
      filter: `auction_id = "${id}"`
    })

    const auction_bid = await pb.collection('bid').getList(1, 200, {
      filter: `auction_id = "${id}"`
    })


    if (data) {
      console.log(data)
      auction.value = data
      products.value = auction_products.items
      bids.value = auction_bid.items

      created_by.value = data.created_by

      let decoded_token = jwt_decode(document.cookie.slice(6))

      curr_user.value = decoded_token.id
      is_choosing.value = false
      is_betting.value = false


    }
  } catch (error) {
    console.log(error);
  }
};

function formatDate(dateString) {
  const date = new Date(dateString);

  // Then specify how you want your dates to be formatted
  return new Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(date);
}

onMounted(() => {
  // const id = router.params.id
  getAuctionData();
});


</script>

<style scoped>

.is_mine {
  background-color:lightblue;

}

.is_winner {
  border-color:lime;
  border-width: medium;

}


</style>
