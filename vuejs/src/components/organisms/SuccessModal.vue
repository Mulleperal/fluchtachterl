<template>
  <div>
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal" @click.stop>
        <h6>Saved!</h6>
        <p>Your Details have been saved Successfully</p>
        <button>Go Home</button>

        <div class="close" @click="$emit('close-modal')">
          <p class="btn btn-danger">Close</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 50%;
  width: 50%;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}
</style>
