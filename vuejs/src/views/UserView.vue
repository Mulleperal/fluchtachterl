<template>
  <div class="container col-8 col-md-4 col-sm-6">
    <h1 class="mt-3 bg-secondary text-white rounded p-1">Login</h1>
    <form @submit="updateUserData" method="post">
      <div class="row p-1">
        <label for="username">Your Username</label>
        <input
          id="username"
          type="text"
          v-model="username"
        />

      </div>
      <div class="row p-1">
        <label for="email">Email</label>
        <input
          id="email"
          type="text"
          v-model="email"
        />

      </div>

      <div class="row p-1">
        <label for="email">Billingaddress</label>
        <input
            id="email"
            type="text"
            v-model="billing"
        />

      </div>

      <div class="row p-2">
        <button class="btn btn-primary" type="submit">Update</button>
      </div>

    </form>
  </div>
</template>

<script>
import axios from "axios";
import * as yup from "yup";
import { object } from "yup";
import jwt_decode from "jwt-decode";


export default {
  name: "UserView",
  data() {
    return {
      username: '',
      email: '',
      billing:'',
      user_id: ''

    }
  },
  methods: {

    updateUserData(event) {
      event.preventDefault()
      axios.post(`http://127.0.0.1:8080/api/v1/user/${this.user_id}`, {
        username: this.username,
        email: this.email,
        billing: this.billing
      })
          // .then((resp) => {
          //   localStorage.setItem('accessToken', resp.data.token)
          //   this.$store.commit('setToken', resp.data)
          //   console.log(jwt_decode(resp.data.token))
          //   let navComp = this.$refs.bt5Navbar
          //   navComp.$forceUpdate()
          // })

    }
  },

  created() {
    let tkn = localStorage.getItem('accessToken');

    if (tkn) {
      let decoded_token = jwt_decode(tkn)
      // set the username data property
      this.user_id = decoded_token.user_id;

      axios.get(`http://127.0.0.1:8080/api/v1/user/${decoded_token.user_id}`)
          .then(resp => {
            this.username = resp.data.username
            this.email = resp.data.email
            this.billing = resp.data.billing

          })

    }

    console.log(this.user_id)


  }
};
</script>

<style></style>
