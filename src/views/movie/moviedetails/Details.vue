<template>
  <div class="details-main">
    <div class="bgi"></div>
    <div class="cover"></div>
    <div class="play"></div>
    <div class="details-c">
      <button class="return" @click="$router.go(-1)"></button>
      <button class="share"></button>
      <span class="cname">傲慢与偏见 (2005)</span>
      <span class="min">120min</span>
      <span class="ename">Pride & Prejudice</span>
      <router-link tag="ul" class="score-icon" :to="{name:'score'}">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </router-link>
      <router-link tag="span" class="score" :to="{name:'score'}">
        9.0
        <span>/10</span>
      </router-link>
      <div class="icon-two">
        <span class="comment"></span>
        <span class="start"></span>
      </div>
      <ul class="list">
        <li>简介</li>
        <li>
          <a href="javascript:void(0)" @click="goAnchor('#pinglun')">影评</a>
        </li>
        <li>讨论</li>
        <li>更多</li>
      </ul>
      <div class="box"></div>
      <p class="detail">
        伊丽莎白·班纳特（凯拉·奈特莉饰）和姐姐珍·班纳特（罗莎曼 德·派克 饰）、妹妹玛丽·班纳特（妲露拉·莱莉饰）、凯蒂·班 纳特（凯瑞·穆丽根饰）以及丽迪亚·班纳特（吉娜·马隆 饰） 这5个出身于小地主家庭的姐妹个个如花似玉…
        <a
          href
        >查看更多></a>
      </p>
      <span class="actor">演职人员</span>
      <swiper
        class="actor-swiper"
        :options="swiperOption1"
        ref="mySwiper"
        @someSwiperEvent="callback"
      >
        <!-- slides -->
        <swiper-slide class="swiper-list">
          <router-link :to="{name:'performer'}">
            <img class="actor-img" src="@/assets/imgs/movie/actor1.png" alt>
          </router-link>
          <span class="cname">凯拉·奈特莉</span>
          <span class="shiyan">饰伊丽莎…</span>
        </swiper-slide>
        <swiper-slide class="swiper-list">
          <router-link :to="{name:'performer'}">
            <img class="actor-img" src="@/assets/imgs/movie/actor2.png" alt>
          </router-link>
          <span class="cname">马修·麦克菲迪恩</span>
          <span class="shiyan">饰达西</span>
        </swiper-slide>
        <swiper-slide class="swiper-list">
          <router-link :to="{name:'performer'}">
            <img class="actor-img" src="@/assets/imgs/movie/actor3.png" alt>
          </router-link>
          <span class="cname">裴淳华</span>
          <span class="shiyan">饰珍·班内特</span>
        </swiper-slide>
        <swiper-slide class="swiper-list">
          <router-link :to="{name:'performer'}">
            <img class="actor-img" src="@/assets/imgs/movie/actor4.png" alt>
          </router-link>
          <span class="cname">西蒙·伍兹</span>
          <span class="shiyan">饰查尔斯…</span>
        </swiper-slide>
      </swiper>
      <span class="all-actor">全部32位演员</span>
      <span class="video">视频</span>
      <swiper
        class="video-swiper"
        :options="swiperOption2"
        ref="mySwiper"
        @someSwiperEvent="callback"
      >
        <!-- slides -->
        <swiper-slide class="swiper-list">
          <img class="video-img" src="@/assets/imgs/movie/video1.png" alt>
          <img class="juxing" src="@/assets/imgs/movie/矩形.png" alt="">
          <img class="juxing2" src="@/assets/imgs/movie/矩形2.png" alt="">
          <span class="time">03:34</span>
          <span class="jianjie">《傲慢与偏见》：百年经典的绝美呈现， 一次现实与理想的爱情碰撞</span>
        </swiper-slide>
        <swiper-slide class="swiper-list">
          <img class="video-img" src="@/assets/imgs/movie/video2.png" alt>
          <img class="juxing" src="@/assets/imgs/movie/矩形.png" alt="">
          <img class="juxing2" src="@/assets/imgs/movie/矩形2.png" alt="">
          <span class="time">03:34</span>
          <span class="jianjie">借了不朽经典的光，拍了一 部沦为普通的爱情故事</span>
        </swiper-slide>
      </swiper>
      <span class="all-video">全部10个视频</span>
      <span class="piaofang">票房</span>
      <router-link tag="span" :to="{name:'boxOffice'}" class="ranking-1">2</router-link>
      <router-link tag="span" :to="{name:'boxOffice'}" class="first">暂无</router-link>
      <router-link tag="span" :to="{name:'boxOffice'}" class="ranking-2">2660</router-link>
      <span class="ranking-title">今日票房排行</span>
      <span class="ranking-main">首周票房（万）</span>
      <span class="ranking-title2">今日票房排行</span>
      <router-link tag="span" :to="{name:'boxOffice'}" class="ranking-detail">票房详情</router-link>
      <Comment id="pinglun"></Comment>
    </div>
    <router-link tag="div" :to="{name:'coupon'}" class="foot">特惠选票</router-link>
  </div>
