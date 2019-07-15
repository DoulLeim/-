<template>
  <div class="coming-main">
    <span class="hot">热门预告片</span>

    <swiper
      class="coming-swiper"
      :options="swiperOption1"
      ref="mySwiper"
      @someSwiperEvent="callback"
    >
      <!-- slides -->
      <swiper-slide class="swiper-list">
        <img class="play2" src="@/assets/imgs/icons/play2.png" alt>
        <img src="@/assets/imgs/movie/swiper1.png" alt>
      </swiper-slide>
      <swiper-slide class="swiper-list">
        <img class="play2" src="@/assets/imgs/icons/play2.png" alt>
        <img src="@/assets/imgs/movie/swiper2.png" alt>
      </swiper-slide>
      <swiper-slide class="swiper-list">
        <img class="play2" src="@/assets/imgs/icons/play2.png" alt>
        <img src="@/assets/imgs/movie/swiper3.png" alt>
      </swiper-slide>
    </swiper>
    <span class="coming">即将上映</span>
    <swiper class="date-swiper" :options="swiperOption2" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide class="swiper-list">
        <span>2月2日</span>
      </swiper-slide>
      <swiper-slide class="swiper-list">
        <span>2月3日</span>
      </swiper-slide>
      <swiper-slide class="swiper-list">
        <span>2月4日</span>
      </swiper-slide>
      <swiper-slide class="swiper-list">
        <span>2月5日</span>
      </swiper-slide>
      <swiper-slide class="swiper-list">
        <span>2月6日</span>
      </swiper-slide>
    </swiper>
    <ul class="coming-item">
      <router-link tag="li" :to="{name:'Details'}" class="coming-list" v-for="movie in movieListCom" :key="movie.id">
        <img class="cover-img" :src="movie.coverImg" alt>
        <img class="play" src="@/assets/imgs/icons/play.png" alt>
        <div class="detail">
          <p class="p1">{{movie.title}}</p>
          <p class="p2">
            <span>1.4万</span> 人想看
          </p>
          <p class="p3">导演：{{movie.directorsStr}}</p>
          <p class="p4">主演：{{movie.castsStr}}</p>
          <router-link tag="div" :to="{name:'cinema'}" class="presale">预售</router-link>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
// swiper css
import "swiper/dist/css/swiper.css";
// swiper 组件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Axios from "axios";
// 导入电影API
const coming_soon = "http://59.110.138.169/api/douban/movie/coming_soon";
export default {
  name: "Coming",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption1: {
        slidesPerView: 1.2,
        centeredSlides: true,
        spaceBetween: 14
      },
      swiperOption2: {
        slidesPerView: 4,
        spaceBetween: 16
      },
      movies: []
    };
  },
  created() {
    this.getMovie();
  },
  methods: {
    callback() {},
    getMovie() {
      var url = coming_soon;
      Axios.get(url).then(res => {
        // res.data axios的结果
        this.movies = res.data.data;
        // console.log(this.movies);
      });
    },
  },
  computed: {
    movieListCom() {
      // map 遍历修改每一项
      var rs = this.movies.map(item => {
        // 给item 重新添加新属性 导演字符串
        // reduce 合并方法 第二个参数为初始值 a为合并后的值 b为下一个值
        item.directorsStr = item.directors.reduce((a, b) => {
          var str = a + "，" + b.name;
          return str.substr(1);
        }, "");
        item.castsStr = item.casts.reduce((a, b) => {
          var str = a + "," + b.name;
          return str;
        }, "");
        item.castsStr = item.castsStr.substr(1);
        item.coverImg = "https://images.weserv.nl/?url=" + item.images.small;
        return item;
      });
      return rs;
    }
  },
  filters:{

  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
.coming-main {
  margin-top: 40px;
  position: relative;
  overflow: hidden;
  .hot {
    position: absolute;
    top: 30px;
    left: 17.5px;
    display: block;
    font-size: 18px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(223, 223, 223, 1);
    line-height: 18px;
  }
  .coming-swiper {
    margin-top: 68px;
    .swiper-list {
      position: relative;
      width: 318px;
      height: 185px;
      img {
        width: 100%;
        height: 100%;
      }
      .play2 {
        position: absolute;
        top: 65.5px;
        left: 140px;
        width: 38px;
        height: 38px;
        z-index: 10;
      }
    }
  }
  .coming {
    float: left;
    margin-top: 26px;
    margin-left: 17.5px;
    font-size: 18px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(223, 223, 223, 1);
    line-height: 25px;
  }
  .date-swiper {
    margin-top: 62px;
    .swiper-list {
      width: 82px;
      height: 26px;
      border-radius: 13px;
      border: 2px solid rgba(151, 151, 151, 1);
      span {
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(223, 223, 223, 1);
        line-height: 30px;
      }
      &:nth-child(2) {
        width: 86px;
        height: 30px;
        line-height: 30px;
        background: linear-gradient(
          150deg,
          rgba(242, 91, 134, 1) 0%,
          rgba(241, 172, 94, 1) 100%
        );
        box-shadow: 0px 0px 10px 0px rgba(242, 109, 125, 0.4);
        border: none;
      }
    }
  }
  .coming-item {
    margin-top: 20px;
    padding: 0 $basePadding;
    width: 340px;
    .coming-list {
      height: 140px;
      border-radius: 6px;
      background-color: #33363d;
      position: relative;
      // margin-left: 6.5px;
      margin-top: 15px;
      .cover-img {
        position: absolute;
        left: 0;
        width: 117px;
        height: 140px;
        border-radius: 6px;
      }
      .play {
        position: absolute;
        left: 38px;
        top: 46px;
      }
      .p1 {
        position: absolute;
        top: 16px;
        left: 132px;
        font-size: 18px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 18px;
      }
      .p2 {
        position: absolute;
        top: 48px;
        left: 132px;
        font-size: 15px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 21px;
        span {
          color: #fbc34a;
        }
      }
      .p3 {
        position: absolute;
        top: 80px;
        left: 132px;
        border: 1px solid rgba(0,0,0,.0);
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #979797;
        line-height: 12px;
      }
      .p4 {
        position: absolute;
        top: 98px;
        left: 132px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #979797;
        line-height: 12px;
      }
      .presale {
        position: absolute;
        top: 48px;
        left: 265px;
        width: 54px;
        height: 25px;
        background: linear-gradient(
          150deg,
          rgba(98, 75, 163, 1) 0%,
          rgba(203, 68, 152, 1) 100%
        );
        box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
        border-radius: 6px;
        line-height: 25px;
      }
    }
  }
}
</style>
