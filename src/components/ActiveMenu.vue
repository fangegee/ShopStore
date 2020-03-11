<template>
  <div class="active-menu">
    <div class="every-one" v-for="(item,index) of menuList" :key="index">
      <div class="image">
        <img :src="item.address" alt="">
      </div>
      <p>{{item.name}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['menuList']
};
</script>
<style lang="scss" scoped>
.active-menu {
  padding: 10px 0 0 0;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: (100%-97%);
  // margin: 0 2% 0 2%;
  width: 100%;
  height: 160px;
  .every-one {
    width: 20%;
    height: 66px;
    .image {
      margin: 0 auto;
      width: 50px;
      height: 50px;
      img {
        width: 100%;
      }
    }
    p {
      color: #333;
      font-size: 12px;
      text-align: center;
    }
  }
}
</style>