<template>
  <div class="movie-main">
    <div class="header">
      <span class="city" @click="shows">
        {{selected}}
        <img src="@assets/imgs/details/xia.png" alt>
      </span>
      <span class="title">影院</span>
      <a href="#">
        <img class="icon icon-share" :src="require('@/assets/imgs/icons/share.png')" alt>
      </a>
    </div>
    <div class="main" id="main">
      <div class="shuju" v-show="hides">
        <ul>
          <span class="ding">定位城市</span>
          <span class="wei" @click="zhengz">郑州</span>
          <span class="hot">热门城市</span>
          <li :key="q.id" v-for="q in acc" value @click="hotcity(q.id,$event)">{{q.name}}</li>
        </ul>

        <ol class="ol clearfix">
          <span class="qita" id="1">A</span>
          <li v-for="m in users.A" :key="m.id" @click="othercity(m.id,$event)">{{m.name}}</li>
          <span class="qita" id="2">B</span>
          <li v-for="m in users.B" @click="othercity(m.id,$event)">{{m.name}}</li>
          <span class="qita" id="3">C</span>
          <li v-for="m in users.C" @click="othercity(m.id,$event)">{{m.name}}</li>
          <span class="qita" id="4">D</span>
          <li v-for="m in users.D" @click="othercity(m.id,$event)">{{m.name}}</li>
          <span class="qita" id="5">E</span>

          <li v-for="m in users.E" @click="othercity(m.id,$event)">{{m.name}}</li>
          <span class="qita" id="6">F</span>
          <li v-for="m in users.F" @click="othercity(m.id,$event)">{{m.name}}</li>
          <span class="qita" id="7">G</span>
          <li v-for="m in users.G" @click="othercity(m.id,$event)">{{m.name}}</li>
          <span class="qita" id="8">H</span>
          <li v-for="m in users.H" @click="othercity(m.id,$event)">{{m.name}}</li>
          <span class="qita" id="9">J</span>
          <li v-for="m in users.J" @click="othercity(m.id,$event)">{{m.name}}</li>
          <span class="qita" id="10">K</span>
          <li v-for="m in users.K" @click="othercity(m.id,$event)">{{m.name}}</li>
          <span class="qita" id="11">L</span>
          <li v-for="m in users.L" @click="othercity(m.id,$event)">{{m.name}}</li>
          <span class="qita" id="12">M</span>
          <li v-for="m in users.M" @click="othercity(m.id,$event)">{{m.name}}</li>
          <span class="qita" id="13">N</span>
          <li v-for="m in users.N" @click="othercity(m.id,$event)">{{m.name}}</li>
          <span class="qita" id="14">P</span>
          <li v-for="m in users.P" @click="othercity(m.id,$event)">{{m.name}}</li>
          <span class="qita" id="15">Q</span>
          <li v-for="m in users.Q" @click="othercity(m.id,$event)">{{m.name}}</li>
          <span class="qita" id="16">S</span>
          <li v-for="m in users.S" @click="othercity(m.id,$event)">{{m.name}}</li>
          <span class="qita" id="17">T</span>
          <li v-for="m in users.T" @click="othercity(m.id,$event)">{{m.name}}</li>
          <span class="qita" id="18">W</span>
          <li v-for="m in users.W" @click="othercity(m.id,$event)">{{m.name}}</li>
          <span class="qita" id="19">X</span>
          <li v-for="m in users.X" @click="othercity(m.id,$event)">{{m.name}}</li>
          <span class="qita" id="20">Y</span>
          <li v-for="m in users.Y" @click="othercity(m.id,$event)">{{m.name}}</li>
          <span class="qita" id="21">Z</span>
          <li v-for="m in users.Z" @click="othercity(m.id,$event)">{{m.name}}</li>
        </ol>
        <div class="wrapper" ref="wrapper">
          <span class="spone">当前</span>
          <span class="sptwo">热门</span>
          <span class="spthree">其他</span>
          <ul class="content">
            <li
              class="lis"
              @touchstart="gomove(z.id,$event)"
              v-for="z in aca"
              :key="z.id"
            >{{z.title}}</li>
          </ul>

          <div class="loading-wrapper"></div>
        </div>
      </div>
    </div>
    <div class="du">我在: 金水区绿地新都会</div>
    <div class="movie-card">
      <ul>
		  <router-link tag="li" v-for="stu in studios" :key="stu.id" :to="{name:'details',params:{id:stu.id}}" >
			  <p class="pn">{{stu.name}}</p>
			  <p class="pt">{{stu.title}}</p>
			  <span class="ph-hui">惠</span>
			  <p class="ph">{{stu.hui}}</p>
			  <span class="pg-guan">观</span>
			  <p class="pg">{{stu.guan}}</p>
			  <span class="pk-kai">卡</span>
			  <p class="pk">{{stu.kai}}</p>
			  <span class="spj">{{stu.price}}起</span>
			  <span class="spdi">{{stu.distance}}</span>
		  </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import city from "../../../cityData.json";
