<template>
  <div>
    <div>
      <button class="btn btn-primary" @click="showModal = true">
        Open Modal
      </button>
    </div>
    <SuccessModal v-show="showModal" @close-modal="showModal = false">
    </SuccessModal>
  </div>
</template>

<script>
import SuccessModal from "../components/organisms/SuccessModal.vue";

export default {
  components: {
    SuccessModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
