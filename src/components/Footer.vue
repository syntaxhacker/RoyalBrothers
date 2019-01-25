<template>
  <div class="footercontainer">
    <Logo
      :logostyle="logostyleinfooter"
      :namestyle="namestyleinfooter"
      :nameone="nameonestyleinfooter"
    />
    <div class="linkscontainer">
      <LinkList v-for="link in links" :key="link.id" :link="link"/>
    </div>
    <h1 style="opacity: 0.7;">copyright Lorem, ipsum dolor.</h1>
  </div>
</template>
<script>
import Logo from "@/components/Logo.vue";
import LinkList from "@/components/LinkList.vue";

export default {
  name: "footercontainer",
  components: { Logo, LinkList },
  data() {
    return {
      logostyleinfooter: {
        width: "9em"
      },
      namestyleinfooter: {
        display: "grid",
        fontSize: "2.5rem",
        paddingTop: "1rem",
        fontWeight: "bold",
        color: "#000"
      },
      nameonestyleinfooter: {
        color: "#F7CD46"
      },
      links: [
        {
          heading: "COMPANY",
          eachlink: [
            {
              name: "FAQ",
              url: "/"
            },
            {
              name: "Privacy Policy",
              url: "/"
            },
            {
              name: "Terms & Conditions",
              url: "/"
            }
          ]
        },
        {
          heading: "COMPANY2",
          eachlink: [
            {
              name: "FAQ2",
              url: "/"
            },
            {
              name: "Privacy Policy2",
              url: "/"
            },
            {
              name: "Terms & Conditions2",
              url: "/"
            }
          ]
        },
        {
          heading: "COMPANY3",
          eachlink: [
            {
              name: "FAQ3",
              url: "/"
            },
            {
              name: "Privacy Policy3",
              url: "/"
            },
            {
              name: "Terms & Conditions3",
              url: "/"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.footercontainer {
  display: grid;
  grid-template-columns: 50% 50%;
  background-color: #363636;
  padding: 1% 10%;
  .linkscontainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2em;
  }

  h1 {
    text-align: center;
    font-size: 1rem;
    letter-spacing: 2px;
    padding: 2em 0;
    color: white;
    font-weight: 100;
    grid-column: span 2;
  }
}

@media screen and (max-width: 600px) {
  .footercontainer {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    padding: 1% 1%;
    .linkscontainer {
      padding: 1em 3em;
    }
    h1 {
      grid-column: auto;
    }
  }
}
</style>
