<template>
  <div class="city-list-main">
    <!-- 地图 无需内容 -->
    <div id="allmap"></div>
    <Baselayer ref="baselayer">
      <template v-slot:header>
        <TopBackBar>
          选择城市
          <template v-slot:img-right>
            <span></span>
          </template>
        </TopBackBar>
      </template>
      <template v-slot:default>
        <div class="search-area">
          <div class="input-box">
            <input class="search-input" type="text" placeholder="输入城市" v-model.trim="searchText">
          </div>
          <span @click="searchText=''" class="btn">取消</span>
        </div>
       
        <div class="city-block-list city-search-list">
            <ul class="city-list">
              <li @click="selectSearchCity(city)" class="city-item" v-for="city in searchLikeCitys" :key="city.id">{{city.name}}</li>
            </ul>
        </div>
        <div class="block-item block-position">
          <p class="title">定位城市</p>
          <div class="list-wrapper">
            <ul class="city-list">
              <li @click="selectOk" class="active city">{{currentCity.name?currentCity.name:'正在定位'}}</li>
            </ul>
            <span @click="baiduLocation" class="icon">
              <img :src="require('@/assets/imgs/icons/current-position.png')" alt>
            </span>
          </div>
        </div>
        <div class="block-item block-position-his">
          <p class="title">历史访问城市</p>
          <ul class="city-list">
              <li @click="selectCity(city)" class="city" v-for="city in hisCitysList" :key="city.id">{{city.name}}</li>
          </ul>
        </div>
        <div class="block-item block-position-hot">
          <p class="title">热门城市</p>
          <ul class="city-list">
            <li @click="selectCity(city)" class="city" v-for="city in hotCitysList" :key="city.id">{{city.name}}</li>
          </ul>
        </div>
        <div class="city-block-list">
          <div class="city-block" v-for="(value,key) in citysList" :key="key">
            <p class="first-char" :class="'first-char-'+key">{{key}}</p>
            <ul class="city-list">
              <li @click="selectCity(city)" class="city-item" v-for="city in value" :key="city.id">{{city.name}}</li>
            </ul>
          </div>
        </div>
      </template>
    </Baselayer>
    <div class="index-list-nav">
      <div class="text-group" @click="goTop">
        <span class="text">定位</span>
      <span class="text">历史</span>
      <span class="text">热门</span>
      </div>  
      
      <ul class="char-index-nav"  v-scroll>
        <li v-for="(value,key) in citysList" :key="key">{{key}}</li>
      </ul>
    </div>
    <div class="char-box">{{char}}</div>
  </div>
</template>

<script>
import TopBackBar from "@/components/TopBackBar";
import Baselayer from "@/components/BaseLayer";
import citys from "./data.json";
import { setTimeout } from "timers";
import _ from "lodash";
import Storage from "@/utils/storage";
import {mapMutations} from 'vuex';

const POSITION_KEY = "CURRENT_CITYS";
export default {
  name: "CityList",
  components: {
    TopBackBar,
    Baselayer
  },
  data() {
    return {
      searchCitysList:[],
      citys,
      char: "A",
      city: "郑州",
      searchText: "",
      currentCity: {}
    };
  },

  created() {
    this.searchCitysList = _.chain(this.citys)
   .filter((v,k)=> /[A-Z]/.test(k))
   .reduce((arr, v, k)=> arr.concat(v), [])
   .value();
  },
  mounted() {
    this.baiduLocation();
  },
  methods: {
    goTop(){
      //获取滚动对象
      if(!this.bScroll){
        this.bScroll = this.$refs.baselayer.$scroll;
      }
      this.bScroll.scrollTo(0,0,100,'ease');
    },
    //确定
    selectOk(){
      this.$store.commit('home/SET_LOCALTION',this.currentCity);
      setTimeout(()=>{
        //跳转
        this.$router.push('/home');
      },200)
    },
    selectSearchCity(city){
      this.selectCity(city);
      this.searchCitysList = [];
      this.searchText = city.name;
      document.querySelector('.search-input').blur();
    },
    selectCity(city){
      //获取滚动对象
      if(!this.bScroll){
        this.bScroll = this.$refs.baselayer.$scroll;
      }
      this.currentCity = city;
      this.bScroll.scrollTo(0,0,100,'ease');
    },
    baiduLocation() {
      this.currentCity = {};
      let _that = this;
      /*eslint-disable*/
      // 百度地图定位
      var map = new BMap.Map("allmap");
      var point = new BMap.Point(116.331398, 39.897445);
      map.centerAndZoom(point, 12);
      var geoc = new BMap.Geocoder();
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(
        function(r) {
          if (this.getStatus() === BMAP_STATUS_SUCCESS) {
            console.log("定位成功");
            console.log(r.point);
            geoc.getLocation(r.point, function(rs) {
              var addComp = rs.addressComponents;
              //city
              var city = addComp.city;
              if(_.endsWith(city, '市')){
                city = city.substr(0,city.length-1);
              }
              //模糊查询
              _that.currentCity = _that.searchCitysList.find(item=>_.includes(item.name,city));
              console.log(
                addComp.province +
                  ", " +
                  addComp.city +
                  ", " +
                  addComp.district +
                  ", " +
                  addComp.street +
                  ", " +
                  addComp.streetNumber
              );
            });
          } else {
            _that.currentCity = "定位失败";
            console.log("failed" + this.getStatus());
          }
        },
        { enableHighAccuracy: true }
      );
      /*eslint-disable*/
    }
  },
  computed: {
    
    citysList() {
      // var { A, B } = this.citys;
      return _.omit(this.citys, "hot");
    },
    hotCitysList() {
      return this.citys.hot;
    },
    //模糊查询结果
    searchLikeCitys(){
      if(!this.searchText) return [];
      return this.searchCitysList.filter(item=>_.includes(item.name,this.searchText))
    },
    hisCitysList(){
      return this.searchCitysList.filter(item=>/郑州|北京|上海/.test(item.name))
    }
  },
  directives: {
    // 封装指令 用于实现 滑动城市选择
    scroll(el, binding, vnode) {
      var vm = vnode.context;
      // 获取betterScroll 对象
      el.ontouchstart = function(e) {
        // 获取不动文字高度
        var topTextHeight = el.parentNode.firstElementChild.offsetHeight;
        document.querySelector(".char-box").style.display = "block";
        //阻止微信浏览器下拉回弹
        function fn(ev) {
          e.preventDefault();
        }
        document
          .querySelector("body")
          .addEventListener("touchstart", fn, { passive: false });
        el.style.border = "1px solid #828282";
        var touch = e.touches[0];
        el.ontouchmove = function(e) {
          var touch = e.touches[0];
          var topY = touch.pageY;
          // 距离顶部的距离 <0 按照A >height 按照Z
          var topDis = topY - (el.parentNode.offsetTop + topTextHeight  - el.offsetHeight / 2);
          // console.log(topDis)
          var citysKeys = _.keys(vm.citysList);
          var index = Math.floor((topDis / el.offsetHeight) * citysKeys.length);
          if (index < 0) index = 0;
          if (index > citysKeys.length - 1) index = citysKeys.length - 1;
          vm.char = citysKeys[index];
          if(!vm.bScroll){
            vm.bScroll = vm.$refs.baselayer.$scroll;
          }
          vm.bScroll.scrollToElement(
            ".city-block-list .first-char-" + vm.char,
            100,
            false,
            -60,
            "ease"
          );
        };
        el.ontouchend = function() {
          el.ontouchmove = null;
          el.style.border = "none";
          document.querySelector(".char-box").style.display = "none";
          document
            .querySelector("body")
            .removeEventListener("touchstart", fn, { passive: false });
        };
      };
    }
  }
};
</script>

