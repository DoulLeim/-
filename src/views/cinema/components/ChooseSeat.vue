<template>
  <div class="ChooseSeat-main">
    <div class="header">
      <div class="header-top">
        <img src="@assets/imgs/icons/arr-left.png" alt class="back-arr" @click="$router.go(-1)">
        <span class="header-title">{{message.cine}}</span>
        <img src="@assets/imgs/icons/share.png" alt class="share">
      </div>
      <p class="movie-name">{{message.title}}</p>
      <div class="movie-detail">
        <span class="movie-time">{{message.time1}}—{{message.time}}</span>
        <span class="movie-type">{{message.title1}}</span>
      </div>
      <div class="seat-status">
        <div class="choosable">
          <span class="color"></span>
          <span class="text">可选</span>
        </div>
        <div class="disable">
          <span class="color"></span>
          <span class="text">不可选</span>
        </div>
        <div class="selected">
          <span class="color"></span>
          <span class="text">已选</span>
        </div>
      </div>
      <div class="site"></div>
      <div class="site-text">3号激光厅银幕</div>
    </div>
    <seat ref="seats"></seat>
    <div class="footer">
      <div class="recommend">
        <span class="recommend-text">推荐座位</span>
        <span
          class="recommend-num1 recommend-num"
          :class="{'active':choosed==1}"
          data-index="1"
          @click="checkseat()"
        >1人</span>
        <span
          class="recommend-num2 recommend-num"
          :class="{'active':choosed==2}"
          data-index="2"
          @click="checkseat()"
        >2人</span>
        <span
          class="recommend-num3 recommend-num"
          :class="{'active':choosed==3}"
          data-index="3"
          @click="checkseat()"
        >3人</span>
        <span
          class="recommend-num4 recommend-num"
          :class="{'active':choosed==4}"
          data-index="4"
          @click="checkseat()"
        >4人</span>
      </div>
      <div class="commit" :class="{'active':commitst===1}">
        <span v-show="commitst===0">请先选座</span>
        <router-link :to="{name:'confirmOrder',params:{id:message.id},path:'/order/confirm/' + message.id,query:{seats:seats,people:people}}" tag="span" v-show="commitst===1">
          确认选座
        </router-link>    
      </div>
      <div class="footer-line"></div>
    </div>
  </div>
</template>

<script>
import seat from "./components/Seat";
export default {
  name: "ChooseSeat",
  components: {
    seat,
  },
  computed: {},

  data() {
    return {
      choosed: 0,
      commitst: 0,
      people: 0,
      seats: ''
    };
  },
  computed: {
    message(){
      for(var i in this.$store.state.detail.tick){
        console.log(this.$store.state.detail.tick[i].id,this.$route.params.id);
        if(this.$store.state.detail.tick[i].id === this.$route.params.id){
          console.log(i);
          return this.$store.state.detail.tick[i];
        }
      }
    },
  },
  methods: {
    checkseat: function(e) {
      e = event || window.event;
      if (this.choosed != e.target.dataset.index) {
        this.choosed = e.target.dataset.index;
        this.$refs.seats.checkseat(this.choosed);
      } else {
        this.choosed = 0;
        this.$refs.seats.checkseat(this.choosed);
      }
    }
  },
  mounted() {
    console.log(this.$store.state.detail.tick);
    console.log(this.$refs.seats.people);
  }
};
</script>

<style lang='scss' scoped>
.header {
  position: relative;
  width: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url("../../../assets/imgs/cinema/choose-seat-banner.png");
  padding-bottom: 45px;
  .header-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
    height: 56px;
    width: 100%;
    .back-arr {
      height: 17px;
      width: 17px;
    }
    .share {
      height: 17px;
      width: 17px;
    }
    .header-title {
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 22px;
    }
  }
  .movie-name {
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 22px;
    text-align: left;
    margin-left: 24px;
  }
  .movie-detail {
    margin-top: 11px;
    margin-bottom: 21px;
    width: 100%;
    text-align: left;
    .movie-time {
      margin-left: 24px;
      margin-right: 10px;
      height: 23px;
      padding: 0 10px;
      background: rgba(51, 54, 61, 1);
      border-radius: 5px;
      opacity: 0.7293999999999999;
      font-size: 14px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 20px;
    }
    .movie-type {
      height: 23px;
      border-radius: 5px;
      padding: 0 10px;
      opacity: 0.7293999999999999;
      border: 1px solid rgba(51, 54, 61, 1);
      font-size: 14px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 20px;
    }
  }
  .seat-status {
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
    .color {
      width: 26px;
      height: 26px;
      box-shadow: 0px 2px 4px 0px rgba(76, 41, 49, 0.54);
      margin-right: 5px;
    }
    div {
      display: flex;
      align-items: center;
    }
    .text {
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 20px;
    }
    .choosable {
      .color {
        background: rgba(144, 146, 148, 1);
      }
    }
    .disable {
      .color {
        background: rgba(249, 195, 74, 1);
      }
    }
    .selected {
      .color {
        background: rgba(101, 72, 169, 1);
      }
    }
  }
  .site {
    transform: translate(-50%, 0) rotate(180deg);
    border-bottom: 20px solid #7a7a7a50;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    width: 100px;
    position: absolute;
    bottom: 0;
    left: 50%;
  }
  .site-text {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
.footer {
  overflow: hidden;
  width: 100%;
  background: rgba(51, 54, 61, 1);
  .recommend {
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 22px;
      margin-right: 10px;
    }
    .recommend-text {
    }
    .recommend-num {
      padding: 0 12px;
      opacity: 0.529;
      border: 1px solid rgba(151, 151, 151, 1);
    }
    .recommend-num.active {
      opacity: 1;
    }
    .recommend-num4 {
      margin: 0;
    }
  }
  .commit {
    height: 40px;
    width: 335px;
    margin: 14px auto;
    background: linear-gradient(
      150deg,
      rgba(242, 91, 134, 1) 0%,
      rgba(241, 172, 94, 1) 100%
    );
    box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
    border-radius: 6px;
    opacity: 0.4391;
    text-align: center;
    span {
      font-size: 18px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 40px;
    }
  }
  .commit.active span {
    color: lightblue;
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
