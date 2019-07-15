<template>
  <div class="tick">
    <div class="head">
      <img class="left" @click="$router.go(-1)" src="@assets/imgs/order/left.png" alt>
      <p class="tick">我的影票</p>
    </div>
    <div class="bg">
      <div class="top">
        <p class="title">{{tick.title}}</p>
        <p class="time">{{tick.time}} {{tick.time1}} {{tick.lang}}</p>
        <p class="time">{{tick.cine}}</p>
        <p class="time">{{tick.hall}}</p>
        <img class="url" :src="tick.url" alt>
        <p class="borde"></p>
      </div>
      <div class="bot">
        <p class="pick">
          取票码:
          <span>{{tick.pick}}</span>
        </p>
        <p class="moth">{{tick.moth}}元</p>
        <img class="erwei" :src="tick.erwei" alt>
        <p class="page">{{tick.page}}张电影票</p>
        <p class="borde1"></p>
      </div>
      <div class="map">
        <div class="left">
          <p>{{tick.cine}}</p>
          <p>{{tick.add}}</p>
        </div>
        <div class="right">
          <p>{{tick.km}}km</p>
          <img src="@assets/imgs/order/phone.png" alt>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tick",
  data() {
    return {
      id: this.$route.params.id,
      all: []
    };
  },

  created() {
    this.getOne(this.id);
  },
  computed: {
    tick() {
      return this.$store.state.tick.getone;
    }
  },
  methods: {
    getOne(id) {   
      this.$store.commit("tick/getOne", id);
    }
  }
};
</script>

<style lang='scss' scoped>
.head {
  position: relative;
  width: 375px;
  height: 28px;
  .left {
    float: left;
    width: 20px;
    height: 20px;
    margin-left: 30px;
    margin-top: 4px;
  }
  .tick {
    left: 150px;
    position: absolute;
    height: 28px;
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 28px;
  }
}
.bg {
  margin-top: 40px;
  margin-left: 15px;
  width: 340px;
  overflow: hidden;
  height: 519px;
  background: url("../../../assets/imgs/order/xing.png") no-repeat;
  .top {
    margin-top: 30px;
    .title {
      width: 90px;
      height: 25px;
      margin-left: 30px;
      font-size: 18px;
      font-weight: 600;
      color: rgba(58, 58, 58, 1);
      line-height: 25px;
    }
    .time {
      margin-top: 10px;
      width: 180px;
      text-align: left;
      float: left;
      height: 17px;
      font-size: 12px;
      font-weight: 400;
      margin-left: 30px;
      color: rgba(58, 58, 58, 1);
      line-height: 17px;
    }
    .url {
      width: 78px;
      height: 114px;
    }
    .borde {
      width: 250px;
      margin: 0 auto;
      border-bottom: 2px dashed #979797;
      margin-top: 30px;
    }
  }
  .bot {
    position: relative;
    margin-top: 10px;
    .pick {
      position: relative;
      width: 50px;
      margin-left: 30px;
      text-align: left;
      height: 20px;
      font-size: 14px;
      font-weight: 400;
      color: #3a3a3a;
      line-height: 20px;
      span {
        position: absolute;
        top: 0px;
        left: 50px;
        text-align: center;
        width: 110px;
        height: 21px;
        border: 1px solid rgba(151, 151, 151, 0.39);
        display: block;
      }
    }
    .moth {
      position: absolute;
      top: 0px;
      right: 40px;
      width: 31px;
      height: 20px;
      font-size: 14px;
      font-weight: 400;
      color: rgba(58, 58, 58, 1);
      line-height: 20px;
    }
    .erwei {
      margin-top: 15px;
    }
    .page {
      margin-top: 10px;
      height: 14px;
      font-size: 10px;
      font-weight: 400;
      color: rgba(58, 58, 58, 1);
      line-height: 14px;
    }
    .borde1 {
      width: 250px;
      margin: 0 auto;
      border-bottom: 2px dashed #979797;
      margin-top: 10px;
    }
  }
  .map {
    position: relative;
    margin-top: 10px;
    .left {
      float: left;
      text-align: left;
      margin-left: 30px;
      p {
        height: 20px;
        font-size: 14px;
        font-weight: 400;
        color: #3a3a3a;
        line-height: 20px;
      }
      p:nth-child(2) {
        margin-top: 5px;
      }
    }
    .right {
      position: absolute;
      right: 30px;
      p {
        height: 22px;
        font-size: 16px;
        font-weight: 400;
        color: rgba(58, 58, 58, 1);
        line-height: 22px;
      }
    }
  }
}
</style>
