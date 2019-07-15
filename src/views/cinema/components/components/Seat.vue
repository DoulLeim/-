<template>
  <div class="Seat-main">
    <div class="seat-menu">
      <ul class="row-num">
        <li class="num" v-for="(i,index) in seatArr" :key="index">{{index + 1}}</li>
      </ul>
      <ul class="seat-item">
        <li class="seat-row" v-for="(i,index) in seatArr" :key="index">
          <div
            :class="{'seat-list':n.seat===1,'no-seat':n.seat===0,'choosable':n.choosest===0,'disable':n.choosest===1,'selected':n.choosest===2}"
            v-for="n in i"
            :key="n.index"
            @click="check(n.index)"
          ></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Seat",
  data() {
    return {
      seatArr: [
        [
          { seat: 0, choosest: 0, index: -1 },
          { seat: 0, choosest: 0, index: -2 },
          { seat: 1, choosest: 0, index: 1 },
          { seat: 1, choosest: 1, index: 2 },
          { seat: 1, choosest: 0, index: 3 },
          { seat: 1, choosest: 0, index: 4 },
          { seat: 1, choosest: 1, index: 5 },
          { seat: 1, choosest: 0, index: 6 },
          { seat: 1, choosest: 0, index: 7 },
          { seat: 1, choosest: 0, index: 8 },
          { seat: 0, choosest: 0, index: -3 },
          { seat: 0, choosest: 0, index: -4 }
        ],
        [
          { seat: 0, choosest: 0, index: -5 },
          { seat: 1, choosest: 0, index: 9 },
          { seat: 1, choosest: 0, index: 10 },
          { seat: 1, choosest: 1, index: 11 },
          { seat: 1, choosest: 0, index: 12 },
          { seat: 1, choosest: 0, index: 13 },
          { seat: 1, choosest: 0, index: 14 },
          { seat: 1, choosest: 1, index: 15 },
          { seat: 1, choosest: 0, index: 16 },
          { seat: 1, choosest: 0, index: 17 },
          { seat: 1, choosest: 0, index: 18 },
          { seat: 0, choosest: 0, index: 19 }
        ],
        [
          { seat: 1, choosest: 0, index: 20 },
          { seat: 1, choosest: 0, index: 21 },
          { seat: 1, choosest: 0, index: 22 },
          { seat: 1, choosest: 1, index: 23 },
          { seat: 1, choosest: 0, index: 24 },
          { seat: 1, choosest: 0, index: 25 },
          { seat: 1, choosest: 1, index: 26 },
          { seat: 1, choosest: 0, index: 27 },
          { seat: 1, choosest: 0, index: 28 },
          { seat: 1, choosest: 0, index: 29 },
          { seat: 1, choosest: 0, index: 30 },
          { seat: 1, choosest: 0, index: 31 }
        ],
        [
          { seat: 1, choosest: 0, index: 32 },
          { seat: 1, choosest: 0, index: 33 },
          { seat: 1, choosest: 0, index: 34 },
          { seat: 1, choosest: 0, index: 35 },
          { seat: 1, choosest: 0, index: 36 },
          { seat: 1, choosest: 0, index: 37 },
          { seat: 1, choosest: 0, index: 38 },
          { seat: 1, choosest: 0, index: 39 },
          { seat: 1, choosest: 0, index: 40 },
          { seat: 1, choosest: 0, index: 41 },
          { seat: 1, choosest: 0, index: 42 },
          { seat: 1, choosest: 0, index: 43 }
        ],
        [
          { seat: 1, choosest: 0, index: 44 },
          { seat: 1, choosest: 0, index: 45 },
          { seat: 1, choosest: 0, index: 46 },
          { seat: 1, choosest: 0, index: 47 },
          { seat: 1, choosest: 0, index: 48 },
          { seat: 1, choosest: 0, index: 49 },
          { seat: 1, choosest: 0, index: 50 },
          { seat: 1, choosest: 0, index: 51 },
          { seat: 1, choosest: 0, index: 52 },
          { seat: 1, choosest: 0, index: 53 },
          { seat: 1, choosest: 0, index: 54 },
          { seat: 1, choosest: 0, index: 55 }
        ],
        [
          { seat: 1, choosest: 0, index: 56 },
          { seat: 1, choosest: 0, index: 57 },
          { seat: 1, choosest: 0, index: 58 },
          { seat: 1, choosest: 0, index: 59 },
          { seat: 1, choosest: 0, index: 60 },
          { seat: 1, choosest: 0, index: 61 },
          { seat: 1, choosest: 0, index: 62 },
          { seat: 1, choosest: 0, index: 63 },
          { seat: 1, choosest: 0, index: 64 },
          { seat: 1, choosest: 0, index: 65 },
          { seat: 1, choosest: 0, index: 66 },
          { seat: 1, choosest: 0, index: 67 }
        ],
        [
          { seat: 1, choosest: 0, index: 68 },
          { seat: 1, choosest: 0, index: 69 },
          { seat: 1, choosest: 0, index: 70 },
          { seat: 1, choosest: 0, index: 71 },
          { seat: 1, choosest: 0, index: 72 },
          { seat: 1, choosest: 0, index: 73 },
          { seat: 1, choosest: 0, index: 74 },
          { seat: 1, choosest: 0, index: 75 },
          { seat: 1, choosest: 0, index: 76 },
          { seat: 1, choosest: 0, index: 77 },
          { seat: 1, choosest: 0, index: 78 },
          { seat: 1, choosest: 0, index: 79 }
        ],
        [
          { seat: 1, choosest: 0, index: 80 },
          { seat: 1, choosest: 0, index: 81 },
          { seat: 1, choosest: 0, index: 82 },
          { seat: 1, choosest: 0, index: 83 },
          { seat: 1, choosest: 0, index: 84 },
          { seat: 1, choosest: 0, index: 85 },
          { seat: 1, choosest: 0, index: 86 },
          { seat: 1, choosest: 0, index: 87 },
          { seat: 1, choosest: 0, index: 88 },
          { seat: 1, choosest: 0, index: 89 },
          { seat: 1, choosest: 0, index: 90 },
          { seat: 1, choosest: 0, index: 91 }
        ],
        [
          { seat: 1, choosest: 0, index: 92 },
          { seat: 1, choosest: 0, index: 93 },
          { seat: 1, choosest: 0, index: 94 },
          { seat: 1, choosest: 0, index: 95 },
          { seat: 1, choosest: 0, index: 96 },
          { seat: 1, choosest: 0, index: 97 },
          { seat: 1, choosest: 0, index: 98 },
          { seat: 1, choosest: 0, index: 99 },
          { seat: 1, choosest: 0, index: 100 },
          { seat: 1, choosest: 0, index: 101 },
          { seat: 1, choosest: 0, index: 102 },
          { seat: 1, choosest: 0, index: 103 }
        ]
      ]
    };
  },
  computed:{
    commitst: function(){
      for(var k in this.seatArr){
        for(var l in this.seatArr[k]){
          if(this.seatArr[k][l].choosest===2){
            return 1
          }
        }
      }
      return 0;
    },
    people(){
      var a = 0;
      for(var u in this.seatArr){
        for(var y in this.seatArr[u]){
          if(this.seatArr[u][y].choosest===2){
            a ++;
          }
        }
      }
      return a;
    },
    seats(){
      var s = "";
      for(var uu in this.seatArr){
        for(var yy in this.seatArr[uu]){
          if(this.seatArr[uu][yy].choosest===2){
            s += (Number(uu) + 1) + "排" + yy + "座"
          }
        }
      };
      return s
    }
  },
  methods: {
    check: function(index) {
      ok:
      for (var i in this.seatArr) {
        for (var n in this.seatArr[i]) {
          if (this.seatArr[i][n].index === index && this.seatArr[i][n].choosest !== 1) {
            this.seatArr[i][n].choosest =
              this.seatArr[i][n].choosest === 0
                ? (this.seatArr[i][n].choosest = 2)
                : (this.seatArr[i][n].choosest = 0);
                break ok;
          }
        }
      }
      this.$parent.choosed = 0;
      this.$parent.commitst = this.commitst;
      this.$parent.people = this.people;
      this.$parent.seats = this.seats;
    },
    checkseat: function(num) {
      var ok = 0;
      for (var z in this.seatArr) {
        for (var x in this.seatArr[z]) {
          if(this.seatArr[z][x].choosest===2){
            this.seatArr[z][x].choosest = 0;
          } 
        }
      }
      com: if (num > 0) {
        for (var i in this.seatArr) {
          ok = 0;
          for (var n in this.seatArr[i]) {
            if (
              this.seatArr[i][n].choosest === 0 &&
              this.seatArr[i][n].seat === 1
            ) {
              ok++;
            } else {
              ok = 0;
            }
            if (ok == num) {
              for (var m = 0; m < num; m++) {
                this.seatArr[i][n - m].choosest = 2;
              }
              break com;
            }
          }
        }
      }
      this.$parent.commitst = this.commitst;
      this.$parent.people = this.people;
      this.$parent.seats = this.seats;
    }
  }
};
</script>

