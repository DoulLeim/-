<template>
  <div class="all">
    <div class="header">
      <router-link tag="div" :to="{path:'home'}">
        <img src="@assets/imgs/signin/close.png" alt>
      </router-link>
      <img src="@assets/imgs/signin/menu.png" alt>
    </div>
    <div class="topBg"></div>
    <div class="banner">
      <template>
        <swiper
          class="mySwiper"
          :options="mySwiperOption"
          ref="mySwiper"
          @someSwiperEvent="callback"
        >
          <swiper-slide class="slide" id="slide" v-for="m in list" :key="m.id" :data-id="m.id">
            <div>
              
              <img  :src="'https://images.weserv.nl/?url='+m.images.small" alt>
              <div class="text">
                <p>“要是他没有触犯我的骄傲， 我也很容易原谅他的骄傲。”</p>
                <p>《{{m.title}}》</p>
              </div>
              <div class="voice">
                <img src="@assets/imgs/signin/voice.png" alt>
                <p>8s</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </template>
      <div class="handle">
        <router-link tag="div" :to="{path:'/movie/Details',params:{id:now}}">
          <img src="@assets/imgs/signin/play.png" alt>
        </router-link>
        <div class="share" @click.stop="share">
          <img src="@assets/imgs/signin/share.png" alt>
        </div>
        <div class="good" >
          <div v-for="(ite,index) in gList" :key="index" v-show="index == activeIndex" @click="zan(index)">
            <img  src="@assets/imgs/signin/zan.png" v-show="ite.isShow" alt class="aa">
            <img src="@assets/imgs/signin/good.png" v-show="!ite.isShow" alt class="bb">
          </div>
          
        </div>
        <router-link tag="div" :to="{path: '/comment'}">
          <img src="@assets/imgs/signin/comments.png" alt>
        </router-link>
      </div>
      <transition name="share-animat">
        <div class="share-block" v-if="isShare">
          <img src="@assets/imgs/signin/qq.png" alt>
          <img src="@assets/imgs/signin/wx.png" alt>
          <img src="@assets/imgs/signin/wb.png" alt>
          <img src="@assets/imgs/signin/kj.png" alt>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
var myVue = {};
export default {
  name: "vue_tabledemo1",
  props: {},
  data() {
    return {
      url: "http://www.bufantec.com/api/douban/movie/",
      list: [],
      now: "",
      activeIndex:0,
      isShare: false,
      isShow:false,
      beforeCreate() {
        myVue = this;
      },
      mySwiperOption: {
        direction: "vertical",
        loop: true,
        slidesPerView: 1.0,
        effect: "coverflow",
        // grabCursor: true,
        // spaceBetween: -20,
        // watchSlidesProgress: true,
        // centeredSlides: true,
        // loopedSlides: 3,
        // slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 0,
          stretch: 71,
          depth: 32,
          modifier: 7,
          slideShadows: false
        },
        on: {
          slideChangeTransitionStart: (e) => {
            console.log(this.$refs.mySwiper.swiper.activeIndex,e,222)
            this.activeIndex = this.$refs.mySwiper.swiper.activeIndex;
            var a = document.querySelector(".mySwiper .swiper-slide-active");
            // console.log(a.dataset.id);
            this.now = a.dataset.id;
            // console.log(this.now);
          }
        }
      }
    };
  },
  computed: {
    gList(){
      return this.list;
    },
    goodList() {
      console.log(this.$store.state.signIn.goodList,444)
      return this.$store.state.signIn.goodList;
    }
  },
  created() {
    axios.get(this.url + "in_theaters?start=5&limit=5").then(res => {
      this.list = res.data.data;
      this.list.map(ele=>{
        ele.isShow = false;
      })
      console.log(this.list,666)
      // console.log(res.data.data);
    });
  },
  mounted() {
    console.log(this.goodList,1111)

    document.addEventListener("click", e => {
      e = event || window.event;
      if (e.target.className != "share-block") {
        this.isShare = false;
        // console.log(this)
      }
    });
    //  this.now= this.now()
  },
  updated() {
    var a = document.querySelector(".mySwiper .swiper-slide-active");
    // console.log(a.dataset.id);
    this.now = a.dataset.id;
  },
  watch: {},
  methods: {
    callback() {},
    share() {
      this.isShare = true;
    },
    zan(val) {
      var ele = this.list.find((ele,index) =>{
        return index == val
      })
      ele.isShow = !ele.isShow;
      // this.list[val].isShow = !this.list[val].isShow;
      console.log(ele.isShow,777)
      // var a = document.querySelector(".mySwiper .swiper-slide-active");
      // this.$store.commit("signIn/good", { id: a.dataset.id });
      // console.log(this.$store.state.signIn.goodList,333)
      // if(this.count.count!=-1){
      // e.target.src=require("@assets/imgs/signin/zan.png");
      // }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/style/common/common.scss";
.all {
  // background-color: #000000;
  .header {
    display: flex;
    justify-content: space-between;
    position: fixed;
    align-items: center;
    width: $baseCenterWidth;
    height: $baseTopHeight;
    padding: 0 $basePadding;
    background-color: #00000000;
  }
  .topBg {
    width: 100%;
    height: 288px;
    background: url(../../../assets/imgs/signin/bg.png) no-repeat;
    background-size: 100% 80%;
  }
  .banner {
    width: 330px;
    position: absolute;
    top: 80px;
    left: 22px;
    .mySwiper {
      height: 545px;
      // .swiper-slide-active{
      //   transform: scale(1.2);
      // }
      // .swiper-slide:not(.swiper-slide-active) {
      //   transform: scale(.5);
      // }
      .slide {
        img {
          width: 330px;
          height: 485px;
          border-radius: 30px;
        }
        .text {
          position: absolute;
          bottom: 110px;
          left: 20px;
          text-align: left;
          :first-child {
            width: 227px;
            height: 90px;
            font-size: 18px;
            font-weight: 500;
            color: rgba(247, 247, 247, 1);
            line-height: 25px;
          }
        }
        .voice {
          position: absolute;
          right: 25px;
          bottom: 110px;
          width: 73px;
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          background: linear-gradient(
            150deg,
            rgba(242, 91, 134, 1) 0%,
            rgba(241, 172, 94, 1) 100%
          );
          box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.5);
          border-radius: 11px;
          overflow: hidden;
          img {
            width: 14px;
            height: 18px;
            margin: 5px 10px 0 10px;
            float: left;
          }
        }
      }
    }
    .handle {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 $basePadding;
      .share,
      .good {
        width: 38px;
        height: 38px;
        background: rgba(51, 54, 61, 1);
        border-radius: 50%;
        img {
          margin-top: 8px;
        }
      }
    }
    .share-block {
      position: absolute;
      bottom: 30px;
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      z-index: 99;
    }
  }
  .share-animat-enter-active {
    transition: all 0.3s ease;
    animation-fill-mode: forwards;
  }
  .share-animat-leave-active {
    transition: all 0.3s ease;
    animation-fill-mode: forwards;
  }
  .share-animat-enter {
    transform: translateY(70px);
    opacity: 0;
  }
  .share-animat-enter-to {
    transform: translateY(0px);
    opacity: 1;
  }
  .share-animat-leave {
    transform: translateY(0px);
    opacity: 1;
  }
  .share-animat-leave-to {
    transform: translateY(70px);
    opacity: 0;
  }
}
</style>
