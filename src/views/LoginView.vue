<template>

  <div class="d-flex justify-content-center align-items-center w-100 h-100">
    <form action="" @submit.prevent="login">
      <h3 class="text-center mb-4">Login Page</h3>

      <div class="mb-2">
        <input type="text" name="id" v-model="user.id" class="form-control">
      </div>
      <div class="mb-2">
        <input type="password" name="pw" v-model="user.pw" class="form-control">
      </div>

      <div class="text-end">
        <button type="submit" class="btn btn-success">Login</button>
      </div>

    </form>
  </div>

</template>

<script>
import {setAuth} from "@/utils/auth";

export default {
  name: "LoginView",
  data() {
    return {
      user: {
        id: "",
        pw: "",
      }
    }
  },
  methods: {
    login() {
      setAuth({token: 'test_token', name: 'test user name'});
      this.$router.push({name: 'index'});
    }
  }
}
</script>

<style scoped>

</style>