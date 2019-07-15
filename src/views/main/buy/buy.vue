<template>
  <div class="buy">
    <div class="header">
      <button @click="$router.go(-1)"></button>
      <router-link tag="div" :to="{name:'set'}" class="tx"></router-link>
      <p>hi,znkk!</p>
    </div>
    <div class="content">
      <router-link class="d1" tag="div" :to="{name:'home'}">
        <p class="p1">试试搜索影片</p>
        <span></span>
      </router-link>
      <router-link class="d2" tag="div" :to="{name:'cinema'}">
        <p class="p2">万达影城</p>
        <span></span>
      </router-link>
      <router-link tag="span" :to="{name:'CinemaMap'}" class="dw"></router-link>
      <router-link class="d3" tag="div" :to="{name:'details'}">
        <p class="p3">
          5月9日
          <span class="s1">1:34pm</span>
        </p>
        <span class="s2"></span>
        <p class="p4">更多场次</p>
      </router-link>
      <div class="check" @click="check=!check">
        <div>
          <span class="c-1" v-show="check"></span>
        </div>
        <span class="c-2">特惠票</span>
      </div>
      <div class="check-2" @click="check2=!check2">
        <div>
          <span class="c-1" v-show="check2"></span>
        </div>
        <span class="c-2">推荐座位</span>
      </div>

      <router-link tag="div" class="sure" :to="{path:'/cinema/detail/a1/seat/a1'}">
        <p>购票</p>
      </router-link>
      <div class="clear">
        <p class="p5" v-if="clearTitle">一条狗的使命 我是药神</p>
        <span @click="clearTitle=false" class="s1">清除历史</span>
      </div>
    </div>
    <p class="title">
      特惠票
      <router-link tag="span" :to="{name:'coupon'}">更多优惠</router-link>
    </p>
    <div class="ticket">
      <div class="time">
        <p class="p1">18:15</p>
        <p class="p2">
          <span>21:16散场</span>
        </p>
      </div>
      <div class="name">
        <p class="p1">英雄者联盟</p>
        <p class="p2">万达影城6号激光厅</p>
      </div>
      <p class="price">40.9元</p>
      <router-link tag="div" class="enter" :to="{path:'/cinema/detail/a1/seat/a1'}">
        <p>购票</p>
      </router-link>
    </div>
    <div class="ticket">
      <div class="time">
        <p class="p1">18:15</p>
        <p class="p2">
          <span>21:16散场</span>
        </p>
      </div>
      <div class="name">
        <p class="p1">英雄者联盟</p>
        <p class="p2">万达影城6号激光厅</p>
      </div>
      <p class="price">40.9元</p>
      <router-link tag="div" class="enter" :to="{path:'/cinema/detail/a2/seat/a2'}">
        <p>购票</p>
      </router-link>
    </div>
    <div class="ticket">
      <div class="time">
        <p class="p1">18:15</p>
        <p class="p2">
          <span>21:16散场</span>
        </p>
      </div>
      <div class="name">
        <p class="p1">英雄者联盟</p>
        <p class="p2">万达影城6号激光厅</p>
      </div>
      <p class="price">40.9元</p>
      <router-link tag="div" class="enter" :to="{path:'/cinema/detail/a3/seat/a3'}">
        <p>购票</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "buy",

  data() {
    return {
      check: false,
      check2: false,
      clearTitle: true,
      id:''
    };
  },
  methods: {
    shows() {
      this.n++;
      if (this.n % 2 == 0) {
        this.hides = false;
      } else {
        this.hides = true;
      }
    }

  },
  components: {}
};
</script>

