<template>
  <div class="home-main">
    <div class="header">
      <router-link class="location" :to="{path: '/cinema'}">
        <p>郑州</p>
        <img class="down" src="@/assets/imgs/icons/down-arr.png" alt>
      </router-link>
      <div>
        <div class="search" @click="goMask">
          <label for>
            <img src="@/assets/imgs/icons/search.png" alt>
          </label>
          <input type="text" class="ipt" disabled="disabled" name placeholder="搜影片、影院、影人" id>
        </div>
      </div>

      <router-link :to="{path:'/home/signin'}">
        <img class="clock" src="@/assets/imgs/icons/clock.png" alt>
      </router-link>
    </div>
    <template>
      <swiper
        class="firstSwiper"
        :options="mySwiperOption"
        ref="mySwiper"
        @someSwiperEvent="callback"
      >
        <!-- slides -->
        <swiper-slide class="slide">
          <img src="@/assets/imgs/banner/banner2.png" alt>
        </swiper-slide>
        <swiper-slide class="slide">
          <img src="@/assets/imgs/banner/banner5.png" alt>
        </swiper-slide>
        <swiper-slide class="slide">
          <img src="@/assets/imgs/banner/banner2.png" alt>
        </swiper-slide>
        <swiper-slide class="slide">
          <img src="@/assets/imgs/banner/banner6.png" alt>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </template>
    <div class="center">
      <div class="hot">
        <div class="title">
          <div class="tit-l">
            <span class="line"></span>
            <p>热门影片</p>
          </div>
          <router-link tag="p" :to="{name:'movie',params:{type:0}}">全部 ></router-link>
        </div>
        <template>
          <swiper
            class="secondSwiper"
            :options="centerSwiperOption"
            ref="mySwiper"
            @someSwiperEvent="callback"
          >
            <!-- slides -->
            <swiper-slide class="slide" v-for="m in hot" :key="m.id">
              <div class="movie">
                <router-link tag="div" :to="{path:'/movie/Details',params:{id:m.id}}">
                  <img :src="'https://images.weserv.nl/?url='+m.images.small" alt>
                </router-link>
                <p>{{m.original_title}}</p>
                <router-link
                  tag="p"
                  class="buy"
                  :to="{name: 'cinema',params:{id:m.id,name:m.title}}"
                >购票</router-link>
              </div>
            </swiper-slide>
          </swiper>
        </template>
      </div>
      <div class="comming">
        <div class="title">
          <div class="tit-l">
            <span class="line"></span>
            <p>即将上映</p>
          </div>
          <router-link tag="p" :to="{name:'movie',params:{type:1}}">全部 ></router-link>
        </div>
        <template>
          <swiper
            class="thirdSwiper"
            :options="thirdSwiperOption"
            ref="mySwiper"
            @someSwiperEvent="callback"
          >
            <swiper-slide class="slide" v-for="n in comming" :key="n.id">
              <router-link tag="div" :to="{path:'/movie/Details',params:{id:n.id}}" class="movie">
                <img :src="'https://images.weserv.nl/?url='+n.images.small" alt>
                <p>{{n.original_title}}</p>
                <p>{{n.year}}</p>
              </router-link>
            </swiper-slide>
          </swiper>
        </template>
      </div>
      <div class="handpick">
        <div class="title">
          <div class="tit-l">
            <span class="line"></span>
            <p>精选预告</p>
          </div>
          <p :to="{path:'',params:{}}">更多 ></p>
        </div>
        <template>
          <swiper
            class="fourthSwiper"
            :options="fourthSwiperOption"
            ref="mySwiper"
            @someSwiperEvent="callback"
          >
            <swiper-slide class="slide">
              <router-link tag="div" class="movie" :to="{path:'',params:{}}">
                <img src="@assets/imgs/banner/banner1.png" alt>
                <p>《大护法》是一部能够体现反专制、反乌托邦式的寓言动画...</p>
              </router-link>
            </swiper-slide>
            <swiper-slide class="slide">
              <router-link tag="div" class="movie" :to="{path:'',params:{}}">
                <img src="@assets/imgs/banner/banner1.png" alt>
                <p>《大护法》是一部能够体现反专制、反乌托邦式的寓言动画...</p>
              </router-link>
            </swiper-slide>
            <swiper-slide class="slide">
              <router-link tag="div" class="movie" :to="{path:'',params:{}}">
                <img src="@assets/imgs/banner/banner1.png" alt>
                <p>《大护法》是一部能够体现反专制、反乌托邦式的寓言动画...</p>
              </router-link>
            </swiper-slide>
          </swiper>
        </template>
      </div>
    </div>
    <div class="mask" v-show="isShow">
      <div class="search">
        <label for>
          <img src="@/assets/imgs/icons/search.png" alt>
        </label>
        <input
          type="text"
          v-model="searchValue"
          class="goIpt"
          name
          placeholder="搜影片、影院、影人"
          id
          autofocus="autofocus"
        >
      </div>
      <p class="tog" @click="btn" v-show="searchValue.length==0">取消</p>
      <router-link
        class="tog"
        tag="p"
        @click="btn"
        v-show="searchValue.length!=0"
        :to="{path:'/movie/Details',params:{name:searchValue}}"
      >搜索</router-link>
      <ul class="results">
        <router-link
          tag="li"
          v-show="temp.length!=-1"
          class="search-list"
          v-for="(t,index) in temp"
          :key="index"
          :to="{path:'/movie/Details',params:{id:t.id}}"
        >{{t.title}}</router-link>
      </ul>
      <div v-show="temp.length==0" class="hot-list">
        <div class="hot">
          <img src="@/assets/imgs/home/search.png" alt>
          <p>影火虫热搜</p>
        </div>
        <ul class="list-l">
          <li v-for="movie in hot" :key="movie.id" @click="thisMovie(movie.id)">{{movie.title}}</li>
          <router-link tag="li" :to="{path:'/movie'}" class="more">更多热搜 ></router-link>
        </ul>
      </div>
    </div>
    <!-- <TopBackBar>
    电影列表-->
    <!-- <template v-slot:img-right> -->
    <!-- 具名插槽  这里实现相关右上角按钮  默认显示分享
    如需隐藏 设置空  span-->
    <!-- </template> -->
    <!-- </TopBackBar> -->
  </div>
