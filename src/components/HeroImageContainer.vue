<template>
<!-- uncommmet below lines to align svg in middle as shown in design  -->
  <!-- <div class="heroimgcontainer" style=" position: relative;"> -->
  <div class="heroimage" :style="setimg"></div>
  <!-- <img
      style="    position: absolute;
    top: 15%;
    left: 35%;
    width: 15em;"
      src="https://image.flaticon.com/icons/svg/1168/1168041.svg"
      alt="bikesvg"
  >-->
  <!-- </div> -->
</template>
<script>
export default {
  name: "heroimage",
  props: ["img"],
  computed: {
    setimg() {
      return "background-image: url(" + this.img + ")";
    }
  }
};
</script>
<style lang="scss" scoped>
.heroimage {
  height: 25em;
  background-size: cover;
  background-position: center;
}
</style>
