<template>
  <div class="mainlogo">
    <a href="/">
      <img :style="getLogoStyle" src="https://i.imgur.com/xVGADz5.png" alt="logo">
      <h1 :style="getNameStyle">
        <span :style="nameone">Royal</span>Brothers
      </h1>
    </a>
  </div>
</template>
<script>
export default {
  name: "mainlogo",
  props: ["logostyle", "namestyle", "nameone"],
  computed: {
    getNameStyle() {
      return this.namestyle;
    },
    getLogoStyle() {
      return this.logostyle;
    },
    getFirstNameStyle() {
      return this.nameone;
    }
  }
};
</script>
<style lang="scss" scoped>
img {
  height: auto;
}

.mainlogo {
  a {
    display: grid;
    grid-template-columns: 0.1fr 1fr;
    padding: 1%;
  }
  padding-top: 0.3rem;
}
</style>
