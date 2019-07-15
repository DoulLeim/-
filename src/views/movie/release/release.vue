<template>
  <div class="release">
   
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
          <!-- <li v-for="m in users.B" @click="othercity(m.id,$event)">{{m.name}}</li>
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
          <li v-for="m in users.Z" @click="othercity(m.id,$event)">{{m.name}}</li> -->
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
  </div>
</template>

<script>
import city from "../../../../cityData.json";
export default {
  name: "release",
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
      ]
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
</style>
