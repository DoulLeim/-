<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive include="Home,Movie,Ticket,Cinema">
        <router-view class="router-view"></router-view>
      </keep-alive>
    </transition>

    <foot-bar v-show="$route.meta.footShow"></foot-bar>
  </div>
</template>
<script>
import FootBar from "@components/FootBar.vue";
export default {
  name: "app",
  data() {
    return {
      transitionName: ""
    };
  },
  components: {
    FootBar
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      if (toDepth < fromDepth) {
        this.transitionName = "slide-right";
      } else if (toDepth === fromDepth) {
        this.transitionName = "buling";
      } else {
        this.transitionName = "slide-left";
      }
    }
  }
};
</script>
<style lang="scss">
//  统一padding
$basePadding: 17.5px;
// 版心
$baseCenterWidth: 340px;
// 字体颜色
$baseFontColor: #dfdfdf;
// 字体颜色2
$baseFontColor2: #fbc34a;
// 背景色
$baseBgColor: #22262d;
// 次级背景色
$baseBgLightColor: #22262d;
// 渐变色
@mixin changeColor() {
  background: linear-gradient(
    150deg,
    rgba(242, 91, 134, 1) 0%,
    rgba(241, 172, 94, 1) 100%
  );
}
button {
  outline: none;
  border: none;
}
body {
  background-color: $baseBgColor;
  //取消移动端点击后的默认背景色
  -webkit-tap-highlight-color: transparent;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $baseFontColor;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.router-view {
  overflow-x: hidden;
  margin-bottom: 100px;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active,
.buling-enter-active,
.buling-leave-active {
  transition: all 0.5s;
}
.slide-right-enter {
  opacity: 0;
  transform: translate(-100%, 0);
}
.slide-right-leave {
  opacity: 0;
  transform: translate(100%, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate(100%, 0);
}
.slide-left-leave {
  opacity: 0;
  transform: translate(-100%, 0);
}
.buling-enter {
  opacity: 0;
}
.buling-leave {
  opacity: 0;
}
</style>
