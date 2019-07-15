<template>
  <div class="CinemaMap-main">
    <div class="header">
      <img src="@/assets/imgs/icons/arr-left.png" alt class="back-arr" @click="$router.go(-1)">
      <span class="header-title">影院地图</span>
      <img src="@/assets/imgs/icons/search.png" @click="searchst=!searchst" alt class="search">
      <div class="search-input" v-show="searchst">
        <input type="text" placeholder="请输入影院名称" id="suggestId" name="address_detail" v-model="searchv">
        <div id="results">

        </div>
        <span @click="find">确认</span>
      </div>
    </div>
    <div id="allmap"></div>
    <div class="mySwiper-box">
      <template>
        <swiper
          class="mySwiper"
          :options="mySwiperOption"
          ref="mySwiper"
          @someSwiperEvent="callback"
        >
          <swiper-slide class="slide">
            <div class="cinema-list">
              <img src="@assets/imgs/cinema/cinema.png" alt class="cinemaImg">
              <div class="cinema-list-down">
                <div class="cinema-explain">
                  <p class="cinema-name">耀莱成龙影城（建业店）</p>
                  <div class="widget-time">
                    <div class="widget">
                      <img src="@assets/imgs/icons/share.png" alt class="share">
                      <img src="@assets/imgs/icons/phone.png" alt class="phone">
                    </div>
                    <span class="time">45min</span>
                  </div>
                </div>
                <span class="look" @click="findonly('耀莱成龙影城（建业店）')">查找</span>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="slide">
            <div class="cinema-list">
              <img src="@assets/imgs/cinema/cinema.png" alt class="cinemaImg">
              <div class="cinema-list-down">
                <div class="cinema-explain">
                  <p class="cinema-name">耀莱成龙影城（建业店）</p>
                  <div class="widget-time">
                    <div class="widget">
                      <img src="@assets/imgs/icons/share.png" alt class="share">
                      <img src="@assets/imgs/icons/phone.png" alt class="phone">
                    </div>
                    <span class="time">45min</span>
                  </div>
                </div>
                <span class="look">查找</span>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="slide">
            <div class="cinema-list">
              <img src="@assets/imgs/cinema/cinema.png" alt class="cinemaImg">
              <div class="cinema-list-down">
                <div class="cinema-explain">
                  <p class="cinema-name">耀莱成龙影城（建业店）</p>
                  <div class="widget-time">
                    <div class="widget">
                      <img src="@assets/imgs/icons/share.png" alt class="share">
                      <img src="@assets/imgs/icons/phone.png" alt class="phone">
                    </div>
                    <span class="time">45min</span>
                  </div>
                </div>
                <span class="look">查找</span>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </template>
    </div>
    <div class="footer">
      <div class="footer-line"></div>
    </div>
  </div>
</template>


<script>
import myMap from "@assets/map";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "CinemaMap",

  data() {
    return {
      mySwiperOption: {
        slidesPerView: 1.5
        // loop: true
      },
      searchst: false,
      searchv: ''
    };
  },

  methods: {
    callback() {},
    find() {
      // console.log(myMap);
      // myMap.findCinema();
      myMap.createMap(1,this.searchv);
    },
    findonly(name){
      myMap.createMap(1,name);
    }
  },

  components: {
    swiper,
    swiperSlide
  },
  created() {},
  mounted() {
    myMap.createMap(0);
  }
};
</script>

<style lang='scss' scoped>
.header {
  height: 60px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: rgba(51, 54, 61, 1);
  position: relative;
  .back-arr {
    height: 17px;
    width: 17px;
  }
  .header-title {
    width: 80px;
    height: 28px;
    font-size: 20px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 28px;
  }
  .search {
    height: 17px;
    width: 17px;
  }
  .search-input{
    display: flex;
    align-items: center;
    background-color: #00000050;
    position: absolute;
    bottom: 0px;
    transform: translate(0,100%);
    right: 20px;
    z-index: 200;
    
    input{
      height: 30px;
      border-radius: 20px;
      text-indent: 10px;
      outline: none;
      width: 200px;
    }
    span{
      color: lightgreen;
      font-size: 15px;
      margin-right: 10px;
      margin-left: 5px;
    }
  }
}
#allmap {
  height: 584px;
  width: 100%;
  background: rgba(34, 38, 45, 1);
  border-radius: 22px;
}
#results{
  max-height: 400px;
  border-radius: 20px;
  overflow: auto;
  width: 200px;
  position: absolute;
  top: 30px;
  box-shadow: 0px 0px 9px 3px rgba(0, 0, 0, 0.19);
}
.mySwiper-box {
  width: 100%;
  position: absolute;
  top: 540px;
  .cinema-list {
    .cinemaImg {
      width: 202px;
      height: 131px;
    }
    .cinema-list-down {
      box-sizing: border-box;
      padding: 5px 0 0 8px;
      width: 202px;
      margin: 0 auto;
      background: rgba(51, 54, 61, 1);
      box-shadow: 0px 0px 9px 3px rgba(0, 0, 0, 0.19);
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .cinema-explain {
        .cinema-name {
          font-size: 12px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 17px;
          margin-bottom: 7px;
        }
        .widget-time {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .widget {
            .share {
              margin-left: 2px;
              margin-right: 14px;
            }
            img {
              width: 17px;
              height: 17px;
            }
          }
        }
      }
      .look {
        width: 45px;
        margin-right: 6px;
        height: 25px;
        background: linear-gradient(
          150deg,
          rgba(242, 91, 134, 1) 0%,
          rgba(241, 172, 94, 1) 100%
        );
        box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
        border-radius: 6px;
        font-size: 12px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 25px;
      }
    }
  }
}
.footer {
  height: 135px;
  width: 100%;
  background: rgba(51, 54, 61, 1);
  position: relative;
  .footer-line {
    width: 134px;
    height: 5px;
    background: rgba(255, 255, 255, 1);
    border-radius: 100px;
    position: absolute;
    bottom: 21px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.router-view {
  margin: 0;
}
</style>
