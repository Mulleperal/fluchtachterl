<template>
  <div class="container">
    <div class="mt-3">
      <h1>Help Page</h1>
      <div class="mt-3">
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" @click.prevent>Search</button>
        </form>
      </div>
      <div class="mt-4">
        <div class="accordion" id="accordionExample">
          <template v-for="item in data" :key="item.id">
            <div class="accordion-item">
              <h2 class="accordion-header" :id="'heading' + item.id">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  v-bind:data-bs-target="'#collapse' + item.id"
                  aria-expanded="true"
                  v-bind:aria-controls="'collapse' + item.id"
                >
                  {{ item.question }}
                </button>
              </h2>
              <div
                :id="'collapse' + item.id"
                class="accordion-collapse collapse"
                v-bind:aria-labelledby="'heading' + item.id"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  {{ item.answer }}
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
      <button class="btn btn-primary mt-5" @click="showModal = true">
        Open Modal
      </button>
    </div>
    <ErrorModal v-show="showModal" @close-modal="showModal = false">
    </ErrorModal>
  </div>
</template>

<script>
import ErrorModal from "../components/organisms/ErrorModal.vue";
import {ref} from "vue";
import FaqAPI from "@/services/faqAPI";

export default {
  components: {
    ErrorModal,
  },
  setup() {
    const data = ref('')

    const loadData = async () => {
      try {
        const resp = await FaqAPI.getFaq()
        data.value = resp.data
        console.log(resp.data)
      } catch (err) {
        alert(err)
      }

    }

    loadData()

    return {data}
  }
};
</script>