<style lang='scss' scoped>
.seat-menu {
  margin: 50px 0 80px;
  height: 312px;
  width: 100%;
  .row-num {
    padding: 30px 0;
    display: inline-block;
    float: left;
    margin-left: 10px;
    background: rgba(51, 54, 61, 1);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.35);
    border-radius: 12px;
    opacity: 0.6233;
    .num {
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 22px;
      margin-bottom: 5px;
    }
    .num:nth-child(3n) {
      margin-bottom: 15px;
    }
  }
  .seat-item {
    margin-top: 30px;
    float: right;
    margin-right: 10px;
    .seat-row {
      width: 100%;
      div {
        height: 20px;
        width: 20px;
        margin-right: 5px;
        margin-bottom: 5px;
        float: left;
      }
      div:nth-child(4n) {
        margin-right: 15px;
      }
      .seat-list {
        background: rgba(216, 216, 216, 1);
        border-radius: 3px;
        opacity: 0.5988;
      }
      .no-seat {
        visibility: hidden;
      }
      .choosable {
        background: rgba(144, 146, 148, 1);
      }
      .disable {
        background: rgba(249, 195, 74, 1);
      }
      .selected {
        background: rgba(101, 72, 169, 1);
      }
    }
    .seat-row:nth-child(3n) {
      margin-bottom: 15px;
    }
    .seat-row::after {
      content: "";
      display: block;
      clear: both;
    }
  }
}
</style>
