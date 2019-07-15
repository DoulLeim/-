<template>
  <div class="main-main">
    <div class="header-bar">
      <div class="bar-box">
        <router-link tag="div" :to="{name:'mymessage'}" class="head-portrait">
          <img src="@/assets/imgs/main/mine/touxiangx.png" alt>
        </router-link>
        <p class="user-name">yujian1130</p>
        <div class="box-vip">
          <p>v1青铜会员</p>
          <img src="@/assets/imgs/main/mine/zoujt.png" alt>
        </div>

        <div class="box-get">
          <router-link tag="div" to="/set">
            <img class="get-img" src="@/assets/imgs/main/mine/shezhix.png" alt>
          </router-link>
          <router-link tag="div" :to="{name:'message'}">
            <img class="get-img" src="@/assets/imgs/main/mine/pl1.png" alt>
          </router-link>
        </div>

        <router-link tag="div" :to="{name:'mymessage'}" class="box-img">
          <img src="@/assets/imgs/main/mine/zoujt.png" alt>
        </router-link>
      </div>
    </div>
    <div class="containter">
      <div class="content-member">
        <div class="member-canter">
          <a href="javescript:;">会员中心</a>
          <span></span>
        </div>
        <div class="member-voucher">
          <p class="voucher-p voucher-p1">会员中心</p>
          <p class="voucher-p voucher-p2">50元通兑券天天送</p>
          <div class="redpacket">
            <img src="@/assets/imgs/main/mine/hongbaox.png" alt>
          </div>
        </div>
      </div>
      <div class="content-empty"></div>
      <div class="my-indent">
        <router-link class="indent-title" tag="div" :to="{name:'order'}">
          <p class="title-p">我的订单</p>
          <div class="title-all">
            <p class="all-p">全部</p>
            <img class="all-img" src="@/assets/imgs/main/mine/zoujtx.png" alt>
          </div>
        </router-link>
        <div class="indent-nav">
          <ul class="nav-item">
            <li class="item-li">
              <img class="li-img" src="@/assets/imgs/main/mine/bianji4.png" alt>
              <p class="li-p">未消费</p>
            </li>
			<router-link tag="li" :to="{name:'order',params:{type:'payment'}}" class="item-li">
              <img class="li-img" src="@/assets/imgs/main/mine/bianji.png" alt>
              <p class="li-p">待付款</p>
			</router-link>
			<router-link tag="li" :to="{name:'order',params:{type:'remain'}}" class="item-li">
              <img class="li-img" src="@/assets/imgs/main/mine/bianji2.png" alt>
              <p class="li-p">待评价</p>
            </router-link>
			<router-link tag="li" :to="{name:'order',params:{type:'await'}}" class="item-li">
            <!-- <li class="item-li"> -->
              <img class="li-img" src="@/assets/imgs/main/mine/bianji3.png" alt>
              <p class="li-p">退款</p>
			</router-link>  
          </ul>
        </div>
      </div>
      <div class="content-list">
        <ul class="list-item">
          <router-link tag="li" class="item-vip" :to="{name:'card'}">
            <p class="vip-ka">影城会员卡</p>
            <img class="vip-img" src="@/assets/imgs/main/mine/zoujtx.png" alt>
          </router-link>
          <router-link tag="li" class="item-vip" :to="{name:'coupon'}">
            <p class="vip-ka">优惠卷</p>
            <img class="vip-img" src="@/assets/imgs/main/mine/zoujtx.png" alt>
          </router-link>

          <li class="item-vip">
            <p class="vip-ka">我的收藏</p>
            <img class="vip-img" src="@/assets/imgs/main/mine/zoujtx.png" alt>
          </li>
          <li class="item-vip">
            <p class="vip-ka">帮助与反馈</p>
            <img class="vip-img" src="@/assets/imgs/main/mine/zoujtx.png" alt>
          </li>
        </ul>
      </div>
      <div class="empty-pure"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Main",
  data(){
	return{
		all:[]
	}  
  },
  components: {},
  created() {
  	this.all=this.$store.state.tick.tick;
	console.log(this.all);
  }
};
</script>
<style scoped lang="scss">
.main-main {
  width: 100%;
  height: 100%;

  .header-bar {
    .bar-box {
      position: relative;
      width: 100%;
      height: 210px;
      background: linear-gradient(
        123deg,
        rgba(242, 94, 133, 1) 0%,
        rgba(241, 166, 97, 1) 100%
      );
      border-radius: 29px;
      opacity: 0.9029;

      .head-portrait {
        position: absolute;
        left: 20px;
        top: 91px;
        width: 73px;
        height: 73px;
      }

      .user-name {
        position: absolute;
        top: 100px;
        left: 111px;
        font-size: 18px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
      }

      .box-vip {
        position: absolute;
        top: 129px;
        left: 100px;
        width: 100px;
        height: 23px;
        display: flex;
        background: rgba(51, 54, 61, 1);
        border-radius: 5px;
        opacity: 0.7293999999999999;

        > p {
          font-size: 14px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 23px;
          margin-left: 8px;
        }

        > img {
          width: 16px;
          height: 16px;
          margin-top: 3px;
        }
      }

      .box-get {
        position: absolute;
        top: 50px;
        right: 20px;
        display: flex;
        width: 50px;
        height: 20px;

        .get-img {
          display: block;
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
      }

      .box-img {
        position: absolute;
        top: 105px;
        right: 20px;
        width: 80px;
        height: 60px;
        text-align: right;
        line-height: 30px;
      }
    }
  }

  .containter {
    position: relative;
    width: 100%;
    height: 100%;

    .content-member {
      position: absolute;
      top: -34px;
      left: 20px;
      width: 336px;
      height: 68px;
      display: flex;
      background: rgba(51, 54, 61, 1);
      box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
      border-radius: 17px;

      .member-canter {
        position: relative;
        width: 120px;
        height: 100%;

        > a {
          text-decoration: none;
          font-size: 18px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 68px;
        }

        > span {
          position: absolute;
          right: 0;
          top: 10px;
          display: block;
          width: 1px;
          height: 47px;
          background-color: #979797;
        }
      }

      .member-voucher {
        position: relative;
        width: 215px;
        height: 100%;

        .voucher-p {
          position: absolute;
          left: 20px;
          top: 10px;
          font-size: 12px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          // line-height: 17px;
        }

        .voucher-p1 {
          top: 15px;
        }

        .voucher-p2 {
          top: 40px;
        }

        .redpacket {
          position: absolute;
          top: 17px;
          right: 20px;
          width: 34px;
          height: 34px;
        }
      }
    }

    .content-empty {
      width: 100%;
      height: 60px;
    }

    .my-indent {
      width: 100%;
      height: 137px;
      background: rgba(51, 54, 61, 1);
      border-radius: 6px;

      .indent-title {
        position: relative;
        width: 100%;
        height: 35px;
        display: flex;

        .title-p {
          font-size: 18px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 45px;
          margin-left: 20px;
        }

        .title-all {
          position: absolute;
          right: 20px;
          display: flex;

          .all-p {
            font-size: 14px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 35px;
            margin-right: 5px;
          }

          .all-img {
            display: block;
            width: 8px;
            height: 8px;
            margin-top: 13px;
          }
        }
      }

      .indent-nav {
        width: 100%;
        height: 100%;

        .nav-item {
          display: flex;
          width: 100%;
          height: 100%;

          .item-li {
            width: 50px;
            height: 102px;
            // background-color: aqua;
            text-align: center;
            margin-left: 35px;

            .li-img {
              display: block;
              width: 24px;
              height: 24px;
              margin-left: 13px;
              margin-top: 20px;
            }

            .li-p {
              margin-top: 15px;
              font-size: 14px;
              font-family: PingFangSC-Regular;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
              line-height: 20px;
            }
          }
        }
      }
    }

    .content-list {
      margin-top: 30px;
      width: 100%;
      height: 100%;
      background-color: #33363d;

      .list-item {
        width: 100%;
        height: 100%;

        .item-vip {
          position: relative;
          width: 100%;
          height: 54px;

          .vip-ka {
            width: 80px;
            height: 22px;
            font-size: 16px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 54px;
            margin-left: 22px;
            text-align: left;
          }

          .vip-img {
            position: absolute;
            top: 23px;
            right: 15px;
            width: 5px;
            height: 8px;
          }
        }
      }
    }

    .empty-pure {
      width: 100%;
      height: 80px;
    }
  }
}
</style>
