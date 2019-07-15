<template>
    <div class="set-main">
        <div class="header-bar">
            <div class="bar-nav">
                <span @click="$router.go(-1)" class="nav-up">
                    <img src="@/assets/imgs/main/mine/youjt2.png" alt>
                </span>
                <p class="nav-set">设置</p>
            </div>
            <div class="bar-head">
                <img src="@/assets/imgs/main/mine/touxiangz.png" alt>
                <p>yujia1130</p>
            </div>
        </div>
        <div class="container">
            <div class="container-safety">
                <p class="safety-p">账号与安全</p>
                <div class="safety-bound">
                    <p class="bound-p">手机绑定与更换</p>
                    <img class="bound-img" src="@/assets/imgs/main/mine/zoujtx.png" alt>
                </div>
            </div>
            <div class="container-empty"></div>
            <ul class="container-function">
                <li class="style-equally">
                    <p>被赞提醒</p>
                    <div class="switch-box">
                        <label class="switch">
                            <input type="checkbox" checked>
                            <div class="slider round"></div>
                        </label>
                    </div>
                </li>
                 <li class="style-equally">
                    <p>影评/话题提醒</p>
                    <div class="switch-box">
                        <label class="switch">
                            <input type="checkbox" checked>
                            <div class="slider round"></div>
                        </label>
                    </div>
                </li>
                 <li class="style-equally">
                    <p>系统通知</p>
                    <div class="switch-box">
                        <label class="switch">
                            <input type="checkbox" checked>
                            <div class="slider round"></div>
                        </label>
                    </div>
                </li>
                 <li class="style-equally">
                    <p>系统通知</p>
                    <div class="switch-box">
                        <label class="switch">
                            <input type="checkbox" >
                            <div class="slider round"></div>
                        </label>
                    </div>
                </li>
            </ul>
            <div class="container-empty2"></div>
            <div class="container-safety">
                <p class="safety-p">关于</p>
                <div class="safety-bound">
                    <img class="bound-img" src="@/assets/imgs/main/mine/zoujtx.png" alt>
                </div>
            </div>
             <router-link tag="div" class="login" to="/login">
                <div class="container-login">
                    <p class="login-p" >退出登陆</p>
                </div>
             </router-link>        
        </div>
    </div>
</template>

<script>
export default {
    name: "set",

    data() {
        return {};
    },

    methods: {}
};
</script>

<style lang='scss' scoped>
.set-main {
    width: 100%;
    height: 100%;
    .header-bar {
        width: 100%;
        height: 240px;
        .bar-nav {
            position: relative;
            display: flex;
            width: 100%;
            height: 100px;
            .nav-up {
                position: absolute;
                left: 20px;
                line-height: 110px;
                display: block;
            }
            .nav-set {
                width: 32px;
                height: 22px;
                font-size: 16px;
                font-family: PingFangSC-Medium;
                font-weight: 500;
                color: rgba(255, 255, 255, 1);
                line-height: 100px;
                text-align: center;
                margin: 0 auto;
            }
        }
        .bar-head {
            width: 75px;
            height: 120px;
            margin: 0 auto;
            > img {
                width: 73px;
                height: 73px;
            }
            > p {
                margin-top: 10px;
                font-size: 16px;
                font-family: PingFangSC-Medium;
                font-weight: 500;
                color: rgba(255, 255, 255, 1);
                line-height: 22px;
            }
        }
    }
    .container {
        width: 100%;
        height: 100%;
        .container-safety {
            position: relative;
            display: flex;
            width: 90%;
            height: 40px;
            margin: 0 auto;
            .safety-p {
                font-size: 14px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: #c4c5c7;
                line-height: 40px;
            }
            .safety-bound {
                position: absolute;
                right: 20px;
                display: flex;
                height: 20px;
                font-size: 14px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: #b3b4b7;
                line-height: 40px;

                > img {
                    width: 8;
                    height: 10px;
                    margin-left: 10px;
                    margin-top: 15px;
                }
            }
        }
        .container-empty {
            width: 100%;
            height: 6px;
            background-color: #33363d;
        }
        .container-empty2{
            width: 100%;
            height: 6px;
            background-color: #33363d;
            margin-top: 25px;
        }
        .container-function {
            width: 90%;
            height: 100%;
            margin: 0 auto;
            .style-equally {
                position: relative;
                display: flex;
                width: 100%;
                height: 26px;
                margin-top: 25px;
                > p {
                    line-height: 26px;
                    font-size: 14px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 1);
                }
                .switch-box {
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    .switch {
                        position: relative;
                        right: 0;
                        bottom: 0;
                        width: 43px;
                        height: 26px;
                        display: inline-block;
                        .slider {
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            background-color: #ccc;
                            transition: 0.4s;
                        }
                        .slider::before {
                            content: "";
                            position: absolute;
                            width: 26px;
                            height: 26px;
                            left: 0;
                            bottom: 0;
                            background-color: #fff;
                            transition: 0.4s;
                        }
                        input:checked + .slider {
                            background-color: #F26D7E;
                        }
                        input:focus + .slider {
                            box-shadow: 0 0 1px #F26D7E;
                        }
                        input:checked + .slider:before {
                            transform: translateX(16px);
                        }
                        .slider.round {
                            border-radius: 34px;
                        }

                        .slider.round:before {
                            border-radius: 50%;
                        }
                    }
                }

                .switch input {
                    display: none;
                }
            }
        }
        .container-login{
            width: 335px;
            height: 40px;
            background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
            box-shadow:0px 0px 4px 1px rgba(242,109,125,0.18);
            border-radius:6px;
            margin: 20px auto;
            .login-p{
                font-size:18px;
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(255,255,255,1);
                line-height:40px;
            }
        }
    }
}
</style>
