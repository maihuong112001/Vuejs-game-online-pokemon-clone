<template>
  <div class="wrapper">
    <header-only />
    <router-view />
    <p class="copyright">This game online</p>
  </div>
</template>

<script>
import HeaderOnly from "./components/Header.vue";

export default {
  name: "App",
  components: {
    HeaderOnly,
  },
};
</script>

<style lang="scss" scoped>
* {
  width: 100%;
  box-sizing: border-box;
}
.wrapper {
  width: 100%;
  text-align: center;
}
.copyright {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1.5rem;
  color: rgb(64, 223, 91);
  z-index: 3;
  font-size: 1.5rem;
}
</style>
