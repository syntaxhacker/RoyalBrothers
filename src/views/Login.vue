<template>
  <div class="login">
    <Referral headerText="Refer your Friends" number="99999999999"/>
    <Header :downarrowsvg="downarrowsvg"/>
    <h1>Awesome Login page!</h1>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Referral from "@/components/Referral.vue";
export default {
  name: "login",
  components: { Header, Referral },
  data() {
    return {
      downarrowsvg: "https://image.flaticon.com/icons/svg/25/25623.svg"
    };
  }
};
</script>