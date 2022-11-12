<template>
  <div class="container col-8 col-md-4 col-sm-6">
    <h1 class="mt-3 bg-secondary text-white rounded p-1">Login</h1>
    <form>
      <div class="row p-1">
        <label for="username">Your Username</label>
        <input
          id="username"
          type="text"
          v-model="form.values.username"
          v-on:blur="validate('username')"
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
          v-on:blur="validate('password')"
        />
        <p class="text-danger" v-if="!!form.errors.password">
          {{ form.errors.password }}
        </p>
      </div>
      <div class="row p-2">
        <button class="btn btn-primary" type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
//import axios from "axios";
import * as yup from "yup";
import { object } from "yup";

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
    validate(field) {
      LoginFormSchema.validateAt(field, this.form.values)
        .then(() => {
          this.form.errors[field] = "";
        })
        .catch((error) => {
          this.form.errors[field] = error.message;
        });
    },
  },
};
</script>

<style></style>