<style lang='scss' scoped>
.buy {
  .header {
    position: relative;
    height: 44px;
    background-color: #22262d;
    display: flex;
    align-items: center;

    button {
      display: block;
      width: 10px;
      height: 25px;
      margin-left: 20px;
      background: rgba(0, 0, 0, 1);
      color: aliceblue;
      font-size: 18px;
      background: url(../../../assets/imgs/kind/back.png) no-repeat center;
      background-size: cover;
      position: absolute;
      left: 20px;
    }
    .tx {
      width: 33px;
      height: 33px;
      background: url(../../../assets/imgs/kind/tx.png) no-repeat center;
      background-size: cover;
      position: absolute;
      right: 80px;
      display: block;
    }
    p {
      font-size: 12px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 17px;
      position: absolute;
      right: 17px;
    }
  }
  .content {
    position: relative;
    width: 336px;
    height: 300px;
    margin: 0 auto;
    margin-top: 25px;
    background: rgba(51, 54, 61, 1);
    border-radius: 6px;
    .d1 {
      width: 100%;
      display: flex;
      align-items: center;
      position: absolute;
      left: 17px;
      top: 22px;
      .p1 {
        display: block;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 17px;
      }
      span {
        width: 15px;
        height: 17px;
        background: url(../../../assets/imgs/kind/go.png) no-repeat center;
        background-size: cover;
        margin-left: 158px;
      }
    }
    .d2 {
      width: 100%;
      display: flex;
      align-items: center;
      position: absolute;
      left: 17px;
      top: 59px;
      .p2 {
        font-size: 16px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 22px;
      }
      span {
        display: block;
        width: 15px;
        height: 17px;
        background: url(../../../assets/imgs/kind/go.png) no-repeat center;
        background-size: cover;
        margin-left: 166px;
      }
    }
    .dw {
      width: 15px;
      height: 18px;
      background: url(../../../assets/imgs/kind/dw.png) no-repeat center;
      background-size: cover;
      position: absolute;
      top: 60px;
      right: 33px;
    }
    .d3 {
      width: 100%;
      display: flex;
      align-items: center;
      position: absolute;
      left: 17px;
      top: 101px;
      .p3 {
        font-size: 16px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 22px;
        .s1 {
          font-size: 11px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 17px;
          margin-left: 10px;
        }
      }
      .s2 {
        display: block;
        width: 15px;
        height: 17px;
        background: url(../../../assets/imgs/kind/go.png) no-repeat center;
        background-size: cover;
        margin-left: 120px;
      }
      .p4 {
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 17px;
        margin-left: 18px;
      }
    }
    .check {
      display: flex;
      align-items: center;
      position: absolute;
      left: 17px;
      top: 148px;
      div {
        width: 15px;
        height: 15px;
        border: 1px solid #979797;
        .c-1 {
          display: block;
          width: 15px;
          height: 15px;
          background: url(../../../assets/imgs/kind/check.png) no-repeat center;
          background-color: #f16d7d;
          background-size: cover;
        }
      }
      .c-2 {
        margin-left: 5px;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 17px;
      }
    }
    .check-2 {
      display: flex;
      align-items: center;
      position: absolute;
      right: 17px;
      top: 148px;
      div {
        width: 15px;
        height: 15px;
        border: 1px solid #979797;
        .c-1 {
          display: block;
          width: 15px;
          height: 15px;
          background: url(../../../assets/imgs/kind/check.png) no-repeat center;
          background-color: #f16d7d;
          background-size: cover;
        }
      }
      .c-2 {
        margin-left: 5px;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 17px;
      }
    }

    .sure {
      width: 302px;
      height: 40px;
      background: linear-gradient(
        150deg,
        rgba(242, 91, 134, 1) 0%,
        rgba(241, 172, 94, 1) 100%
      );
      box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
      border-radius: 6px;
      position: absolute;
      top: 196px;
      left: 17px;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        font-size: 18px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 18px;
        margin: auto 0;
      }
    }
    .clear {
      position: absolute;
      top: 261px;
      left: 17px;
      display: flex;
      align-items: center;
      .p5 {
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 17px;
      }
      .s1 {
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 17px;
        margin-left: 5px;
      }
    }
  }
  .title {
    margin-top: 29px;
    font-size: 16px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 22px;

    span {
      display: inline-block;
      font-size: 12px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 17px;
      margin-left: 200px;
    }
    span::after {
      float: right;
      content: "";
      display: block;
      width: 10px;
      height: 15px;
      background: url(../../../assets/imgs/kind/go.png) no-repeat center;
      background-size: cover;
      margin-left: 5px;
    }
  }
  .ticket {
    width: 336px;
    height: 70px;
    background: rgba(51, 54, 61, 1);
    border-radius: 6px;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    align-items: center;
    .time {
      margin-left: 10px;
      .p1 {
        font-size: 16px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 22px;
      }
      .p2 {
        span {
          display: block;
          font-size: 10px;
          color: #cacaca;
          transform: scale(0.8);
        }
      }
    }
    .name {
      margin-left: 10px;
      .p1 {
        font-size: 16px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 22px;
      }
      .p2 {
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(202, 202, 202, 1);
        line-height: 17px;
      }
    }
    .price {
      font-size: 20px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(251, 195, 74, 1);
      line-height: 28px;
      margin-left: 10px;
    }
    .enter {
      width: 45px;
      height: 25px;
      background: linear-gradient(
        150deg,
        rgba(242, 91, 134, 1) 0%,
        rgba(241, 172, 94, 1) 100%
      );
      box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
      border-radius: 6px;
      margin-left: 10px;
      p {
        font-size: 12px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 21.33px;
      }
    }
  }
}
</style>
