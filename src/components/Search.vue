<template>
  <div class="search">
    <a href="#">
      <div class="search-box">
        <span class="placeholder">
          <i class="icon iconfont icon-search"></i>
          输入商品名或粘贴宝贝标题搜索
        </span>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  data: () => {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.search {
  padding-left: 10px;
  .search-box {
    background-color: #fff;
    width: 100%;
    height: 32px;
    border-radius: 20px;
    padding-left: 10px;
    // border: 1px solid #333;
    .placeholder {
      // height: .32rem;
      font-size: 13px;
      color: #999;
      line-height: 32px;
      display: inline-block;
      padding-left: 16px;
    }
  }
}
</style>