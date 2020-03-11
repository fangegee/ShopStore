<template>
  <div class="bg">
    <!-- 头部 -->
    <div class="header">
      <div class="go-back">
        <i class="icon iconfont icon-back"></i>
      </div>
      <div class="image">
        <img src="https://cmsstatic.ffquan.cn//web/nine_special/images/nine_title.svg?v=202002291254" alt="">
      </div>
      <div class="show-menu">
        <i class="icon iconfont icon-checkmore"></i>
      </div>
    </div>
    <div class="title-banner">
      <ul class="banner-box">
        <li class="item"></li>
      </ul>
    </div>
    <div class="nav-menu">
      <ul class="menu-box">
        <li><span>精选</span></li>
        <li><span>居家百货</span></li>
        <li><span>美食</span></li>
        <li><span>服装</span></li>
        <li><span>配饰</span></li>
        <li><span>美妆</span></li>
        <li><span>内衣</span></li>
        <li><span>母婴</span></li>
        <li><span>箱包</span></li>
        <li><span>数码配件</span></li>
        <li><span>文娱车品</span></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  components: {}
};
</script>
<style lang="scss" scoped>
.bg {
  background-color: #f5f5f5;

  .header {
    width: 100%;
    height: 44px;
    background: linear-gradient(270deg, #fe3c35 0, #ff1f4c 100%);
    padding: 8px 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .go-back {
      .icon-back {
        color: #fff;
        font-size: 28px;
      }
    }
    .image {
      width: 65px;
      img {
        width: 100%;
      }
    }
    .show-menu {
      .icon-checkmore {
        color: #fff;
        font-size: 28px;
      }
    }
  }

  .nav-menu {
    // padding: 0px 10px;
    width: 100%;
    overflow: auto;
    .menu-box {
      list-style: none;
      display: flex;
      // justify-content: space-between;
      li {
        white-space: nowrap;
        // padding: 0 5px;
        margin: 0 5px;
        // span {
        // }

        &:first-child {
          border-bottom: 2px solid red;
        }
      }

      
    }
  }
}
</style>