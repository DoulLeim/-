<template>
  <!-- 购票子组件 -->
  <div class="list">
    <div class="lit" v-for="list in data" :key="list.id">
      <div class="lit-left">
        <p class="left-p1">{{list.time}}</p>
        <p class="left-p2">{{list.time1}}散场</p>
      </div>
      <div class="lit-cent">
        <p class="cent-p1">{{list.title}}</p>
        <p class="cent-p2">{{list.hall}}</p>
      </div>
      <div class="moth">{{list.moth}}元</div>
      <router-link tag="div" class="btn" :to="{name:'chooseSeat',params:{id:list.id}}">购票</router-link>
    </div>
  </div>
</template>

<script>
import listApi from "@/api/list.js";

export default {
  name: "list",
  data() {
    return {
      data: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    // 调用豆瓣接口
    getList() {
      listApi.getLists().then(res => {
        this.data = res;
        console.log(res);
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.lit {
  width: 335px;
  height: 91px;
  background: rgba(51, 54, 61, 1);
  margin: 10px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .lit-left {
    .left-p1 {
      width: 45px;
      height: 25px;
      font-size: 18px;
      line-height: 25px;
      color: white;
      margin-left: 10px;
    }
    .left-p2 {
      width: 60px;
      height: 17px;
      font-size: 12px;
      font-weight: 400;
      line-height: 17px;
    }
  }
  .lit-cent {
    .cent-p1 {
      height: 17px;
      line-height: 17px;
      font-size: 12px;
    }
    .cent-p2 {
      width: 68px;
      height: 34px;
      font-size: 12px;
      text-align: left;
    }
  }
  .moth {
    width: 52px;
    height: 25px;
    font-size: 18px;
    font-weight: 500;
    color: rgba(251, 195, 74, 1);
    line-height: 25px;
  }
  .btn {
    width: 45px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    background: linear-gradient(
      150deg,
      rgba(242, 91, 134, 1) 0%,
      rgba(241, 172, 94, 1) 100%
    );
    box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
    border-radius: 6px;
  }
}
</style>
