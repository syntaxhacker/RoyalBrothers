<template>
  <button class="authbtn">
    <router-link to="/signup">
      <span>Sign Up</span>
    </router-link>
    <span style="padding:0 0.3em">|</span>
    <router-link to="/login">
      <span>Log In</span>
    </router-link>
  </button>
</template>
<script>
export default {
  name: "authbtn"
};
</script>
<style lang="scss" scoped>
.authbtn {
  background-color: transparent;
  border: white 2px solid;
  color: white;
  width: 11rem;
  height: 3rem;
  cursor: default;
  text-align: center;
  outline: none;
  text-decoration: none;
  font-size: 1em;
  span {
    padding: 0.4rem;
    font-weight: bold;
  }
  // a:hover {
  //   opacity: 0.8;
  //   animation: opacity 0.3s ease-in-out;
  // }

  @media screen and (max-width: 600px) {
    width: 12rem;
  }
}
</style>
