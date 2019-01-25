<template>
  <div id="app">
    <router-view>
      <Home/>
      <Signup/>
      <Login/>
    </router-view>
  </div>
</template>


<script>
import Home from "@/views/Home.vue";
import Signup from "@/views/Signup.vue";
import Login from "@/views/Login.vue";
export default {
  name: "app",
  components: {
    Home,
    Signup,
    Login
  }
};
</script>

<style lang="scss" src="./global.scss">
</style>
