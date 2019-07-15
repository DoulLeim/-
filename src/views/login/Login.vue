<template>
  <div class="login-main">
    <div class="top">
      <img @click="$router.go(-1)" src="@/assets/login/images/back.png" alt>
    </div>
    <div class="logo">
      <img src="@/assets/login/images/logo.png" alt>
    </div>
    <div class="form-group">
      <label for="username">
        <img class="username" src="@/assets/login/images/username.png" alt>
      </label>
      <input class="form-control" type="text" name="username" placeholder="请输入手机号">
    </div>
    <div class="form-group">
      <label for="password">
        <img class="username" src="@/assets/login/images/password.png" alt>
      </label>
      <input class="form-control" type="password" name="password" placeholder="请输入密码">
    </div>
    <button class="login">登录</button>
    <div class="other">
      <span class="register">注册</span>
      <span class="forget">忘记密码</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "login"
};
</script>
<style lang='scss' scoped>
.login-main {
  width: 100%;
  height: 100%;
  background-color: #23262d;
  border-radius: 0 0 20px 20px;
  .top {
    position: relative;
    width: 100%;
    height: 39px;
    img {
      position: absolute;
      top: 13px;
      left: 24px;
      width: 13px;
      height: 13px;
      color: rgba($color: #fff, $alpha: 0.8);
    }
  }
  .logo {
    margin-top: 64px;
  }
  .form-group {
    position: relative;
    width: 254px;
    height: 40px;
    margin: 33px 0 0 61px;
    background-color: #33363d;
    border-radius: 10px;
    input {
      outline: none;
    }
    .username {
      position: absolute;
      top: 11px;
      left: 27px;
    }
    .form-control {
      width: 213px;
      height: 30px;
      border: 0;
      background-color: rgba($color: #fff, $alpha: 0);
      margin: 5px 0 0 50px;
    }
  }
  .login {
    width: 254px;
    height: 40px;
    font-size: 20px;
    color: #ffffff;
    margin-top: 68px;
    border-radius: 8px;
    background: linear-gradient(to right, #f25b86, #f1ac5e);
  }
  .other {
    position: relative;
    width: 100%;
    height: 40px;
    .register {
      position: absolute;
      left: 60px;
      font-size: 14px;
      line-height: 40px;
      color: rgba($color: #fff, $alpha: 0.6);
    }
    .forget {
      position: absolute;
      left: 258px;
      font-size: 14px;
      line-height: 40px;
      color: rgba($color: #fff, $alpha: 0.6);
    }
  }
}
</style>