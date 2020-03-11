<!-- 主页 -->
<template>
  <div class="home">
    <div class="big-bg-box">
      <div class="big-bg" :style="{background:bannerColorList[bgIndex]}">
        <div class="header">
          <!-- 搜索框 -->
          <div class="left">
            <Search></Search>
          </div>
          <div class="right">
            <i class="el-icon-chat-dot-round"></i>
            <p>消息</p>
          </div>
        </div>
        <!-- 导航菜单 -->
        <div class="nav-menu">
          <div class="limit-menu">
            <div class="first common"><span>精选</span></div>
            <div class="two common"><img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01pJtNbF2JJhzzCaYfv_!!2053469401.png" alt=""></div>
            <div class="two common"><img src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01RgxmPL2JJi07EGMzS_!!2053469401.png" alt=""></div>
          </div>
          <div class="menuList">
            <div class="menu-all" v-for="(item,index) in menuList" :key="index">
              <span>{{item.name}}</span>
            </div>
          </div>
          <div class="menu-more">
            <i class=" el-icon-s-unfold"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- 首页轮播 -->
    <div class="slideshow-bg-box">
      <!-- this.$store.getters.countAdd -->
      <div class="slideshow-bg" :style="{background:bannerColorList[bgIndex]}">
        <el-carousel height="140px">
          <el-carousel-item v-for="(imgitem,index) in sildeList" :key="index">
            <img :src="imgitem.pic" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!-- 主要内容 -->
    <div class="main-content">
      <!-- 活动板块动图 -->
      <div>
        <BannerGif :GIF='bannerGif'></BannerGif>
      </div>
      <!-- 活动菜单列表 -->
      <div class="activeMenu-box">
        <div>
          <ActiveMenu :menuList='activeMenuList'></ActiveMenu>
        </div>

        <!-- 纵向滚动条 -->
        <div class="swiper-diretion">
          <div class="image">
            <img :src="headline" alt="">
          </div>
          <div class="swiper-txt">
            <el-carousel height="40px" direction="vertical" :autoplay="true">
              <el-carousel-item v-for="(diretionItem,index) in diretionList" :key="index">
                <div class="diretion">
                  <p class="txt">
                    <span class="tag">{{diretionItem.tag}}</span>
                    {{diretionItem.name}}
                  </p>
                  <i class="icon iconfont icon-next"></i>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <!-- 商品4杀滚动 -->
        <!-- <div class="big-recimmend">
          <div class="left">
            <div class="left-header">
              <span class="left-title">咚咚抢</span>
              <span class="time"><span class="timer-down">{{timerDone.field}}</span>
                {{countTimer}}
              </span>
            </div>
            <SwiperFour :swiperFourList='swiperFourList'></SwiperFour>
          </div>
          <div class="right">
            <div v-for="(rightitem,index) in rightBanner" :key="index">
              <img :src="rightitem.address" alt="">
            </div>
          </div>
        </div> -->

        <!-- 抗击疫情 -->
        <div class="fighting">
          <BannerGif :GIF='bannerGif2'></BannerGif>
          <div class="fighting-box">
            <div class="every-gif" v-for="(gifList,index) in bannerGifList1" :key="index">
              <BannerGif :GIF='gifList'></BannerGif>
            </div>
          </div>
        </div>
      </div>
      <!-- 发现 -->
      <div class="product-list">
        <div class="product-nav">
          <div @click="isProduct()" :class="{'active':isActive}">发现<p> <span>推荐好货</span></p>
          </div>
          <div @click="isProduct()" :class="{'active':!isActive}">精选<p> <span>猜你喜欢</span> </p>
          </div>
        </div>
        <!-- //发现 -->
        <div class="product-cpn" v-if="isActive">
          <ProductList :productList='productList'></ProductList>
          <infinite-loading @infinite="infiniteHandlerFind"></infinite-loading>
        </div>
        <!-- //精选 -->
        <div class="product-cpn" v-if="!isActive">
          <ProductList :productList='productChioceList'></ProductList>
          <infinite-loading @infinite="infiniteHandlerChioce"></infinite-loading>
        </div>
      </div>
    </div>

    <!-- 页面主菜单 -->
    <div style="height:200px;width:100%;background:lightblue"></div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Search from '../components/Search.vue';
// import Footer from '../components/Footer.vue';
import ActiveMenu from '../components/ActiveMenu.vue';
// import SwiperFour from '../components/SwiperFour.vue';
import BannerGif from '../components/BannerGif.vue';
import ProductList from '../components/ProductList.vue';
import InfiniteLoading from 'vue-infinite-loading';

