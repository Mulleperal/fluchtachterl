<template>
  <div class="container col-8 col-md-4 col-sm-6">
    <h1 class="mt-3 bg-secondary text-white rounded p-1">Register Form</h1>
    <form @submit="registerUser">
      <div class="row p-1">
        <label for="email">Your Emai-Address</label>
        <input
            id="email"
            type="email"
            v-model="email"
            @input="formCheck"

        />

      </div>
      <div class="row p-1">
        <label for="username">Your Username</label>
        <input
            id="username"
            type="text"
            v-model="username"
            @input="formCheck"

        />

      </div>
      <div class="row p-1">
        <label for="password">Your Password</label>
        <input
            id="password"
            type="password"
            v-model="password"
            @input="formCheck"
        />

      </div>
      <div class="row p-1">
        <label for="passwordCheck">Confirm your Password</label>
        <input
            id="passwordCheck"
            type="password"
            v-model="passwordCheck"
            @input="formCheck"
        />


        <p v-if="!passwordMatch">Passwords dont match</p>

      </div>
      <p v-if="!validForm"> Register Button appears as soon as all field are filled and password is at least 8 char.
        long</p>
      <div class="row p-2">
        <button
            v-if="validForm"
            class="btn btn-primary"
            type="submit"
        >
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import * as yup from "yup";
import {object} from "yup";
import {pb} from "@/services/api"

export default {
  name: "RegisterViewNoValidation",
  data() {
    return {
      username: '',
      email: '',
      password: '',
      passwordCheck: '',
      validForm: false,
      passwordMatch: false,
      user_permission: 'USER'
    }
  },

  methods: {
    async registerUser(event) {
      event.preventDefault()
      // axios.post(`http://127.0.0.1:8080/api/v1/user/`, {
      //   username: this.username,
      //   email: this.email,
      //   password: this.password
      // })
      //     .then(resp => {
      //       alert('Successfull Registration, please login')
      //       this.$router.push({ path: '/auctions' })
      //     })
      const data = {
        "username": this.username,
        "password": this.password,
        "passwordConfirm": this.password,
        "user_permission": this.user_permission
      }

      const record = await pb.collection('users').create(data);
      if (record) {
        this.redirectNewUser()
      }
    },

    redirectNewUser() {
            alert('Successfull Registration, please login')
            this.$router.push({ path: '/auctions' })
    },

    checkMatch() {
      this.passwordMatch = this.password == this.passwordCheck
    },

    formCheck() {
      this.checkMatch()
      this.validForm = this.username.length > 0 && this.passwordMatch && this.email.length > 0 && this.password.length > 7
    }
  },
};
</script>

<style></style>
