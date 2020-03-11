<template>
  <div id="app">

    <!-- <router-view v-if="isRouterAlive" /> -->
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from './components/Footer.vue';
export default {
  components: {
    Footer
  },
  // provide() {
  //   return {
  //     reload: this.reload
  //   };
  // },
  data() {
    return {
      // isRouterAlive: true
    };
  },
  methods: {
    // reload() {
    //   this.isRouterAlive = false;
    //   this.$nextTick(() => (this.isRouterAlive = true));
    // }
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
<style lang="scss" scope>
#app {
}
</style>
