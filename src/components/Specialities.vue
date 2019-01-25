<template>
  <div class="specialitiescontainer">
    <h1 class="heading">OUR SPECIALITY</h1>
    <div class="specialities">
      <SpecialityContent
        v-for="(specialty , index) in specialities"
        :key="specialty.id"
        :value="index"
        :specialty="specialty"
      />
    </div>
  </div>
</template>
<script>
import SpecialityContent from "@/components/SpecialityContent.vue";
export default {
  name: "specialitiescontainer",
  props: ["specialities"],
  components: { SpecialityContent }
};
</script>
<style lang="scss" scoped>
.specialitiescontainer {
  height: 100%;
  background-color: white;
}
.specialities {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  padding: 2em 5em 6em 5em;
  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
