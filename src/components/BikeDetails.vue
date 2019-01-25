<template>
  <div class="bike">
    <h1 class="bikename">{{bike.name}}</h1>
    <img :src="bike.bikeimg" :alt="bike.name">
  </div>
</template>
<script>
export default {
  name: "bike",
  props: ["bike"]
};
</script>
<style lang="scss" scoped>
.bike {
  position: relative;
  text-align: center;
  overflow: hidden;
  h1 {
    color: black;
    font-weight: bold;
    letter-spacing: 1.1px;
    position: absolute;
    top: 15%;
    left: 25%;
    @media screen and (max-width: 600px) {
      left: 35%;
    }
  }
}
</style>
