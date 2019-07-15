<template>
  <div class="order">
    <div class="head">
      <img class="left" src="@assets/imgs/order/left.png" @click="$router.go(-1)" alt>
      <p class="cent">我的订单</p>
      <p class="right">编辑</p>
    </div>
    <div class="nav">
      <li :class="{ 'active': type === 'all'}" @click="changeType('all')">
        全部
        <p class="border"></p>
      </li>
      <li :class="{ 'active': type === 'payment'}" @click="changeType('payment')">
        待付款
        <p class="border"></p>
      </li>
      <li :class="{ 'active': type === 'remain'}" @click="changeType('remain')">
        待评价
        <p class="border"></p>
      </li>
      <li :class="{ 'active': type === 'await'}" @click="changeType('await')">
        退款
        <p class="border"></p>
      </li>
    </div>
    <router-link
      tag="div"
      class="tic"
      v-for="tic in getlist"
      :key="tic.id"
      :to="{name:'tick',params:{id:tic.id}}"
    >
      <div class="tic-top">
        <p class="cine">{{tic.cine}}</p>
        <img class="right" src="@assets/imgs/order/right.png" alt>
        <p class="inf">{{tic.Inf}}</p>
      </div>
      <div class="tic-cent">
        <img class="imgs" :src="tic.url" alt>
        <p class="tit">{{tic.title}}</p>
        <p class="page">{{tic.page}}张</p>
        <p class="data">{{tic.time}} {{tic.time1}}</p>
        <p class="hall">{{tic.hall}}</p>
      </div>
      <div class="mosh">总价:{{tic.moth}}元</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "order",

  data() {
    return {
      type: "all",
      all: [],
			types:this.$route.params.type
    };
  },

  methods: {
    changeType(type) {
      this.type = type;
    },
    getdata() {
      var temp = [];
      Object.assign(temp, this.all);
      if (this.type == "all") {
        return this.all;
      } else if (this.type == "payment") {
        return temp.filter(item => item.type == this.type);
      } else if (this.type == "remain") {
        return temp.filter(item => item.type == this.type);
      } else if (this.type == "await") {
        return temp.filter(item => item.type == this.type);
      }
    },
		alter(){
			if(!this.types){
				this.type;
			}else{
				this.type=this.types;
				console.log(this.type);
			}
// 			if(this.types){
// 				this.type=this.types;
// 			}else{
// 				this.type;
// 			}
		}
  },
  computed: {
    getlist() {
      return this.getdata();
    }
  },

  created() {
    this.all = this.$store.state.tick.tick;
		this.alter();
  }
};
</script>

<style lang='scss' scoped>
.head {
  width: 350px;
  height: 22px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  .left {
    width: 12px;
    height: 12px;
    margin-top: 6px;
  }
  .cent {
    width: 64px;
    height: 22px;
    font-size: 16px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 22px;
  }
  .right {
    width: 42px;
    height: 20px;
    border-radius: 2px;
    border: 1px solid rgba(249, 195, 74, 1);
    line-height: 22px;
  }
}
.nav {
  width: 375px;
  height: 14px;
  list-style: none;
  li {
    float: left;
    margin-left: 60px;
    height: 14px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 14px;
    &:nth-child(1) {
      margin-left: 32px;
    }
  }
  .active {
    position: relative;
    color: #f9c34a;
    .border {
      margin-top: 4px;
      height: 3px;
      background-color: #f9c34a;
    }
  }
}
.tic {
  width: 335px;
  height: 161px;
  background: rgba(51, 54, 61, 1);
  border-radius: 6px;
  margin: 20px auto;
  overflow: hidden;
  .tic-top {
    width: 300px;
    height: 14px;
    display: flex;
    justify-content: space-between;
    margin: 10px auto;
    .cine {
      width: 84px;
      height: 14px;
      font-size: 14px;
      color: white;
    }
    .right {
      width: 14px;
      height: 14px;
      transform: translateX(-70px);
    }
    .inf {
      height: 14px;
      font-size: 14px;
      color: white;
    }
  }
  .tic-cent {
    position: relative;
    width: 300px;
    height: 81px;
    margin: 0 auto;
    margin-top: 20px;
    .imgs {
      width: 70px;
      height: 81px;
      float: left;
    }
    .tit {
      position: absolute;
      top: 10px;
      left: 90px;
      width: 70px;
      height: 14px;
      text-align: left;
      font-size: 14px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 14px;
    }
    .page {
      position: absolute;
      top: 10px;
      left: 240px;
      height: 14px;
      font-size: 14px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 14px;
    }
    .data {
      position: absolute;
      top: 30px;
      left: 90px;
      height: 14px;
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
    }
    .hall {
      position: absolute;
      height: 14px;
      left: 90px;
      top: 50px;
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
    }
  }
  .mosh {
    width: 300px;
    margin: 10px auto;
    text-align: left;
    height: 12px;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
  }
}
</style>
