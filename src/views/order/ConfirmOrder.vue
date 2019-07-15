<template>
  <div class="ConfirmOrder-main">
    <div class="header" :style="'background-image:url(' + movieData.movieimg + ')'">
      <div class="header-top">
        <img src="@/assets/imgs/icons/arr-left.png" alt class="back-arr" @click="$router.go(-1)">
      </div>
      <p class="movie-name">{{dataMovie.title}}</p>
      <p class="time">今天6月21日 {{dataMovie.time}} {{dataMovie.title1}}</p>
      <p class="cinema-site">{{dataMovie.cine}}</p>
      <p class="seat">{{dataMovie.hall}} {{this.$route.query.seats}}</p>
    </div>
    <div class="order-message">
      <div class="coupon">
        <span class="text">电影优惠券</span>
          <router-link tag="div" :to="{name:'coupon'}" class="right">
          <span class="amount">{{usermessage.coupon}}张优惠券可用</span>
          <img src="@/assets/imgs/icons/arr-right.png" alt>
          </router-link>
      </div>
      <div class="club-card">
        <span class="text">会员卡</span>
        <router-link tag="div" :to="{name:'card'}" class="right">
          <span class="use">去使用</span>
          <img src="@/assets/imgs/icons/arr-right.png" alt>
        </router-link>
      </div>
      <div class="fares">
        <span class="text">票价总计</span>
        <span class="price">{{dataMovie.moth*this.$route.query.people}}元</span>
      </div>
      <div class="tel">
        <p class="text">手机号</p>
        <div class="explain">
          <span class="tip">购票成功后将收到取票码</span>
          <span class="num">{{usermessage.tel}}</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-top">
        <div class="agreement">
          <span>查看退票、改签协议</span>
          <img src="@/assets/imgs/icons/arr-top.png" alt>
        </div>
        <div class="cprice">
          <span>还需支付：</span>
          <span class="num">{{dataMovie.moth*this.$route.query.people}}元</span>
          <img src="@/assets/imgs/icons/arr-top.png" alt>
        </div>
      </div>
      <div class="confirm-order">
        <router-link tag="span" :to="{name:'order'}">
          确认订单
        </router-link>
      </div>
      <div class="footer-line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmOrder",

  data() {
    return {
      movieData: {
        moviename: "后来的我们",
        time: "今天2月1日 17:10（原版2D)",
        cinemasite: "耀莱成龙影城（建业店）",
        seat: "3号激光厅 6排9座",
        movieimg: require("@/assets/imgs/order/movie-banner.png")
      },
      usermessage: {
        coupon: 2,
        club: true,
        fares: 55,
        tel: 12345678900
      }
    };
  },

  methods: {},
  computed:{
    dataMovie(){
      for (var i in this.$store.state.detail.tick){
        if(this.$store.state.detail.tick[i].id === this.$route.params.id){
          return this.$store.state.detail.tick[i];
        };
      }
    }
  },
  mounted(){
    console.log(this.$store.state.detail.tick)
  }
};
</script>

<style lang='scss' scoped>
.header {
  width: 100%;
  padding-bottom: 40px;
  background-size: 100% 100%;
  opacity: 0.6;
  .header-top {
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: left;
    align-items: center;
    .back-arr {
      margin-left: 21px;
      height: 17px;
      width: 17px;
    }
  }
  p {
    text-align: left;
    margin-left: 20px;
    width: 100%;
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 20px;
    margin-bottom: 10px;
    white-space: nowrap;
    word-wrap: break-all;
    text-overflow: ellipsis;
  }
  .movie-name {
    font-size: 24px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 33px;
  }
}
.order-message {
  box-sizing: border-box;
  padding: 20px 9px;
  width: 335px;
  margin: 0 auto;
  background: rgba(51, 54, 61, 1);
  border-radius: 6px;
  .text {
    font-size: 16px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 22px;
  }
  .coupon,
  .club-card,
  .fares {
    .right {
      display: flex;
      align-items: center;
      span {
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(249, 195, 74, 1);
        line-height: 17px;
      }
      img {
        width: 15px;
        height: 15px;
      }
    }
    .price {
      font-size: 20px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(194, 19, 19, 1);
      line-height: 28px;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .tel {
    .text {
      text-align: left;
    }
    .explain {
      margin-top: 4px;
      font-size: 12px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 17px;
      display: flex;
      justify-content: space-between;
    }
  }
}
.footer {
  background: rgba(51, 54, 61, 1);
  margin-top: 200px;
  width: 100%;
  .footer-top {
    box-sizing: border-box;
    padding: 0 20px;
    height: 53px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
      span {
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 17px;
      }
      img {
        margin-left: 6px;
        width: 15px;
        height: 15px;
      }
    }
    .cprice {
      span {
        font-size: 16px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 22px;
      }
      .num {
        font-size: 20px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(194, 19, 19, 1);
        line-height: 28px;
      }
      img {
        margin-left: 14px;
      }
    }
  }
  .confirm-order {
    margin: 13px auto;
    width: 335px;
    height: 40px;
    background: linear-gradient(
      150deg,
      rgba(242, 91, 134, 1) 0%,
      rgba(241, 172, 94, 1) 100%
    );
    box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
    border-radius: 6px;
    text-align: center;
    font-size: 18px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 40px;
  }
  .footer-line {
    width: 134px;
    height: 5px;
    background: rgba(255, 255, 255, 1);
    border-radius: 100px;
    margin: 0 auto 21px;
  }
}
.router-view {
  margin: 0;
}
</style>
