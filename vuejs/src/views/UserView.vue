

<script setup>

import {onMounted, ref} from 'vue'
import UserBids from "@/views/UserBids";
import { useRouter } from 'vue-router';
import {pb} from '@/services/api'
const router = useRouter()
const id = router.currentRoute.value.params.id

const bids = ref({})
const user_data = ref({})
const username = ref({})
const email = ref({})
const temp_billing = ref({})
const billing = ref({})
const has_loaded = ref(false)



// export default {
  // name: "UserView",
  // data() {
  //   return {
  //     username: '',
  //     email: '',
  //     billing:'',
  //     user_id: '',
  //
  //   }
  // },
  // methods: {
  //
  //   updateUserData(event) {
  //     event.preventDefault()
  //     axios.put(`http://127.0.0.1:8080/api/v1/user/${this.user_id}`, {
  //       username: this.username,
  //       email: this.email,
  //       billing: this.billing
  //
  //     })
  //         // .then((resp) => {
  //         //   localStorage.setItem('accessToken', resp.data.token)
  //         //   this.$store.commit('setToken', resp.data)
  //         //   console.log(jwt_decode(resp.data.token))
  //         //   let navComp = this.$refs.bt5Navbar
  //         //   navComp.$forceUpdate()
  //         // })
  //
  //   },
  //   deleteAccount(event) {
  //     event.preventDefault()
  //     let answ = window.confirm('Delete data?')
  //     if (answ) {
  //       axios.delete(`http://127.0.0.1:8080/api/v1/user/${this.user_id}`)
  //           .then( resp =>{
  //                 localStorage.clear()
  //                 alert('Account deleted')
  //                 window.location.reload()
  //           }
  //
  //           )
  //
  //     }
  //   }
  // },
  //
  // created() {
  //   let tkn = localStorage.getItem('accessToken');
  //
  //   if (tkn) {
  //     let decoded_token = jwt_decode(tkn)
  //     // set the username data property
  //     this.user_id = decoded_token.user_id;
  //
  //     axios.get(`http://127.0.0.1:8080/api/v1/user/${decoded_token.user_id}`)
  //         .then(resp => {
  //           this.username = resp.data.username
  //           this.email = resp.data.email
  //           this.billing = resp.data.billing
  //
  //         })
  //
  //   }
  //
  //   console.log(this.user_id)
  //
  //
  // }
// };
async function get_user_data() {

  const record = await pb.collection('users').getOne(id);
  username.value = record.username
  email.value = record.email
  billing.value = record.billing
  console.log(record.username)
}

onMounted(() => {
  get_user_data().then(has_loaded.value=true)
});
</script>

<template>
  <div class="container col-8 col-md-4 col-sm-6" v-if="has_loaded">
    <h1 class="mt-3 bg-secondary text-white rounded p-1">Edit Profiledata</h1>
    <form @submit="updateUserData" method="post">
      <div class="row p-1">
        <label for="username">Your Username</label>
        <input
            id="username"
            type="text"
            v-model="username.value"
        />

      </div>
      <div class="row p-1">
        <label for="email">Email</label>
        <input
            id="email"
            type="text"
            v-model="email.value"
        />

      </div>

      <div class="row p-1">
        <label for="billing">Billingaddress</label>
        <input
            id="billing"
            type="text"
            v-model="temp_billing.value"
        />

      </div>



      <div class="row p-2">
        <button class="btn btn-primary" type="submit">Update</button>
      </div>



    </form>

    <div class="row p-2">
      <button class="btn btn-danger" type="button" @click="deleteAccount">Yeet the account!</button>
    </div>
  </div>

  <hr>
  <user-bids></user-bids>
</template>

<style></style>
