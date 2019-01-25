<template>
  <div class="ratings">
    <!-- <h1 v-for="rating in ratingsObj" :key="rating.id">{{rating.number}}</h1> -->
    <RatingButton :ratingsObjCopy="ratingsObj"/>
  </div>
</template>
<script>
import RatingButton from "@/components/RatingButton.vue";

export default {
  name: "ratings",
  props: ["ratingsObj"],
  components: { RatingButton }
};
</script>
<style lang="scss" scoped>
.ratings {
  padding: 2em 3em 2em 5em;
  background-color: #f3f3f3;
}
</style>
