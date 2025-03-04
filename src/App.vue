<template>
  <div>
    <HeaderComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/section/HeaderComponent.vue";
import FooterComponent from "./components/section/FooterComponent.vue";

export default {
  name: "App",

  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(13 36 56);
  color: aliceblue;
}
</style>
