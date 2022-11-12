<template>
  <nav>
    <Bt5Navbar></Bt5Navbar>
  </nav>
  <router-view />
</template>

<script>
// @ is an alias to /src
import Bt5Navbar from "./components/organisms/bt5Navbar.vue";

export default {
  components: {
    Bt5Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