<style lang='scss' scoped>
@import "../../../assets/style/common/common.scss";
.city-list-main {
  height: 100%;
  overflow: hidden;
  .char-box {
    display: none;
    position: fixed;
    left: 50%;
    top: 250px;
    width: 100px;
    height: 100px;
    font-size: 30px;
    margin-left: -50px;
    color: #fff;
    text-align: center;
    line-height: 100px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.5);
  }
  .search-area {
    width: 100%;
    height: 36px;
    box-sizing: border-box;
    padding: 0 $basePadding;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .input-box {
      height: 100%;
      flex-grow: 1;
      background-color: $baseBgLightColor;
      border-radius: 18px;
      padding-left: 50px;
      box-sizing: border-box;
      overflow: hidden;
      background-image: url("../../../assets/imgs/icons/search.png");
      background-repeat: no-repeat;
      background-position: 12px center;
      background-size: 18px 18px;
      > input {
        width: 100%;
        height: 36px;
        outline: none;
        border: none;
        border-width: 0;
        background-color: transparent;
        color: #fff;
      }
    }
    .btn {
      display: block;
      width: 36px;
      height: 36px;
      font-size: 10px;
      margin-left: 16px;
      text-align: center;
      line-height: 36px;
    }
  }
  .city-search-list{
    .city-item{
      text-align: left;
      text-align: left;
      height: 50px;
      line-height: 50px;
      &:last-child{
        border-bottom: 1px solid #565454;
      }
    }
  }
  .block-item {
    width: 100%;
    box-sizing: border-box;
    padding: 6px $basePadding;
    padding-right: 50px;
    text-align: left;
    .title {
      font-size: 12px;
      color: #f7f7f7;
      margin: 12px 0;
    }
    .list-wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .city-list {
        width: auto;
      }
      .icon {
        width: 30px;
        height: 30px;
        margin-left: 20px;
        opacity: 0.5;
        display: flex;
        justify-content: center;
        align-items: center;
        > img {
          width: 20px;
          height: 20px;
        }
      }
    }
    .city-list {
      display: flex;
      width: 100%;
      // justify-content: space-between;
      flex-wrap: wrap;
      .city {
        width: 90px;
        height: 30px;
        background: rgba(51, 54, 61, 1);
        margin: 5px 0;
        margin-right: 10px;
        text-align: center;
        line-height: 30px;
        &.active {
          border: 2px solid rgba(251, 195, 73, 1);
        }
      }
    }
  }
  .index-list-nav {
    position: absolute;
    right: 20px;
    top: 50%;
    width: 30px;
    transform: translateY(-50%);
    .text{
      font-size: 12px;
      color: #F1A363;
      line-height: 18px;
    }
    .char-index-nav{
      width: 100%;
      li {
        width: 100%;
        line-height: 17px;
        font-size: 12px;
        color: #828282;
        text-align: center;
      }
    }
  }

  ::v-deep .scroller-wrapper {
    .content {
      padding-top: 44px;
      padding-bottom: 20px;
    }
  }
  .city-block-list {
    width: $baseCenterWidth;
    margin: 16px auto;
    font-size: 14px;

    .city-block {
      width: 100%;
      margin: 0 auto;
      .first-char {
        text-align: left;
      }
      .city-list {
        .city-item {
          text-align: left;
          height: 50px;
          line-height: 50px;
        }
      }
    }
  }
}
</style>
