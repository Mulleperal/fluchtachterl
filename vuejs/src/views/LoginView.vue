<template>
  <div class="container col-8 col-md-4 col-sm-6">
    <h1 class="mt-3 bg-secondary text-white rounded p-1">Login</h1>
    <form @submit="login" method="post">
      <div class="row p-1">
        <label for="username">Your Username</label>
        <input
          id="username"
          type="text"
          v-model="form.values.username"
        />
        <p class="text-danger" v-if="!!form.errors.username">
          {{ form.errors.username }}
        </p>
      </div>
      <div class="row p-1">
        <label for="password">Your Password</label>
        <input
          id="password"
          type="password"
          v-model="form.values.password"
        />
        <p class="text-danger" v-if="!!form.errors.password">
          {{ form.errors.password }}
        </p>
      </div>
      <div class="row p-2">
        <button class="btn btn-primary" type="submit">Login</button>
      </div>
      <div class="row p-2">
        <button class="btn btn-primary" type="button" @click="showtkn">Test</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import * as yup from "yup";
import { object } from "yup";
import jwt_decode from "jwt-decode";

const LoginFormSchema = object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

export default {
  name: "LoginView",
  data: () => ({
    form: {
      values: {
        username: "",
        password: "",
      },
      errors: {
        username: "",
        password: "",
      },
    },
  }),
  methods: {
    // validate(field) {
    //   LoginFormSchema.validateAt(field, this.form.values)
    //     .then(() => {
    //       this.form.errors[field] = "";
    //     })
    //     .catch((error) => {
    //       this.form.errors[field] = error.message;
    //     });
    // },
    showtkn(event) {
      event.preventDefault()
      console.log(this.$store.getters.getToken())
    },
    login(event) {
      event.preventDefault()
      console.log(this.form.values.username)
      axios.post('http://127.0.0.1:8080/api/v1/user/login', {
        username: this.form.values.username,
        password: this.form.values.password
      })
          .then((resp) => {
            localStorage.setItem('accessToken', resp.data.token)
            this.$store.commit('setToken', resp.data)
            console.log(jwt_decode(resp.data.token))
            let navComp = this.$refs.bt5Navbar
            navComp.$forceUpdate()
          })

    }
  },
};
</script>

<style></style>
