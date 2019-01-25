<template>
  <div class="ratingschildcontainer">
    <a
      class="ratingbutton"
      v-for="rating in ratingsObjCopy"
      :key="rating.id"
      :href="rating.url"
      target="_blank"
    >
      <button type="button">
        <span style="font-size: 2rem;">{{ rating.number }}</span>
        <br>
        <span>{{ rating.title }}</span>
        <img :src="rating.symbol">
      </button>
    </a>
  </div>
</template>
<script>
export default {
  name: "ratingbutton",
  props: ["ratingsObjCopy"]
};
</script>
<style lang="scss" scoped>
.ratingschildcontainer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  grid-gap: 2em;
}

.ratingbutton {
  button {
    background-color: black; 
    border: none;
    color: white;
    width: 12rem;
    height: 5rem;
    text-align: center;
    outline: none;
    text-decoration: none;
    display: inline-block;
    font-size: 1em;
    box-shadow: 3px 6px 20px -1px rgba(0, 0, 0, 0.75);
  }
}
button {
  position: relative;
  img {
    width: 1em;
    position: absolute;
    top: 20%;
    right: 30%;
  }
}
</style>