export default {
  name: "Cinema",
  data() {
    return {
      users: {},
      selected: "郑州",
      arr: [],
      acc: [],
      hides: false,
      n: 0,
      liss: [],
      qita: [],
      aca: [
        {
          id: 1,
          title: "A"
        },
        {
          id: 2,
          title: "B"
        },
        {
          id: 3,
          title: "C"
        },
        {
          id: 4,
          title: "D"
        },
        {
          id: 5,
          title: "E"
        },
        {
          id: 6,
          title: "F"
        },
        {
          id: 7,
          title: "G"
        },
        {
          id: 8,
          title: "H"
        },
        {
          id: 9,
          title: "J"
        },
        {
          id: 10,
          title: "K"
        },
        {
          id: 11,
          title: "L"
        },
        {
          id: 12,
          title: "M"
        },
        {
          id: 13,
          title: "N"
        },
        {
          id: 14,
          title: "P"
        },
        {
          id: 15,
          title: "Q"
        },
        {
          id: 16,
          title: "S"
        },
        {
          id: 17,
          title: "T"
        },
        {
          id: 18,
          title: "W"
        },
        {
          id: 19,
          title: "X"
        },
        {
          id: 20,
          title: "Y"
        },
        {
          id: 21,
          title: "Z"
        }
      ],
      studios: [
        {
          id: 1,
          name: "耀莱成龙影城(建业店)",
          title: "金水区普惠路77号绿地之窗尚峰座正大乐城3楼",
          hui: "千与千寻等6部影片特惠",
          guan: "观影套餐限量特惠",
          kai: "开卡特惠,每单两张立减2元",
          price: "19.9元",
          distance: "1.7km"
        },
        {
          id: 2,
          name: "五一影城",
          title: "管城回族区东风南路商鼎路交汇处升龙广场4楼",
          hui: "千与千寻等2部影片特惠",
          guan: "观影套餐限量特惠",
          kai: "开卡特惠,每单两张立减2元",
          price: "19.9元",
          distance: "1.9km"
        },
        {
          id: 3,
          name: "奥斯卡熙地港影城",
          title: "金水区郑东新区农业东路和众意西路交叉口熙地港...",
          hui: "黑衣人等6部影片特惠",
          guan: "观影套餐限量特惠",
          kai: "开卡特惠,每单两张立减2元",
          price: "19.9元",
          distance: "4.7km"
        }
      ],

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
    },
    getGoods(id){
				this.$store.commit('cinemas/getGoods',id)
			},
    zhengz() {
      this.n = 1;
      this.shows();
      this.selected = "郑州";
    },
    hotcity(id, e) {
      var target = e.target;
      this.acc.find(item => {
        this.n = 1;
        this.shows();
        if (item.id == id) {
          this.selected = item.name;
          return this.selected;
        }
      });
    },
    othercity(id, e) {
      var target = e.target;

      this.arr.find(item => {
        this.n = 1;
        this.shows();
        if (item.id == id) {
          this.selected = item.name;
          return this.selected;
        }
      });
    },
    loadData() {},
    gomove(id, e) {
      var target = e.target;
      this.liss = target.parentNode.children;
      var body = document.querySelector("body");
      var shuju = document.querySelector(".shuju");
      this.qita = document.querySelectorAll(".qita");
      var that = this;

      for (var i in this.qita) {
        if (this.qita[i].id == id) {
          var h = this.qita[i].offsetTop - 50;
          var s = 0;
          s += h;
          console.log(id);
          console.log(s);
          document.getElementById("app").scrollTop = 1000;
          //document.body.scrollTop = s  ;
          shuju.style.top = -s + "px";
          console.log(document.body.scrollTop);
        }
      }
    }
  },
  created() {
    this.users = city;
    this.acc = this.users.hot;
    this.loadData();
  },
  mounted() {
    delete this.users.hot;
    var arrs = [],
      that = this;
    for (var j in that.acc) {
      that.acc.splice(j + 6, 10);
    }
    for (var i in that.users) {
      that.arr.push(...that.users[i]);
    }

    // 		var lis = document.querySelectorAll('.lis');
    // 		var n = 0;
    // 		for(var i = 0; i< lis.length; i++){
    // 			lis[i].ontouchstart = function(){
    // 				 n++;
    // 				 if(lis[i].id == aca.id){
    // 					 console.log('aaa');
    // 				 }
    //
    //
    // 			}
    //		}
  }

}
</script>

<style lang='scss' scoped>
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

