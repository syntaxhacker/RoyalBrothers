<template>
  <div class="specialinfocontainer">
    <ul>
      <a href="/">
        <li>Tarrif</li>
      </a>
      <a href="/">
        <li>Package</li>
      </a>
      <a href="/">
        <li>Bikes</li>
      </a>
    </ul>
    <AuthButtons/>
  </div>
</template>

<script>
import AuthButtons from "@/components/AuthButtons.vue";
export default {
  name: "specialinfocontainer",
  components: { AuthButtons }
};
</script>
<style lang="scss">
.specialinfocontainer {
  * {
    color: white;
  }
  display: table;
  justify-items: center;
  align-items: center;
  grid-column: 4;

  display: grid;
  grid-template-columns: 1fr 0.5fr;
  padding: 1em 1em 1em 0;
  ul {
    display: inline-flex;
    @media screen and (max-width: 800px) {
      display: none;
    }
    li {
      padding: 0 2em;
      letter-spacing: 1px;
    }
    a:last-child {
      li:after {
        display: block;
        content: " ";
        background-image: url(https://image.flaticon.com/icons/svg/25/25623.svg);
        background-size: 10px 10px;
        float: right;
        margin: 2px 5px;
        height: 10px;
        width: 10px;
      }
    }
  }
}
</style>