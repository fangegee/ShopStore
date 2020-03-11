<template>
  <div class="footer">
    <div class="nav-footer">
      <div class="every-one" @click="menuClick(1,'/')">
        <div class="image">
          <img v-if="menuindex!=1" src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01r9b6Is2JJi03O9NIZ_!!2053469401.png" alt="">
          <img v-if="menuindex==1" src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01KSFWLZ2JJi03O9qRL_!!2053469401.png" alt="">
        </div>
        <span>首页</span>
      </div>
      <div class="every-one" @click="menuClick(2,'/ninepost')">
        <div class="image">
          <img v-if="menuindex!=2" src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN013yG5QP2JJi03O7y0g_!!2053469401.png" alt="">
          <img v-if="menuindex==2" src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01sIr8QA2JJhzz3Tl0L_!!2053469401.png" alt="">
        </div>
        <span>9.9包邮</span>
      </div>
      <div class="every-one" @click="menuClick(3,'/classify')">
        <div class="image">
          <img v-if="menuindex!=3" src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01y7Zf2P2JJhzy6yoiY_!!2053469401.png" alt="">
          <img v-if="menuindex==3" src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01jK9ePM2JJi01iku5H_!!2053469401.png" alt="">
        </div>
        <span>分类</span>
      </div>
      <div class="every-one" @click="menuClick(4)">
        <div class="image">
          <img v-if="menuindex!=4" src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01orfBdN2JJi05nfqQS_!!2053469401.png" alt="">
          <img v-if="menuindex==4" src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN015eeSy12JJi05N1rfu_!!2053469401.png" alt="">
        </div>
        <span>收藏</span>
      </div>
      <div class="every-one" @click="menuClick(5)">
        <div class="image">
          <img v-if="menuindex!=5" src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01xDwS5c2JJi00sUiUh_!!2053469401.png" alt="">
          <img v-if="menuindex==5" src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN015eeSy12JJi05N1rfu_!!2053469401.png" alt="">
        </div>
        <span>我的</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      menuindex: 1
    };
  },

  methods: {
    menuClick: function(index, address) {
      // this.$router.push(address).catch(error => error);
      this.menuindex = index;
      this.$router.push(address).catch(error => error);
    }
  }
};
</script>
<style lang="scss" scoped>
.footer {
  padding: 0 10px;
  border: 1px solid #f5f5f5;
  background-color: #fff;
  z-index: 9999;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;

  .nav-footer {
    display: flex;
    justify-content: space-between;
    .every-one {
      width: 20%;
      padding-left: 3%;
      .image {
        width: 24px;
        height: 24px;
        img {
          width: 100%;
        }
      }
      span {
        color: #666;
        font-size: 12px;
        text-align: center;
      }
    }
  }
}
</style>