</template>

<script>
// swiper css
import "swiper/dist/css/swiper.css";
// swiper 组件
import { swiper, swiperSlide } from "vue-awesome-swiper";
// 导入影评组件
import Comment from "../../comment/Comment";
export default {
  name: "Details",
  data() {
    return {
      swiperOption1: {
        slidesPerView: 3.2,
        spaceBetween: 16
      },
      swiperOption2: {
        slidesPerView: 1.5,
        spaceBetween: 15
      },
      Comment: "Comment"
    };
  },
  components: {
    swiper,
    swiperSlide,
    Comment
  },
  methods: {
    callback() {},
    // 跳转到评论
    goAnchor: function(type) {
      var anchor = this.$el.querySelector("#pinglun");
      // chrome
      document.body.scrollTop = anchor.offsetTop;
      // firefox
      document.documentElement.scrollTop = anchor.offsetTop;
    }
  }
};
</script>

<style lang='scss' scoped>
.bgi {
  position: fixed;
  top: 0;
  left: 0;
  width: 375px;
  height: 240px;
  background: url("../../../assets/imgs/movie/banner.png") no-repeat center;
  z-index: -1;
}
.cover {
  margin-top: 96px;
  width: 96px;
  height: 131px;
  margin-left: 17.5px;
  background: url("../../../assets/imgs/movie/傲慢与偏见.png") no-repeat center;
}
.play {
  margin-top: -90px;
  width: 56px;
  height: 57px;
  margin-left: 220px;
  background: url("../../../assets/imgs/movie/播放.png") no-repeat center;
  background-size: cover;
}
.return {
  position: fixed;
  top: 30px;
  left: 23px;
  width: 20px;
  height: 20px;
  z-index: 9;
  background: url("../../../assets/imgs/icons/return.png") no-repeat center;
  background-size: cover;
}
.share {
  position: fixed;
  top: 30px;
  right: 21px;
  width: 20px;
  height: 20px;
  z-index: 9;
  background: url("../../../assets/imgs/movie/share.png") no-repeat center;
  background-size: cover;
}
.details-c {
  padding: 0 17.5px;
  .cname {
    width: 168px;
    display: block;
    margin-top: 57px;
    font-size: 20px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 20px;
  }
  .min {
    display: block;
    width: 40px;
    margin-top: -14px;
    margin-left: 205.5px;
    font-size: 12px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(241, 116, 121, 1);
    line-height: 12px;
  }
  .ename {
    display: block;
    width: 118px;
    margin-top: 15px;
    margin-left: 0px;
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #979797;
    line-height: 14px;
  }
  .score-icon {
    float: left;
    margin-top: 10px;
    margin-left: 0px;
    li {
      width: 22px;
      height: 22px;
      background-color: red;
      float: right;
      margin-right: 10px;
      background: url("../../../assets/imgs/movie/一星.png") no-repeat center;
      &:first-child {
        background: url("../../../assets/imgs/movie/半星.png") no-repeat center;
      }
    }
  }
  .score {
    float: left;
    margin-left: 14px;
    width: 58px;
    display: inline-block;
    margin-top: 10px;
    height: 22px;
    font-size: 22px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(251, 195, 74, 1);
    line-height: 22px;
    span {
      width: 19px;
      height: 17px;
      font-size: 12px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: #979797;
      line-height: 17px;
    }
  }
  .icon-two {
    float: right;
    margin-right: 0;
    margin-top: 18px;
    .comment {
      margin-right: 16px;
      display: inline-block;
      width: 18px;
      height: 18px;
      background: url("../../../assets/imgs/icons/评论.png") no-repeat center;
      background-size: cover;
    }
    .start {
      display: inline-block;
      width: 18px;
      height: 18px;
      background: url("../..//../assets/imgs/icons/星.png") no-repeat center;
      background-size: cover;
    }
  }
  .list {
    margin-top: 52px;
    clear: both;
    background-color: red;
    li {
      margin-right: 30px;
      float: left;
      font-size: 14px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #979797;
      line-height: 14px;
      a {
        color: #979797;
      }
      &:first-child {
        &:after {
          margin: 0 auto;
          display: block;
          margin-top: 2px;
          content: "";
          width: 28px;
          height: 3px;
          background: linear-gradient(
            135deg,
            rgba(241, 100, 129, 1) 0%,
            rgba(241, 144, 108, 1) 100%
          );
        }
      }
    }
  }
  .box {
    clear: both;
  }
  .detail {
    margin-top: 10px;
    font-size: 12px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #979797;
    line-height: 18px;
    text-align: left;
    a {
      text-decoration: none;
      font-size: 14px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(251, 195, 74, 1);
      line-height: 14px;
    }
  }
  .actor {
    display: block;
    margin-top: 30px;
    float: left;
    font-size: 18px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 18px;
  }
  .actor-swiper {
    width: 340px;
    .swiper-list {
      margin-top: 15px;
      width: 100px;
      .cname {
        text-align: left;
        display: block;
        margin-top: 10px;
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 14px;
      }
      .shiyan {
        margin-top: 6px;
        display: block;
        text-align: left;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #979797;
        line-height: 12px;
      }
    }
  }
  .all-actor {
    display: block;
    text-align: center;
    margin-top: 25px;
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(251, 195, 74, 1);
    line-height: 14px;
  }
  .video {
    display: block;
    margin-top: 30px;
    text-align: left;
    font-size: 18px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 18px;
  }
  .video-swiper {
    margin-top: 14px;
    .swiper-list {
      position: relative;
      top: 0;
      left: 0;
      width: 200px;
      height: 200px;
      .juxing{
        position: absolute;
        top: 10px;
        left: 20px;
      }
      .juxing2{
        position: absolute;
        top: 100px;
        left: 20px;
      }
      .time{
        position: absolute;
        top:100px;
        left: 32px;
        transform: scale(0.8);
      }
      .video-img {
        width: 200px;
        height: 120px;
      }
      .jianjie {
        display: block;
        margin-top: 10px;
        text-align: left;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 18px;
      }
    }
  }
  .all-video {
    margin-top: 25px;
    display: block;
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(251, 195, 74, 1);
    line-height: 14px;
  }
  .piaofang {
    display: block;
    text-align: left;
    margin-top: 30px;
    font-size: 18px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 18px;
  }
  .ranking-1 {
    float: left;
    display: block;
    text-align: left;
    padding-left: 33.5px;
    margin-top: 17px;
    font-size: 18px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 18px;
  }
  .first {
    float: left;
    margin-top: 17px;
    margin-left: 106px;
    display: block;
    font-size: 18px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 18px;
  }
  .ranking-2 {
    float: right;
    margin-right: 14px;
    margin-top: 17px;
    font-size: 18px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 18px;
  }
  .ranking-title {
    font-size: 12px;
    line-height: 12px;
    font-weight: 400;
    color: #979797;
    float: left;
    padding-top: 18px;
    display: block;
    clear: both;
  }
  .ranking-main {
    font-size: 12px;
    line-height: 12px;
    font-weight: 400;
    color: #979797;
    float: left;
    padding-top: 18px;
    display: block;
    margin-left: 57px;
  }
  .ranking-title2 {
    font-size: 12px;
    line-height: 12px;
    font-weight: 400;
    color: #979797;
    float: left;
    padding-top: 18px;
    display: block;
    margin-left: 51px;
  }
  .ranking-detail {
    display: block;
    text-align: center;
    clear: both;
    padding-top: 25px;
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(251, 195, 74, 1);
    line-height: 14px;
  }
}
.foot {
  position: fixed;
  bottom: 0px;
  z-index: 2;
  width: 375px;
  height: 44px;
  background: linear-gradient(
    150deg,
    rgba(242, 91, 134, 1) 0%,
    rgba(241, 172, 94, 1) 100%
  );
  box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
  border-radius: 6px 6px 0px 0px;
  font-size: 18px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 44px;
}
</style>
