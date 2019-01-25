<template>
  <div class="top">
    <Logo
      :logostyle="logostyleinheader"
      :namestyle="namestyleinheader"
      :nameone="nameonestyleinheader"
    />
    <LocationChanger :downarrowsvg="downarrowsvg" location="Bikes in tirupati"/>
    <SpecialInfo/>
  </div>
</template>
<script>
import Logo from "@/components/Logo.vue";
import LocationChanger from "@/components/LocationChanger.vue";
import SpecialInfo from "@/components/SpecialInfo.vue";
export default {
  name: "top",
  props: ["downarrowsvg"],
  components: { Logo, LocationChanger, SpecialInfo },
  data() {
    return {
      logostyleinheader: {
        width: "4em"
      },
      namestyleinheader: {
        display: "grid",
        fontSize: "1.5rem",
        paddingTop: "0.6rem",
        color: "white"
      },
      nameonestyleinheader: {
        color: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.top {
  height: 5rem;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.7fr 1.5fr;
  @media screen and (max-width: 600px) {
    grid-template-columns: 0.5fr 1fr 0.2fr 1.5fr;
  }
}
</style>
