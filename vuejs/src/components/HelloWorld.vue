<template>
  <div class="hello">
    <h1>Welcome to Fluchtachterl</h1>
    <h2>A small overview of current Auctions</h2>
  </div>

  <div class="row">
    <div class="w-75 mx-auto">
      <div class="d-flex flex-wrap">
        <div class="card m-1 p-1" style="width: 18rem;" v-for="item in data">
<!--          <img src="" class="card-img-top" alt="...">-->
          <div class="card-body">
            <h5 class="card-title">{{item.company}}</h5>
            <p class="card-text">{{item.volume}}</p>
            <p class="card-text">Time left: {{item.timeLeft}}</p>
            <a href="#" class="btn btn-primary">Go to auction</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {ref} from "vue";
import AuctionAPI from "@/services/auctionAPI";

export default {
  name: "HelloWorld",
  props: {},
  setup() {
    const data = ref('')

    const loadData = async () => {
      try {
        const resp = await AuctionAPI.getAuctions()
        data.value = resp.data
      } catch (err) {
        alert(err)
      }

    }

    // loadData()

    return {data}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
