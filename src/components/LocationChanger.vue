<template>
  <div class="geocontainer">
    <button>
      <h1>
        {{ location }}
        <span>
          <img
            style="    width: 0.8em;"
            :src="downarrowsvg"
            alt="downsvg"
          >
        </span>
      </h1>
    </button>
  </div>
</template>
<script>
export default {
  name: "geocontainer",
  props: ["location" , "downarrowsvg"]
};
</script>
<style lang="scss" scoped>
.geocontainer {
  display: inline-grid;
  justify-items: center;
  align-items: center;

  * {
    color: white;
  }

  button {
    color: white;
    background-color: transparent;
    outline: none;
    border: none;
    padding: 0.2em;
    h1 {
      font-size: 1rem;
    }
  }
}
</style>
