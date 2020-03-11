<template>
  <div class="box">
    <div class="product-box" v-for="(item,index) in productList" :key="index">
      <div class="image">
        <img :src="item.pic" alt="">
      </div>
      <div class="detail-txt">
        <span v-if="item.tmall=true" class="tmail"></span>
        <span class="txt">{{item.dtitle}}</span>
      </div>
      <div class="pic-box">
        <p class="pic">
          <span class="quan" v-if="item.beforePriceLabelType==3"></span>
          <span class="quan1" v-if="item.beforePriceLabelType==2"></span>
          券后
          <span class="rmb-logo">￥</span>
          <span class="pic-num">{{item.jiage}}</span>
          <span class="limit-time" v-if="item.huodongType==3">
            限时价
            <span></span>
          </span>
        </p>
      </div>
      <div class="store">
        <span class="qijian" v-if="item.labelTwo">{{item.labelTwo}}</span>
        <span class="baokuan" v-if="item.labelOne">{{item.labelOne}}</span>
        <span class="quan">
          <span>券</span>
          {{item.quanJine}}元
        </span>
      </div>
      <div class="sale">
        <p>
          已售
          <span class="sale-num">{{(item.xiaoliang/10000).toFixed(1)}}万</span>
          <span class="cale">|</span>
          评价
          <span class="comment">{{(item.comment/10000).toFixed(1)}}万</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['productList']
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .product-box {
    padding: 0 0 10px 0;
    margin-left: 1%;
    margin-bottom: 10px;
    background-color: #fff;
    width: 48%;
    border-radius: 10px;
    .image {
      width: 173px;
      // height: 173px;
      margin: 0 auto;
      img {
        width: 100%;
        border-radius: 10px;
      }
    }
    .detail-txt {
      font-size: 10px;
      font-weight: 400;
      color: #666;
      .tmail {
        display: inline-block;
        background-image: url(https://cmsstatic.ffquan.cn/wap_new/common/images/tm.png?v=2020-02-27);
        background-size: 23px 13px;
        background-repeat: no-repeat;
        background-position: center;
        min-width: 23px;
        height: 13px;
        border-radius: 2px;
        margin-right: 3px;
      }
      .txt {
        font-size: 13px;
        font-weight: 400;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        align-items: center;
        line-height: 20px;
      }
    }
    .pic-box {
      .pic {
        font-size: 12px;
        color: #666;
        // line-height: 12px;
        .quan,
        .quan1 {
          display: inline-block;

          width: 12px;
          height: 12px;
          background-size: 100%;
          margin-right: 3px;
          // position: relative;
          top: 2px;
          vertical-align: middle;
        }
        .quan {
          background-image: url(https://cmsstatic.ffquan.cn/wap_new/common/images/juhuasuan.png?v=2020-02-27);
        }
        .quan1 {
          background-image: url(https://cmsstatic.ffquan.cn/wap_new/common/images/qiang.png?v=2020-02-27);
        }
        .rmb-logo {
          font-size: 12px;
          font-weight: 500;
          color: #ff2b22;
          margin-left: 1px;
        }
        .pic-num {
          font-size: 19px;
          font-weight: 500;
          color: #ff2b22;
        }
        ///范格格不会的地方
        .limit-time {
          position: relative;
          z-index: 1;
          zoom: 1;
          font-size: 9px;
          font-weight: 400;
          color: #fff;
          background: linear-gradient(150deg, #fe3a33 0, #fb8d2c 100%);
          line-height: 12px;
          padding: 0 3px;
          margin-left: 5px;
          top: -2px;
          display: inline-block;
          height: 12px;
          span {
            position: absolute;
            zoom: 1;
            left: -4px;
            top: 0;
            width: 0;
            height: 0;
            z-index: -1;
            border-color: #f8403a transparent transparent;
            border-width: 6px 8px;
            border-style: solid;
            transform: rotate(0);
          }
        }
      }
    }
    .store {
      .qijian,
      .baokuan {
        height: 12px;
        border-radius: 2px;
        border: 1px solid;
        font-size: 9.5px;
        font-weight: 400;
        color: #ff0137;
        padding: 0 3px;
        margin-right: 5px;
        display: inline-block;
        line-height: 14px;
        vertical-align: middle;
      }
      .baokuan {
        border-color: rgba(245, 114, 36, 0.7);
        color: #f57223;
      }
      .quan {
        height: 14px;
        background: linear-gradient(90deg, #ff8873 0, #ff4f4f 100%);
        border-radius: 2px;
        padding: 0 5px 0 1px;
        font-size: 9.5px;
        font-weight: 400;
        color: #fff;
        line-height: 16px;
        display: inline-block;
        position: relative;
        z-index: 1;
        zoom: 1;
        top: 0;
        vertical-align: middle;
        span {
          height: 10px;
          background: #fff;
          border-radius: 1px 0 0 1px;
          font-size: 10px;
          color: #fe3a33;
          margin: auto 5px auto 0;
          min-width: 12px;
          max-width: 12px;
          min-height: 12px;
          max-height: 12px;
          display: inline-block;
          line-height: 14px;
          text-align: center;
          vertical-align: middle;
        }
      }
    }
    .sale {
      p {
        font-size: 10px;
        font-weight: 400;
        color: #888;

        .cale {
          display: inline-block;
          width: 1px;
          font-weight: 100;
          background: #888;
          margin: 0 5px;
        }
      }
    }
  }
}
</style>