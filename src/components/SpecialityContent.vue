<template>
  <section class="specialtynum">
    <div class="specialtycontent">
      <h1 style="font-size: 2.7rem;font-weight:bold;color:#FECC00;">{{ addNum }}</h1>
      <h2 style="padding: 2% 0 0 5%;line-height: 1.4;">{{specialty.content}}</h2>
    </div>
    <p class="specialtydescription" style="opacity: 0.8;line-height: 1.3;">{{specialty.description}}</p>
  </section>
</template>
<script>
export default {
  name: "specialtynum",
  props: ["value", "specialty"],
  computed: {
    addNum() {
      return this.value + 1;
    }
  }
};
</script>
<style lang="scss" scoped>
.specialtynum {
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 3%;
  &:hover {
    box-shadow: 2px 17px 81px -22px rgba(0, 0, 0, 0.75);

    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }
}

.specialtycontent {
  display: grid;
  grid-template-columns: 0.1fr 2fr;
  h2 {
    padding-top: 1%;
    font-weight: bold;
  }
}
</style>
