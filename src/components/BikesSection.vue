<template>
  <div class="bikescontainer" style="
background-color: #f3f3f3;">
    <h1 class="heading">OUR FLEET</h1>
    <div class="bikesshowcase">
      <div v-for="(row , index)  in bikes" :key="row.id" :class="`bikeshowcaserow row${index}`">
        <BikeDetails v-for="bike in row.data" :key="bike.id" :bike="bike"/>
      </div>
      <div class="more">
        <h2>See More</h2>
        <img :src="downarrowsvg" alt="downsvg">
      </div>
    </div>
  </div>
</template>
<script>
import BikeDetails from "@/components/BikeDetails.vue";
export default {
  name: "bikescontainer",
  props: ["bikes", "downarrowsvg"],
  components: { BikeDetails }
};
</script>
<style lang="scss" scoped>
.bikesshowcase {
  position: relative;
  margin: 0em 5em;
  box-shadow: -2px 27px 86px -29px rgba(0, 0, 0, 0.75);
  .more {
    position: absolute;
    bottom: 10%;

    padding: 1%;
    cursor: pointer;
    right: 5%;

    h2 {
      float: left;
      font-size: 1.3em;
      padding-right: 0.5em;
      font-weight: 600;
    }
    img {
      width: 2rem;
      float: right;
    }
  }

  .bikeshowcaserow {
    background-color: white;
    border-bottom: rgb(254, 204, 0) 5px solid;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1em;
  }
}
@media screen and (max-width: 600px) {
  .bikesshowcase {
    .more {
      bottom: -1%;
      background-color: white;
      padding: 1.3rem 3rem;
      right: 35%;
    }
  }
  .bikeshowcaserow {
    grid-template-columns: none !important;
  }
  .bike {
    border-bottom: #fecc00 5px solid;
  }
  .row0,
  .row1 {
    display: none !important;
  }
}
</style>
