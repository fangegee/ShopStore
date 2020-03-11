<template>
  <div class="Swiper-four">
    <el-carousel indicator-position=none height="218px">
      <el-carousel-item>
        <div v-for="(item,index) in swiperFourList.slice(0,4)" :key="index">
          <div class="content">
            <div class="image">
              <img :src="item.pic" alt="">
            </div>
            <div class="pic">
              <span class="discount">￥{{item.price}}</span>
              <span class="original">￥{{item.orginPrice}}</span>
            </div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div v-for="(item,index) in swiperFourList.slice(4,8)" :key="index">
          <div class="content">
            <div class="image">
              <img :src="item.pic" alt="">
            </div>
            <div class="pic">
              <span class="discount">￥{{item.price}}</span>
              <span class="original">￥{{item.orginPrice}}</span>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  props: ['swiperFourList']
};
</script>
<style lang="scss" scoped>
.Swiper-four {
  .el-carousel__item {
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    .content {
      padding-left: 5px;
      width: 45%;
      height: 97px;
      .image {
        width: 72px;
        // height: 72px;
        img {
          width: 100%;
        }
      }
      .pic {
        height: 16px;
        .discount {
          color: #ff3b32;
          font-size: 12px;
        }
        .original {
          padding-left: 5px;
          color: #999;
          font-size: 12px;
          text-decoration: line-through;
        }
      }
    }
  }
}
</style>