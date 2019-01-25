<template>
  <div class="sponserscontainer">
    <a
      v-for="sponser in sponsers"
      :key="sponser.id"
      :href="sponser.articleurl"
      target="_blank"
      style="cursor:pointer;"
    >
      <img :src="sponser.logo" :alt="sponser.name">
    </a>
  </div>
</template>
<script>
export default {
  name: "sponserscontainer",
  props: ["sponsers"]
};
</script>
<style lang="scss" scoped>
.sponserscontainer {
  padding: 3em;
  background-color: #f3f3f3;
  img {
    width: 15em;
    max-width: 20em;
    height: auto;
    padding-left: 3em;
    vertical-align: middle;
  }

  @media screen and (max-width: 350px) {
    padding: 5em 0em 3em 5em;
  }
}
</style>
