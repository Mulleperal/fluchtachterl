<template>
  <div class="container mt-3">
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
<!--        <template v-for="item in products" :key="item.id" @click="redirect_auction(item)">-->
          <tr v-for="item in products" :key="item.id" @click="redirect_auction(item)">
            <td>{{ item.brand }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.fillingAmount }}</td>
            <td>{{ item.packaging }}</td>
            <td>{{ item.alcoholic }}</td>
          </tr>
<!--        // </template>-->
      </tbody>
    </table>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import ProductAPI from "@/services/productAPI";
import {pb} from "@/services/api"
import { useRouter } from 'vue-router';

const router = useRouter()


const products = ref({})

const getProducts = async () => {
  try {
    const data = await pb.collection('product').getFullList(200 /* batch size */, {
      sort: '-created',
    });
    if (data) {
      console.log(data)
      products.value = data
    }
  } catch (error) {
    console.log(error);
  }
};

function redirect_auction(item) {
  console.log(item.auction_id)
  router.push({ name: 'auctionsdetail', params: { id: item.auction_id } })
}

onMounted(() => {
  getProducts()
});

// export default {
//   name: "ProductView",
//   components: {},
//
//   setup() {
//     const data = ref('')
//
//     const loadData = async () => {
//       try {
//         const resp = await ProductAPI.getProducts()
//         data.value = resp.data
//       } catch (err) {
//         alert(err)
//       }
//
//     }
//
//     loadData()
//
//     return {data}
//   }
//
// };
</script>
