<template>
  <div class="card">
    <div class="header">
      <button @click="$router.go(-1)"></button>
      <p>影城卡</p>
    </div>
    <div class="content-1">
        <p class="p1">耀莱成龙影城影城卡</p>
        <p class="p2">10元起</p>
        <p class="p3">开卡可享购票超值会员价</p>
        <div class="inner">
            <p>有效期6个月</p>
        </div>
    </div>
    <div class="content-2">
        <p class="p1">耀莱成龙影城影城卡</p>
        <p class="p2">10元起</p>
        <p class="p3">开卡可享购票超值会员价</p>
        <div class="inner">
            <p>有效期6个月</p>
        </div>
    </div>
    <div class="footer">
      <router-link tag='a' :to="{name:'cinema'}" class="jump" >
      <p>去购票</p>
      <img src="@/assets/imgs/kind/go.png" alt>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang='scss' scoped>
@import "../../../assets/style/reset.css";
.card {
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
  .content-1{
      position: relative;
      width: 80%;
      height: 200px;
      border-radius: 5px;
      margin: 0 auto;
      margin-top: 20px;
        background: linear-gradient(45deg, #F26084, #F2A065);
        box-shadow:10px 10px 15px black;
      .p1{
          position: absolute;
          left: 10px;
          top: 15px;
          font-size: 15px;
          color: white;

      }
      .p2{
          position: absolute;
          right: 5px;
          top: 15px;
          font-size: 15px;
         color: white;
      }
      .p3{
          position: absolute;
          top: 100px;
          left: 75px;
          font-size: 15px;
          color: white;
      }
      .inner{
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 30px;
          background-color:rgba(255,255,255,0.2);
          opacity: 50%;
          p{
            color: white;
            font-size: 15px;
            position: absolute;
            left: 10px;
            top: 8px;
          }
      }
  }
    .content-2{
      position: relative;
      width: 80%;
      height: 200px;
      border-radius: 5px;
      margin: 0 auto;
      margin-top: 20px;
         background: linear-gradient(45deg, #000000, #434343);
         box-shadow:10px 10px 15px black;
      .p1{
          position: absolute;
          left: 10px;
          top: 15px;
          font-size: 15px;
          color: silver;

      }
      .p2{
          position: absolute;
          right: 5px;
          top: 15px;
          font-size: 15px;
          color: silver;
      }
      .p3{
          position: absolute;
          top: 100px;
          left: 75px;
          font-size: 15px;
          color: silver;
      }
      .inner{
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 30px;
          background-color:rgba(255,255,255,0.2);
          opacity: 50%;
          p{
            color: silver;
            font-size: 15px;
            position: absolute;
            left: 10px;
            top: 8px;
          }
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
    .jump{
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
    img{
      width: 18px;
      height: 25px;

    }
  }
}
</style>