// @ is an alias to /src

export default {
  components: {
    Search,
    // Footer,
    ActiveMenu,
    // SwiperFour,
    BannerGif,
    ProductList,
    InfiniteLoading
  },
  // inject: ['reload'],
  data: () => {
    return {
      menuList: [], //菜单列表
      sildeList: [], //轮播列表
      bannerColorList: [], //背景色列表
      bannerGif: {}, //广告动图
      activeMenuList: [], //活动菜单列表
      headline: '', //优惠头条.png,
      diretionList: [], //纵向滚动条列表
      // swiperFourList: [], //商品4杀滚动
      // timerDone: {}, //秒杀倒计时
      // rightBanner: [], //右侧banner
      // countTimer: {
      //   h: '',
      //   min: '',
      //   s: ''
      // }, //倒计时
      bannerGif2: {},
      bannerGifList1: {},
      countTimer: '', //倒计时
      bgIndex: 0, //
      productList: [],
      pageFind: 1,
      pageChioce: 1,
      productChioceList: [],
      isActive: true
    };
  },
  mounted: function() {
    // 菜单列表数据
    this.$axios
      .get('api/category/get-category-list')
      .then(({ data }) => {
        this.menuList = data.data;
        // console.log(this.menuList);
      })
      .catch(error => {
        console.log(error);
      });
    //首页轮播图数据
    this.$axios
      .get('api/category/product/model-detail-by-model-id-new', {
        params: {
          entityId: 4,
          modelId: -1,
          proModelId: 1,
          source: 3,
          version: 'v1',
          tuserId: 1123637,
          isWechat: 0
        }
      })
      .then(({ data }) => {
        this.sildeList = data.data.config;
        this.sildeList.map(ele => {
          this.bannerColorList.push(ele.bannerColor);
        });
        setInterval(() => {
          this.bgIndex >= 4 ? (this.bgIndex = 0) : this.bgIndex++;
        }, 3000);
      })
      .catch(error => {
        console.log(error, 'error');
      });
    //banner-git数据
    this.$axios
      .get('api/category/product/model-detail-by-model-id-new', {
        params: {
          entityId: 4,
          modelId: 15936,
          proModelId: 19,
          source: 3,
          version: 'v1',
          tuserId: 1123637,
          isWechat: 0
        }
      })
      .then(({ data }) => {
        this.bannerGif = data.data.config[0];
        // console.log(this.bannerGif);
      })
      .catch(error => {
        console.log(error, 'error');
      });
    //活动菜单列表
    this.$axios
      .get('api/category/product/model-detail-by-model-id-new', {
        params: {
          entityId: 4,
          modelId: 15937,
          proModelId: 2,
          source: 3,
          version: 'v1',
          tuserId: 1123637,
          isWechat: 0
        }
      })
      .then(({ data }) => {
        this.activeMenuList = data.data.config.data;
        // console.log(this.activeMenuList);
      })
      .catch(error => {
        console.log(error, 'error');
      });
    //纵向滚动条列表
    this.$axios
      .get('api/category/product/model-detail-by-model-id-new', {
        params: {
          entityId: 4,
          modelId: 15938,
          proModelId: 13,
          source: 3,
          version: 'v1',
          tuserId: 1123637,
          isWechat: 0
        }
      })
      .then(({ data }) => {
        this.headline = data.data.config.logo;
        this.diretionList = data.data.config.list;
        // console.log(this.diretionList);
      })
      .catch(error => {
        console.log(error, 'error');
      });
    //商品4杀滚动
    // this.$axios
    //   .get('api/category/product/model-detail-by-model-id-new', {
    //     params: {
    //       entityId: 4,
    //       modelId: 15939,
    //       proModelId: 20,
    //       source: 3,
    //       version: 'v1',
    //       tuserId: 1123637,
    //       isWechat: 0
    //     }
    //   })
    //   .then(({ data }) => {
    //     this.swiperFourList = data.data.ddqGoodsList; //轮播4个图片
    //     this.timerDone = data.data.countTime; //开场时间
    //     this.rightBanner = data.data.config; //右侧banner图片
    //     //倒计时
    //     let h = '',
    //       min = '',
    //       s = '';
    //     setInterval(() => {
    //       let newTime = new Date().getTime();
    //       this.timerchange = (data.data.countTime.time - newTime) / 1000;
    //       h = addZero(parseInt((this.timerchange / (60 * 60)) % 24));
    //       min = addZero(parseInt((this.timerchange / 60) % 60));
    //       s = addZero(parseInt(this.timerchange % 60));
    //       this.countTimer = h + ':' + min + ':' + s;
    //     }, 1000);
    //     function addZero(i) {
    //       return i < 10 ? '0' + i : i + '';
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error, 'error');
    //   });

    //抗击疫情
    this.$axios
      .get('api/category/product/model-detail-by-model-id-new', {
        params: {
          entityId: 4,
          modelId: 15940,
          proModelId: 19,
          source: 3,
          version: 'v1',
          tuserId: 1123637,
          isWechat: 0
        }
      })
      .then(({ data }) => {
        this.bannerGif2 = data.data.config[0];
        this.bannerGifList1 = data.data.config.splice(1, 4);
        // console.log(this.bannerGifList1);
      })
      .catch(error => {
        console.log(error, 'error');
      });
    // 首页弹窗
    // http://www.vlethe.com/index.php?r=index/recomd&type=2
    // 三杀轮播
    // http://cmsjapi.ffquan.cn/api/category/product/model-detail-by-model-id-new?entityId=4&modelId=15942&proModelId=16&source=3&version=v1&tuserId=1123637&isWechat=0
    // this.$axios
    //   .get('api/category/index/lingquan-live-new', {
    //     params: {
    //       pageId: 1,
    //       pageSize: 10,
    //       entityId: 4,
    //       type: 1,
    //       version: 'v1',
    //       tuserId: 1123637,
    //       isWechat: 0
    //     }
    //   })
    //   .then(({ data }) => {
    //     this.productList = data.data.list;

    //     console.log(this.productList);
    //   })
    //   .catch(error => {
    //     console.log(error, 'error');
    //   });
  },
  methods: {
    infiniteHandlerFind($state) {
      this.$axios
        .get('api/category/index/lingquan-live-new', {
          params: {
            pageId: this.pageFind,
            pageSize: 10,
            entityId: 4,
            type: 1,
            version: 'v1',
            tuserId: 1123637,
            isWechat: 0
          }
        })
        .then(({ data }) => {
          // this.productList = data.data.list;

          if (data.data.list.length) {
            this.pageFind += 1;
            this.productList.push(...data.data.list);
            $state.loaded();
          } else {
            $state.complete();
          }
          // console.log(this.productList);
        })
        .catch(error => {
          console.log(error, 'error');
        });
    },
    infiniteHandlerChioce($state) {
      this.$axios
        .get('api/goods/guess-you-like', {
          params: {
            pageId: this.pageChioce,
            pageSize: 10,
            entityId: 4,
            type: 1,
            version: 'v1',
            tuserId: 1123637,
            isWechat: 0,
            keyWords: ''
          }
        })
        .then(({ data }) => {
          // this.productChioceList = data.data;

          if (data.data) {
            this.pageChioce += 1;
            this.productChioceList.push(...data.data);

            $state.loaded();
          } else {
            $state.complete();
          }
          console.log(this.productChioceList);
        })
        .catch(error => {
          console.log(error, 'error');
        });
    },
    isProduct: function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  background-color: #f5f5f5;
  .big-bg-box {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 99999;
    .big-bg {
      // 搜索框及消息
      .header {
        display: flex;
        width: 100%;
        .left {
          padding: 10px 0 0 0;
          width: 90%;
        }
        .right {
          padding: 5px 0 0 10px;
          width: 10%;
          height: 32px;
          .el-icon-chat-dot-round {
            padding-left: 8px;
            // width: 20px;
            // height: 22px;
            font-size: 20px;
            color: #fff;
          }
          p {
            padding-left: 6px;
            color: #fff;
            font-size: 12px;
          }
        }
      }
      // 菜单列表
      .nav-menu {
        margin-top: 10px;
        width: 100%;
        display: inline-flex;
        .limit-menu {
          width: 55%;
          display: flex;
          .common {
            // align-self: center;
            padding: 0 10px 0 5px;
          }
          .first {
            width: 30px;
            line-height: 22px;
            color: #fff;
            font-size: 13px;
            font-weight: 600;

            span {
              padding-bottom: 2px;
              border-bottom: 2px solid #fff;
            }
          }
          .two {
            width: 60px;
            height: 28px;
            img {
              width: 100%;
              vertical-align: middle;
            }
          }
        }
        .menuList {
          display: flex;
          width: 35%;
          overflow: auto;
          .menu-all {
            white-space: nowrap;
            span {
              width: 50px;
              height: 22px;
              line-height: 22px;
              padding: 0 10px 0 0;
              font-size: 13px;
              color: #fff;
            }
          }
        }
        .menu-more {
          width: 10%;
          .el-icon-s-unfold {
            padding-top: 3px;
            font-size: 18px;
            color: #fff;
          }
        }
      }
    }
  }
  // 轮播
  .slideshow-bg-box {
    margin-top: 80px;
    height: 150px;
    .slideshow-bg {
      width: 100%;
      height: 100px;
      border-radius: 0 0 25px 20px;
      .el-carousel {
        .el-carousel__item {
          width: 95%;
          margin-left: (100%-95%)/2;
          img {
            width: 100%;
            border-radius: 10px;
          }
        }
        /deep/.el-carousel__button {
          display: block;
          opacity: 0.48;
          width: 10px;
          height: 2px;
          background-color: #fff;
          border: none;
        }
      }
    }
  }
  // 主要内容
  .main-content {
    // banner-gif
    // .banner-git {
    //   margin-left: (100%-95%)/2;
    //   width: 95%;
    //   height: 89px;
    //   img {
    //     width: 100%;
    //     border-radius: 10px;
    //   }
    // }
    //活动菜单列表
    .activeMenu-box {
      padding: 0 10px;
      // 纵向滚动条列表
      .swiper-diretion {
        border-top: 2px solid #f5f5f5;
        width: 100%;
        display: flex;
        .image {
          background-color: #fff;
          width: 20%;
          height: 40px;
          img {
            width: 100%;
            padding-top: 10px;
          }
        }
        .swiper-txt {
          width: 80%;
          background-color: #fff;
          .el-carousel__item {
            color: #fff;
            font-size: 14px;
            opacity: 0.75;
            line-height: 40px;
            margin: 0;
            .diretion {
              position: relative;
              padding: 0 5px 0 5px;
              .txt {
                display: inline-block;
                width: 90%;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                color: #333;
                .tag {
                  display: inline-block;
                  padding: 0 5px;
                  background: linear-gradient(90deg, #ff9676 0, #ff7913 100%);
                  border-radius: 20px;
                  font-size: 12px;
                  color: #fff;
                  line-height: 14px;
                }
              }
              .icon-next {
                position: absolute;
                right: 10px;
                color: #333;
              }
            }
          }
          /deep/.el-carousel__indicators {
            .el-carousel__button {
              width: 0;
            }
          }
        }
      }
    }
    //商品4杀滚动
    .big-recimmend {
      margin-top: 10px;
      width: 100%;
      display: flex;
      .left {
        background-color: #fff;
        border-right: 1px solid #e6e3e3;
        position: relative;
        width: 50%;
        .left-header {
          // padding-top: 10px;
          padding: 10px;
          color: #333;
          font-size: 15px;
        }
        .time {
          padding: 0 5px 0 0;
          position: absolute;
          right: 10px;
          font-size: 12px;
          color: #ff4444;
          display: inline-block;
          border: 1px solid #ff4444;
          border-radius: 20px;
          .timer-down {
            display: inline-block;
            padding: 0 5px;
            border-radius: 20px;
            background-color: #ff4444;
            color: #fff;
            // margin-right: 5px;
          }
        }
      }
      .right {
        background-color: #fff;
        width: 50%;
        // height: 235px;
        // padding: 0 0 0 10px;

        div {
          width: 170px;
          img {
            width: 100%;
          }
        }
      }
    }
    // 抗击疫情
    .fighting {
      .fighting-box {
        display: flex;
        flex-wrap: wrap;
        .every-gif {
          width: 50%;
          height: 70px;
          padding: 5px 0;
          img {
            width: 100%;
          }
        }
      }
    }
    //发现
    .product-list {
      width: 100%;

      .product-nav {
        width: 100%;
        display: flex;
        text-align: center;
        div {
          width: 50%;
          font-size: 18px;

          p {
            span {
              padding: 0 10px;
              font-size: 12px;

              border-radius: 20px;
              // width: 65px;
              // height: 16px;
              color: #666;
            }
          }
        }
        .active {
          color: #fe3a33;
          p {
            span {
              background-color: #fe3a33;
              color: #fff;
            }
          }
        }
      }
      .product-cpn {
        padding: 0 10px;
      }
      // .choice {
      //   width: 50%;
      //   font-size: 18px;
      //   // color: #fe3a33;
      //   color: #666;
      //   p {
      //     span {
      //       font-size: 12px;
      //     }
      //   }
      // }
    }
  }
}
</style>
