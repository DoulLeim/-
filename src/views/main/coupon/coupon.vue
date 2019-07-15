<template>
  <div class="coupon">
    <div class="header">
      <button @click="$router.go(-1)"></button>
      <p>优惠券</p>
    </div>
    <div class="title">
      <div>您有两张优惠券可用</div>
    </div>
    <div class="content-1">
      <p class="p1">电影专享代金券</p>
      <p class="p2">购票即可抵扣 快去购票</p>
      <p class="p3">有效期至: 2018-4-11</p>
      <router-link tag='a' :to="{name:'buy'}" class="jump" >
      <p class="p4">五元</p>
      <p class="p5">购票</p>
      </router-link>
    </div>
    <div class="content-1">
      <p class="p1">电影专享代金券</p>
      <p class="p2">购票即可抵扣 快去购票</p>
      <p class="p3">有效期至: 2018-4-11</p>
      <router-link tag='a' :to="{name:'buy'}" class="jump" >
      <p class="p4">五元</p>
      <p class="p5">购票</p>
      </router-link>
    </div>
    <div class="content-2">
      <p class="p1">电影专享代金券</p>
      <p class="p2">购票即可抵扣 快去购票</p>
      <p class="p3">有效期至: 2018-4-11</p>
      <p class="p4">五元</p>
      <p class="p5">购票</p>
      <div></div>
    </div>
    <div class="content-2">
      <p class="p1">电影专享代金券</p>
      <p class="p2">购票即可抵扣 快去购票</p>
      <p class="p3">有效期至: 2018-4-11</p>
      <p class="p4">五元</p>
      <p class="p5">购票</p>
      <div></div>
    </div>
    <div class="content-2">
      <p class="p1">电影专享代金券</p>
      <p class="p2">购票即可抵扣 快去购票</p>
      <p class="p3">有效期至: 2018-4-11</p>
      <p class="p4">五元</p>
      <p class="p5">购票</p>
      <div></div>
    </div>
    <div class="footer">
      <router-link tag="a" :to="{name:'cinema'}" class="jump">
        <p>去购票</p>
        <img src="@/assets/imgs/kind/go.png" alt>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "coupon",

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang='scss' scoped>
.coupon {
  height: 100%;
  background-color: #22262d;
  .header {
    position: relative;
    height: 44px;
    background-color: #22262d;
    display: flex;
    align-items: center;
    justify-content:flex-start;
    
    p {
      font-size: 16px;
      margin-left: 134px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 22px;
    }
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
    }
  }
  .title {
    position: relative;
    width: 100%;
    height: 30px;
    background-color: #2c2f36;
    div {
      font-size: 12px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      position: absolute;
      left: 20px;
      top: 7px;
    }
  }
  .content-1 {
    position: relative;
    margin: 14px auto;
    width: 335px;
    height: 120px;
    background: url(../../../assets/imgs/kind/juxing.png) no-repeat center;
    background-size: cover;
    .p1 {
      font-size: 18px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 25px;
      position: absolute;
      top: 22px;
      left: 22px;
    }
    .p2 {
      font-size: 12px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      position: absolute;
      top: 55px;
      left: 24px;
    }
    .p3 {
      font-size: 12px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 17px;
      position: absolute;
      top: 80px;
      left: 24px;
    }
    .p4 {
      font-size: 24px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 33px;
      position: absolute;
      right: 45px;
      top: 22px;
    }
    .p5 {
      font-size: 18px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 25px;
      position: absolute;
      right: 48px;
      top: 68px;
    }
  }
  .content-2 {
    position: relative;
    margin: 14px auto;
    width: 335px;
    height: 120px;
    background: url(../../../assets/imgs/kind/juxing2.png) no-repeat center;
    background-size: cover;
    .p1 {
      font-size: 18px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 25px;
      position: absolute;
      top: 22px;
      left: 22px;
    }
    .p2 {
      font-size: 12px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      position: absolute;
      top: 55px;
      left: 24px;
    }
    .p3 {
      font-size: 12px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 17px;
      position: absolute;
      top: 80px;
      left: 24px;
    }
    .p4 {
      font-size: 24px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 33px;
      position: absolute;
      right: 45px;
      top: 22px;
    }
    .p5 {
      font-size: 18px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 25px;
      position: absolute;
      right: 48px;
      top: 68px;
    }
    div {
      width: 54px;
      height: 54px;
      background: url(../../../assets/imgs/kind/expired.png) no-repeat center;
      background-size: cover;
      position: absolute;
      top: 44px;
      right: 24px;
    }
  }
  .footer {
    position: fixed;
    bottom: 0;

    width: 100%;
    height: 70px;
    background-color: #2c2f36;
    display: flex;
    align-items: center;
    justify-content: center;
    .jump {
      display: block;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    p {
      font-size: 18px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 25px;
    }
    img {
      width: 18px;
      height: 25px;
    }
  }
}
</style>
