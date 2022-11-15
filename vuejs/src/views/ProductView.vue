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
        <template v-for="item in data" :key="item.id">
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
  </div>
</template>

<script>
import {ref} from "vue";
import ProductAPI from "@/services/productAPI";

export default {
  name: "ProductView",
  components: {},

  setup() {
    const data = ref('')

    const loadData = async () => {
      try {
        const resp = await ProductAPI.getProducts()
        data.value = resp.data
      } catch (err) {
        alert(err)
      }

    }

    loadData()

    return {data}
  }

};
</script>
