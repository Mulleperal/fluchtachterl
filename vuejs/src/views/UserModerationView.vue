<template>
  <div class="container">
    <h1>User Moderation View for Admin</h1>

    <button type="button" class="btn btn-danger"  @click="toggle_ban_users">
      <div>
        <p v-if="!is_banning">Stop Banning</p>
        <p v-if="is_banning">Ban Users</p>
      </div>
    </button>

    <button type="button" class="btn btn-danger"  @click="toggle_del_users">
      <div>
        <p v-if="!is_deleting">Stop Deleting</p>
        <p v-if="is_deleting">Delete Users</p>
      </div>
    </button>

    <hr>

    <table class="table table-striped">
      <thead>
      <tr>
        <th scope="col">Username</th>
        <th scope="col">Name</th>
        <!--      <th scope="col">volume</th>-->
        <!--      <th scope="col">lowest bid</th>-->
        <!--      <th scope="col">time left</th>-->
        <!--      <th scope="col">auction end</th>-->
      </tr>
      </thead>
      <tbody v-for="(user, index) in users" :key="user.id" v-on:click="toggle_ban_del_user(user, is_banning, is_deleting, index)">
      <!--      <template >-->
      <tr :class="{is_banned: user.is_banned}">
        <td>{{ user.username }}</td>
        <td>{{ user.name }}</td>

      </tr>
      <!--      </template>-->
      </tbody>
    </table>
  </div>
</template>

<script setup>
import {pb} from '@/services/api'
import {onMounted, ref} from "vue";

const users = ref({})
const is_banning = ref({})
const is_deleting = ref({})

const getUserList = async () => {
  try {
    const data = await pb.collection('users').getFullList(200)
    if (data) {
      users.value = data
    }
  } catch (error) {
  }
}

function toggle_ban_users() {
  is_banning.value = !is_banning.value
  is_deleting.value = true
  if (is_banning) console.log('BANNING', is_banning.value, 'DELETEING', is_deleting.value)
}

function toggle_del_users() {
  is_deleting.value = !is_deleting.value
  is_banning.value = true
  if (is_deleting) console.log('DELETING')

}


async function toggle_ban_del_user(user, is_banning_bool, is_deleting_bool, index) {

  if (is_banning_bool == false && is_deleting_bool == true) {
    const data = {
      "is_banned": !user.is_banned
    };


    const record = await pb.collection('users').update(user.id, data);
    user.is_banned = !user.is_banned
    return user
  }

  if (is_deleting_bool == false && is_banning_bool == true) {
    await pb.collection('users').delete(user.id);
    users.value.splice(index, 1)
    // return user
    return

  }

  return


}

onMounted(() => {
  getUserList();
});

</script>

<style>
  .is_banned {
    background-color:red;
  }
</style>
