<template>
  <div class="search-main">
    <div class="search-area">
          <div class="input-box">
            <input class="search-input" type="text" placeholder="输入城市" v-model.trim="searchText">
          </div>
          <span @click="searchText=''" class="btn">取消</span>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Search',

  data () {
    return {
        searchText:''
    }
  },

  methods: {}
}
</script>

<style lang='scss' scoped>
@import "../../../assets/style/common/common.scss";
    .search-area {
    width: 100%;
    height: 36px;
    box-sizing: border-box;
    padding: 0 $basePadding;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: $basePadding;
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
</style>
