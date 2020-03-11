<template>
  <div class="banner-git">
    <img :src="GIF.address" alt="">
  </div>
</template>
<script>
export default {
  props: ['GIF']
};
</script>
<style lang="scss" scoped>
.banner-git {
  margin-left: (100%-95%)/2;
  width: 95%;
  height: 89px;
  img {
    width: 100%;
    border-radius: 10px;
  }
}
</style>