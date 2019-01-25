<template>
  <div class="externallinks">
    <p>{{link.heading}}</p>
    <ul>
      <li>
        <a :href="link.eachlink[0].url" target="_blank">{{ link.eachlink[0].name }}</a>
      </li>
      <li>
        <a :href="link.eachlink[1].url" target="_blank">{{ link.eachlink[1].name }}</a>
      </li>
      <li>
        <a :href="link.eachlink[2].url" target="_blank">{{ link.eachlink[2].name }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "externallinks",
  props: ["link"]
};
</script>
<style lang="scss" scoped>
.externallinks {
  * {
    color: white;
  }
  p {
    font-size: 2rem;
    padding: 1em 0 0.3em 0;
  }
  ul {
    li {
      padding-top: 5px;
      line-height: 1.2;

      a {
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>