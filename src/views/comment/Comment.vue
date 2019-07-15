<template>
  <div class="comment-main">
    <div class="content">
      <div class="unity">
        <span class="hot-comment">观众热评</span>
        <span class="write-comment">写影评</span>
      </div>
      <ul class="comment-sort">
        <li class="item" @click="all">全部</li>
        <li class="item" @click="time">最新</li>
        <li class="item">
          陪伴是最长情的告白
          <span class="count">1902</span>
        </li>
        <li class="item">
          爱狗人士必看
          <span class="count">1902</span>
        </li>
        <li class="item" @click="good">
          好评
          <span class="count">5412</span>
        </li>
        <li class="item" @click="negative">
          差评
          <span class="count">69</span>
        </li>
        <li class="item">
          点映
          <span class="count">69</span>
        </li>
        <li class="item">
          购票
          <span class="count">5790</span>
        </li>
        <li class="item">
          影评大人
          <span class="count">13</span>
        </li>
        <li class="item">
          同城
          <span class="count">69</span>
        </li>
      </ul>
      <div class="more">
        <img class="more-pic" src="@/assets/comment/images/back.png" alt>
      </div>
      <ul class="comment-list">
        <li class="comment-item" v-for="p in list" :key="p.id">
          <img class="photo" :src="p.photo" alt>
          <span class="info">
            <p class="username">{{p.username}}</p>
            <span class="hot">
              <img v-for="(star,index) in p.star" :key="index" src="@/assets/comment/images/xing1.png" alt>
              <img src="@/assets/comment/images/xing2.png" alt>
              <img v-for="(star2,index) in p.star2" :key="p.id+index" src="@/assets/comment/images/xing3.png" alt>
              {{p.average}}
            </span>
          </span>
          <span class="tips">...</span>
          <p class="text">{{p.text}}</p>
          <div class="comment-footer">
            <span class="time">{{p.time}}</span>
            <span class="praise">
              <img @click="p.praise++" src="@/assets/comment/images/praise.png" alt>
              &nbsp;{{p.praise}}
            </span>
            <span class="comment">
              <img src="@/assets/comment/images/comment.png" alt>
              &nbsp;{{p.comment}}
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "comment",
  data() {
    return {
      list: [],
      star: []
    };
  },
  created() {
    this.list = this.$store.state.location.list;
    this.getStar();
  },
  methods: {
    getStar() {
      this.list.map(item=>{
        var num = Math.floor(item.average/2);
        item.star = num;
        if( 5 - num - 1 > 0){
          item.star2= 5 - num - 1;
        }
      })
    },
    time() {
      this.list = this.$store.getters['location/time'];
    },
    all() {
      this.list = this.$store.state.location.list;
    },
    good() {
      this.list = this.$store.getters['location/good'];
    },
    negative() {
      this.list = this.$store.getters['location/negative'];
    }
  }
};
</script>
<style lang='scss' scoped>
.comment-main {
  width: 100%;
  height: 100%;
  .content {
    width: 100%;
    overflow: hidden;
    .unity {
      position: relative;
      width: 100%;
      height: 50px;
      color: #fff;
      .hot-comment {
        position: absolute;
        top: 15px;
        left: 20px;
        font-size: 18px;
      }
      .write-comment {
        position: absolute;
        top: 10px;
        left: 280px;
        width: 54px;
        height: 25px;
        font-size: 12px;
        line-height: 25px;
        background: linear-gradient(
          150deg,
          rgba(242, 91, 134, 1) 0%,
          rgba(241, 172, 94, 1) 100%
        );
        box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
        border-radius: 13px;
      }
    }
    .comment-sort {
      display: flex;
      flex-flow: wrap;
      width: 100%;
      padding: 10px 50px 0 0;
      box-sizing: border-box;
      .item {
        height: 22px;
        font-size: 12px;
        line-height: 22px;
        margin: 5px 0 10px 14px;
        border-radius: 10px;
        padding: 0 10px;
        background-color: #33363d;
        .count {
          font-size: 10px;
          color: rgba($color: #fff, $alpha: 0.5);
        }
      }
    }
    .more {
      width: 100%;
      padding: 24px 0 38px 0;
      .more-pic {
        width: 14px;
        height: 14px;
        color: rgba($color: #fff, $alpha: 0.5);
        transform: rotate(-90deg);
      }
    }
    .comment-list {
      display: flex;
      flex-flow: column;
      width: 100%;

      .comment-item {
        position: relative;
        width: 100%;
        min-height: 150px;
        padding: 0 0 15px 0;
        overflow: hidden;
        .photo {
          position: absolute;
          left: 21px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .info {
          position: absolute;
          left: 85px;
          display: inline-block;
          width: 100px;
          height: 50px;
          text-align: left;
          .username {
            font-size: 14px;
            color: #fff;
            // text-indent: -18px;
            line-height: 30px;
          }
          img {
            width: 10px;
            height: 10px;
            padding: 0 2.5px;
            // margin-left: 5px;
          }
        }
        .tips {
          // position: absolute;
          font-size: 30px;
          margin-left: 251px;
        }
        .text {
          font-size: 12px;
          line-height: 18px;
          text-align: left;
          margin-top: 35px;
          padding: 0 20px;
          box-sizing: border-box;
        }
        .comment-footer {
          position: relative;
          width: 100%;
          font-size: 12px;
          line-height: 17px;
          .time {
            position: absolute;
            left: 19px;
            top: 10px;
          }
          .praise {
            position: absolute;
            left: 252px;
            top: 5px;
          }
          .comment {
            position: absolute;
            left: 300px;
            top: 6px;
          }
        }
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 48px;
    font-size: 18px;
    line-height: 48px;
    background: linear-gradient(
      150deg,
      rgba(242, 91, 134, 1) 0%,
      rgba(241, 172, 94, 1) 100%
    );
    box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
    // border-radius:6px;
  }
}
</style>    