body {
  display: inline-block;
}
.header {
  width: 100%;
  height: 44px;
  background: rgba(51, 54, 61, 1);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 17.5px;
  z-index: 999999;
  box-sizing: border-box;
  .city {
    font-size: 14px;
    img {
      width: 15px;
      height: 10px;
    }
  }
  .title {
    position: absolute;
    left: 170px;
    font-size: 18px;
  }
  a {
    display: block;
    width: 17px;
    height: 17px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.main {
  width: 100%;
}
.shuju {
  width: 100%;
  position: absolute;
  top: 45px;
  background-color: black;
  z-index: 999999;
  ul {
    width: 90%;
    margin: 0 auto;
    height: 440px;
    .ding {
      display: block;
      width: 60px;
      height: 40px;
      color: rgba(247, 247, 247, 1);
      line-height: 50px;
      margin-left: 10px;
    }
    .wei {
      display: block;
      width: 90px;
      line-height: 30px;
      margin-top: 10px;
      margin-left: 10px;
      height: 30px;
      border: 2px solid rgba(249, 195, 74, 1);
    }
    .hot {
      display: block;
      width: 60px;
      height: 20px;
      color: rgba(247, 247, 247, 1);
      line-height: 20px;
      margin-top: 18px;
      margin-left: 10px;
    }
    li {
      width: 90px;
      height: 30px;
      overflow: hidden;
      background-color: #33363d;
      line-height: 30px;
      margin: 10px 10px;
      float: left;
    }
  }
  ol {
    width: 90%;
    margin: 5px auto;

    .qita {
      display: block;
      width: 60px;
      float: left;
      font-size: 18px;
      text-align: left;
      margin-left: 10px;
      color: rgba(247, 247, 247, 1);
      line-height: 10px;
    }
    li {
      font-size: 14px;
      width: 100%;

      overflow: hidden;
      text-align: left;
      line-height: 30px;
      margin: 15px;
      float: left;
    }
  }
  .wrapper {
    display: fixed;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 100px;
    width: 25px;
    height: 780px;
    span {
      display: block;
      margin-top: 5px;
    }
    .content {
      width: 11px;
      position: absolute;
      right: 20px;
      top: 55px;
      background-color: black;
      .lis {
        width: 15px;
        height: 12px;
        background-color: black;
        font-size: 12px;
        line-height: 12px;
        float: left;
        margin: 3px 10px;
        color: rgba(130, 130, 130, 1);
      }
    }
  }
}
.du {
  width: 100%;
  height: 30px;
  margin-top: 50px;
  line-height: 30px;
  font-size: 12px;
  color: white;
  background: rgba(44, 47, 54, 1);
}
.movie-card {
  width: 100%;

  ul {
    width: 335px;
    height: 650px;
    margin: 0 auto;
    li {
      width: 100%;
      height: 146px;
      position: relative;
      float: left;
      background: rgba(51, 54, 61, 1);
      margin-top: 15px;
      border-radius: 6px;

      p {
        margin-top: 10px;
        font-size: 12px;
        width: 150px;
        height: 17px;
        font-size: 12px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 17px;

        opacity: 0.5865;
      }
      .pn {
        width: 180px;
        line-height: 20px;
        height: 20px;
        font-weight: 500;
        font-size: 14px;
        color: white;

        opacity: 1;
      }
      .pt {
        width: 250px;
        margin-left: 20px;
        height: 17px;
        overflow: hidden;
        line-height: 17px;
      }
      .ph {
        margin-left: 45px;
      }
      .ph-hui {
        position: absolute;
        left: 25px;
        margin-top: 8px;
        width: 18px;
        line-height: 19px;
        height: 19px;
        display: block;
        background: linear-gradient(
          135deg,
          rgba(235, 110, 117, 1) 0%,
          rgba(247, 166, 83, 1) 100%
        );
        border-radius: 4px;
      }
      .pg {
        margin-left: 30px;
      }
      .pg-guan {
        display: block;
        position: absolute;
        left: 25px;
        margin-top: 9px;
        width: 18px;
        height: 19px;
        line-height: 19px;
        background: linear-gradient(
          135deg,
          rgba(176, 70, 157, 1) 0%,
          rgba(97, 72, 170, 1) 100%
        );
        border-radius: 4px;
      }
      .pk {
        margin-left: 50px;
      }
      .pk-kai {
        display: block;
        position: absolute;
        left: 25px;
        margin-top: 9px;
        width: 18px;
        height: 19px;
        line-height: 19px;
        background: linear-gradient(
          135deg,
          rgba(50, 36, 149, 1) 0%,
          rgba(49, 56, 172, 1) 100%
        );
        border-radius: 4px;
      }
      .spj {
        position: absolute;
        right: 16px;
        top: 16px;
        color: rgba(251, 195, 74, 1);
        font-size: 14px;
      }
      .spdi {
        position: absolute;
        right: 16px;
        top: 38px;
      }
    }
  }
}
</style>