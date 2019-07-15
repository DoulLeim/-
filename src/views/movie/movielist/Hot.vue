<template>
  <div class="hot-main">
    <ul class="hot-item">
      <router-link tag="li" :to="{name:'Details'}" class="hot-list" v-for="movie in movieListCom" :key="movie.id">
        <img class="cover-img" :src="movie.coverImg" alt>
        <img class="play" src="@/assets/imgs/icons/play.png" alt="">
        <div class="detail">
          <p class="p1">{{movie.title}}</p>
          <p class="p2">
            影火虫评分：
            <span>{{movie.rating.average}}</span>
          </p>
          <p class="p3">导演：{{movie.directorsStr}}</p>
          <p class="p4">主演：{{movie.castsStr}}</p>
          <router-link tag="div" class="buy" :to="{name:'buy'}">购买</router-link>
          <div class="tag1">
            <span>一周最热</span>
          </div>
          <div class="tag2">
            <span>口碑最佳</span>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import Axios from "axios";
// 导入电影API
const in_theaters = "http://59.110.138.169/api/douban/movie/in_theaters";
export default {
  name: "Hot",
  data() {
    return {
      movies: []
    };
  },
  created() {
    this.getMovie();
  },
  methods: {
    getMovie() {
      var url = in_theaters;
      Axios.get(url).then(res => {
        // res.data axios的结果
        this.movies = res.data.data;
        // console.log(this.movies);
      });
    }
  },
  computed: {
    movieListCom() {
      // map 遍历修改每一项
      var rs = this.movies.map(item => {
        // 给item 重新添加新属性 导演字符串
        // reduce 合并方法 第二个参数为初始值 a为合并后的值 b为下一个值
        item.directorsStr = item.directors.reduce((a, b) => {
          var str = a + "," + b.name;
          return str.substr(1);
        }, "");
        item.castsStr = item.casts.reduce((a, b) => {
          var str = a + "," + b.name;
          return str;
        }, "");
        item.castsStr = item.castsStr.substr(1);
        item.coverImg = "https://images.weserv.nl/?url=" + item.images.small;
        return item;
      });
      return rs;
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
.hot-main {
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 $basePadding;
  .hot-item {
    .hot-list {
      position: relative;
      margin-top: 25px;
      height: 170px;
      .cover-img {
        margin-top: -10px;
        position: absolute;
        left: 6.5px;
        width: 105px;
        height: 156px;
        border-radius: 6px;
        z-index: 1;
      }
      .play{
        position: absolute;
        top: 50px;
        left: 34px;
        width: 38px;
        height: 38px;
        z-index: 2;
      }
      .detail {
        position: relative;
        margin-top: 10px;
        margin-left: 6.5px;
        width: 335px;
        height: 146px;
        background: rgba(51, 54, 61, 1);
        box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.04);
        border-radius: 6px;
        .p1 {
          position: absolute;
          top: 15px;
          left: 115px;
          font-size: 16px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 16px;
        }
        .p2 {
          position: absolute;
          top: 40px;
          left: 115px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 14px;
          span {
            color: #fbc34a;
          }
        }
        .p3 {
          position: absolute;
          top: 74px;
          left: 116px;
          font-size: 12px;
          font-weight: 400;
          color: #979797;
          line-height: 12px;
        }
        .p4 {
          position: absolute;
          top: 92px;
          left: 116px;
          font-size: 12px;
          font-weight: 400;
          color: #979797;
          line-height: 12px;
        }
        .buy {
          color: #fff;
          position: absolute;
          top: 66px;
          left: 267px;
          width: 54px;
          height: 25px;
          background: linear-gradient(
            150deg,
            rgba(242, 91, 134, 1) 0%,
            rgba(241, 172, 94, 1) 100%
          );
          box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          line-height: 25px;
        }
        .tag1 {
          position: absolute;
          top: 118px;
          left: 116px;
          width: 48px;
          height: 17px;
          border-radius: 3px;
          border: 1px solid rgba(251, 195, 74, 1);
          span {
            display: block;
            color: #fbc34a;
            transform: scale(0.9);
            font-size: 12px;
            line-height: 17px;
            text-align: center;
          }
        }
        .tag2 {
          position: absolute;
          top: 118px;
          left: 174px;
          width:48px;
          height:17px;
          border-radius:3px;
          border:1px solid rgba(60,76,172,1);
          span {
            display: block;
            color: #3C4CAC;
            transform: scale(0.9);
            font-size: 12px;
            line-height: 17px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