</template>
<script>
import axios from "axios";
import "swiper/dist/css/swiper.css";
import TopBackBar from "@/components/TopBackBar";
import { swiper, swiperSlide } from "vue-awesome-swiper";
const delay = (function() {
  let timer = 0;
  return function(callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();
export default {
  name: "Home",
  components: {
    swiper,
    swiperSlide,
    TopBackBar
  },
  data() {
    return {
      url: "http://www.bufantec.com/api/douban/movie/",
      hot: [],
      comming: [],
      all: [],
      isShow: false,
      type: "",
      searchValue: "",
      temp: [],

      fourthSwiperOption: {
        slidesPerView: 1.2,
        // centeredSlides: true,
        spaceBetween: 20
      },
      thirdSwiperOption: {
        slidesPerView: 2.6
      },
      centerSwiperOption: {
        slidesPerView: 3.4
      },
      mySwiperOption: {
        loop: true,
        slidesPerView: 1.3,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
          // type: "bullets"
        }
      }
    };
  },
  created() {
    axios.get(this.url + "in_theaters?start=5&limit=5").then(res => {
      this.hot = res.data.data;
      // console.log(this.hot);
    });
    axios.get(this.url + "in_theaters").then(res => {
      this.all = res.data.data;
      // console.log(this.all);
    });
    axios.get(this.url + "coming_soon?limit=5").then(res => {
      this.comming = res.data.data;
      // console.log(this.comming);
    });
  },
  computed: {
    newList() {
      // return this.all.filter(item=>item.title.includes(ipt.value))
    }
  },
  methods: {
    async fetchData(val) {
      //写上你的搜索方法体
      this.temp = [];
      for (var i = 0; i < this.all.length; i++) {
        if (this.all[i].title.indexOf(this.searchValue) != -1) {
          this.temp.push(this.all[i]);
        }
      }
      console.log(this.temp);
    },
    callback() {},
    goMask() {
      var ipt = document.querySelector(".goIpt");
      // console.log(this.all[0].title);
      this.isShow = true;
      var search = document.querySelector(".search");
      search.style.transition = "transform 0.2s";
      search.style.transform = "translateX(30px);";
    },
    btn() {
      this.isShow = false;
      this.searchValue = "";
    },
    thisMovie(id) {
      this.$router.push({ path: "/movie/Details", params: { id: id } });
    }
  },
  watch: {
    searchValue() {
      delay(() => {
        if (this.searchValue.length != 0) {
          this.fetchData();
        } else {
          this.temp = [];
        }
      }, 300);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/common/common.scss";
.header {
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: $baseCenterWidth;
  height: $baseTopHeight;
  background-color: #000000;
  padding: 0 $basePadding;
  .location {
    font-size: 14px;
    color: #7a7a7a;
    p {
      float: left;
    }
    .down {
      width: 12px;
      height: 6px;
      margin-left: 5px;
    }
  }
  .search {
    display: flex;
    justify-content: space-between;
    width: 259px;
    height: 36px;
    background: rgba(51, 54, 61, 1);
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.09);
    border-radius: 18px;
    z-index: 999;
    label {
      width: 36px;
      margin: auto 0;
    }
    input {
      width: 223px;
      background-color: #33363d;
      border: 0;
      outline: none;
      border-top-right-radius: 18px;
      border-bottom-right-radius: 18px;
      font-size: 14px;
      color: #7a7a7a;
    }
  }

  .clock {
    width: 18px;
    height: 19px;
  }
}

.firstSwiper {
  position: relative;
  margin-top: 56px;
  .swiper-slide:not(.swiper-slide-active) {
    transform: scale(0.8);
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 159px;
    img {
      display: block;
      width: 335px;
      height: 145px;
    }
  }
 ::v-deep .swiper-pagination {
    position: absolute;
    bottom: 0px;
    margin-top: 8px;
  }
 ::v-deep .swiper-pagination-bullet {
    width: 4px;
    height: 4px;
    background: rgba(178, 178, 178, 1);
    border-radius: 2px;
  }

 ::v-deep .swiper-pagination-bullet-active {
    width: 14px;
    height: 3px;
    background-color: #fff;
  }
}

.center {
  margin: 34px 0 0 20px;
  .line {
    display: block;
    width: 4px;
    height: 17px;
    background: linear-gradient(180deg, #f26182 0%, #f1a064 100%);
  }
  .hot {
    width: 100%;
    height: 218px;
    .title {
      display: flex;
      justify-content: space-between;
      .line {
        float: left;
      }
      .tit-l {
        :nth-child(2) {
          margin-left: 9px;
          width: 72px;
          height: 18px;
          font-size: 18px;
          color: #dfdfdf;
        }
      }
      :last-child {
        width: 35px;
        height: 12px;
        font-size: 12px;
        font-weight: 400;
        color: rgba(223, 223, 223, 1);
        line-height: 12px;
        margin-right: 19px;
      }
    }
    .movie {
      width: 90px;
      height: 176px;
      // background-color: #fff;
    }
  }
  .comming {
    margin-top: 30px;
    width: 100%;
    height: 234px;
    .title {
      display: flex;
      justify-content: space-between;
      .line {
        float: left;
      }
      .tit-l {
        :nth-child(2) {
          margin-left: 9px;
          width: 72px;
          height: 18px;
          font-size: 18px;
          color: #dfdfdf;
        }
      }
      :last-child {
        width: 35px;
        height: 12px;
        font-size: 12px;
        font-weight: 400;
        color: rgba(223, 223, 223, 1);
        line-height: 12px;
        margin-right: 19px;
      }
    }
  }
  .handpick {
    margin-top: 30px;
    width: 100%;
    height: 234px;
    .title {
      display: flex;
      justify-content: space-between;
      .line {
        float: left;
      }
      .tit-l {
        :nth-child(2) {
          margin-left: 9px;
          width: 72px;
          height: 18px;
          font-size: 18px;
          color: #dfdfdf;
        }
      }
      :last-child {
        width: 35px;
        height: 12px;
        font-size: 12px;
        font-weight: 400;
        color: rgba(223, 223, 223, 1);
        line-height: 12px;
        margin-right: 19px;
      }
    }
  }
  .secondSwiper {
    margin-top: 9px;
    .movie {
      img {
        width: 90px;
        height: 122px;
      }
      .buy {
        // margin: 0 auto;
        width: 50px;
        height: 22px;
        line-height: 22px;
        background: linear-gradient(
          150deg,
          rgba(242, 91, 134, 1) 0%,
          rgba(241, 172, 94, 1) 100%
        );
        box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.5);
        border-radius: 11px;
      }
      :nth-child(2) {
        margin-top: 6px;
        text-align: left;
        width: 100%;
        height: 20px;
        color: #dfdfdf;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .thirdSwiper {
    .slide {
      margin-top: 9px;
      .movie {
        width: 120px;
        height: 215px;
        text-align: left;
        img {
          width: 100%;
          height: 166px;
          border-radius: 5px;
        }
        :nth-child(2) {
          margin-top: 6px;
          line-height: 20px;
          width: 120px;
          height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 14px;
        }
        :last-child {
          color: rgba(223, 223, 223, 1);
          font-size: 12px;
        }
      }
    }
  }
  .fourthSwiper {
    .slide {
      margin-top: 10px;
      .movie {
        width: 295px;
        height: 206px;
        text-align: left;
        img {
          width: 100%;
          height: 160px;
        }
        :nth-child(2) {
          margin-top: 10px;
          line-height: 18px;
          font-size: 12px;
        }
      }
    }
  }
}
.mask {
  position: fixed;
  top: 0;
  z-index: 99;
  width: 375px;
  height: 812px;
  background: rgba(35, 38, 45, 1);
  .search {
    display: flex;
    justify-content: space-between;
    margin: 10px 0 0 30px;
    width: 259px;
    height: 36px;
    background: rgba(51, 54, 61, 1);
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.09);
    border-radius: 18px;
    z-index: 999;
    label {
      width: 36px;
      margin: auto 0;
    }
    input {
      width: 223px;
      background-color: #33363d;
      border: 0;
      outline: none;
      border-top-right-radius: 18px;
      border-bottom-right-radius: 18px;
      font-size: 14px;
      color: #7a7a7a;
    }
  }
  .tog {
    position: absolute;
    top: 20px;
    right: 19px;
    width: 32px;
    height: 16px;
    font-size: 16px;
    font-weight: 400;
    color: rgba(247, 247, 247, 1);
    line-height: 16px;
  }
  .hot-list {
    height: 183px;
    .hot {
      margin: 19px 0 0 30px;
      img {
        float: left;
      }
      p {
        height: 22px;
        width: 100px;
        line-height: 22px;
        color: #dfdfdf;
        font-size: 14px;
      }
    }

    .home-main {
      .header-bar {
        width: 100%;
        height: 40px;
      }
    }
    ul {
      float: left;
      font-size: 16px;
      text-align: left;
      color: #dfdfdf;
      margin-left: 30px;

      li {
        float: left;
        margin: 24px 20px 0 0;
        width: 150px;
        height: 16px;
        font-size: 16px;
        font-weight: 400;
        color: rgba(223, 223, 223, 1);
        line-height: 16px;
        // text-indent: 20px;
      }

      .more {
        color: #f1a363;
      }
    }
  }
}
.results {
  width: 300px;
  margin: 20px auto;
  background-color: #696767;
  color: #313030;
  .search-list {
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-align: left;
    text-indent: 35px;
    border-bottom: 1px solid #4d4d4d;
    background-color: #e4e4e4;
  }
}
.monday-goods {
  width: 100%;
  height: 500px;
  margin-top: 200px;
  background-color: pink;
}
</style>


