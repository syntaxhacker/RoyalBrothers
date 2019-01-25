<template>
  <div class="refer">
    <h1>
      {{ headerText }}
      <span>{{ number }}</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: "refer",
  props: ["headerText", "number"]
};
</script>


<style lang="scss" scoped>
.refer {
  width: 100vw;
  padding: 1%;
  padding-right: 3em;
  height: 1em;
  background-color: #343434;

  h1 {
    float: right;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    padding: 0 4rem 0 0;
    color: white;
  }
}
</style>
