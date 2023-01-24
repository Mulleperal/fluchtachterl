<template>
  <div class="container col-8 col-md-4 col-sm-6">
    <h1 class="mt-3 bg-secondary text-white rounded p-1">Login</h1>
    <form @submit="login" method="post">
      <div class="row p-1">
        <label for="username">Your Username</label>
        <input
          id="username"
          type="text"
          v-model="username"
        />
      </div>
      <div class="row p-1">
        <label for="password">Your Password</label>
        <input
          id="password"
          type="password"
          v-model="password"
        />
      </div>
      <div class="row p-2">
        <button class="btn btn-primary" type="submit">Login</button>
      </div>

    </form>
  </div>
</template>

<script>
import axios from "axios";
import * as yup from "yup";
import { object } from "yup";
import jwt_decode from "jwt-decode";
import {pb} from '@/services/api'

const LoginFormSchema = object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

export default {
  name: "LoginView",
  data: () => ({
    username: '',
    password: ''
  }),
  methods: {


    async login(event) {
      event.preventDefault()
      // console.log(this.form.values.username)
      // axios.post('http://127.0.0.1:8080/api/v1/user/login', {
      //   username: this.form.values.username,
      //   password: this.form.values.password
      // })
      //     .then((resp) => {
      //       localStorage.setItem('accessToken', resp.data.token)
      //       this.$store.commit('setToken', resp.data)
      //       this.$router.push({ path: '/auctions' })
      //     })
      const authData = await pb.collection('users').authWithPassword(
          this.username, this.password,
      );

            // localStorage.setItem('accessToken', resp.data.token)
            // this.$store.commit('setToken', resp.data)
            // this.$router.push({ path: '/auctions' })
      let d = new Date();
      d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
      let expires = "expires=" + d.toUTCString();
      document.cookie =
          "Token=" + pb.authStore.token + ";" + expires + ";path=/";

      console.log(authData)
      console.log(pb.authStore.isValid);
      console.log(pb.authStore.token);
      console.log(pb.authStore.model.id);

    }
  },


  beforeUnmount() {
    window.location.reload()
  }

};
</script>

<style></style>
