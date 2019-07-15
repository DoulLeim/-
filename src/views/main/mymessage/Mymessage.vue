<template>
    <div class="mymessage-main">
        <div class="header-bar">
            <div class="bar-box">
                <router-link tag="div" to="/mymessage" class="head-portrait">
                    <img src="@/assets/imgs/main/mine/touxiangx.png" alt>
                </router-link>
                <p class="user-name">yujian1130</p>
                <div class="box-vip">
                    <img class="vip-img" src="@/assets/imgs/main/mine/vip1.png" alt>
                    <span class="vip-sp">LV1</span>
                </div>
                <div class="box-signature">
                    <p>这个同学有点懒 没有写签名</p>
                </div>
                <ul class="box-looked">
                    <li class="box-misslook box-common">
                        <p>想看</p>
                        <p>{{count}}</p>
                    </li>
                    <li class="box-haveread box-common">
                        <p>看过</p>
                        <p>{{countTwo}}</p>
                    </li>
                </ul>
            </div>
            <div class="box-img" @click="$router.go(-1)">
                <img src="@/assets/imgs/main/mine/youjt2.png" alt>
            </div>
        </div>
        <div class="mymessage-empty"></div>
        <div class="container">
            <div class="container-title">
                <p class="title-p">看过的电影</p>
            </div>
            <ul class="container-movie">
                <li class="movie-item" v-for="item in movieData" :key="item.id" >
                    <div class="item-grade">
                        <div class="grade-star">{{item.star}}</div>
                        <div class="grade-number">{{item.number}}分,</div>
                        <div class="grade-evaluate">{{item.evaluate}}</div>
                    </div>
                    <div class="item-content">
                        <img class="content-img" :src="item.img" alt>
                        <h2 class="content-h2">{{item.name}}</h2>
                        <div class="content-box">
                            <p>{{item.type}}</p>
                            <p>{{item.state}}</p>
                            <p>买票时间:{{item.time}}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Mock from 'mockjs'
import { request } from 'http';
var  Random = Mock.Random
export default {
    name: "Mymessage",

    data() {
        return {
            count: 12,
            countTwo: 5,
            movieData:[
                {
                    id:Random.guid(),
                    img: require('@/assets/imgs/main/indent/dayu2.png'),
                    name: "大鱼海棠",
                    type: "剧情",
                    state:"中国/105分钟",
                    time: "2016-8-4",
                    star:"★★★★",
                    number: "8",
                    evaluate:'一般'
                },
                 {
                    id:Random.guid(),
                    img: require("@/assets/imgs/main/indent/paidingx2.png"),
                    name: "帕丁顿熊",
                    type: "动画/奇幻",
                    state: "美国/105分钟",
                    time: "2017-8-4",
                     star:"★★★★",
                    number: "8",
                    evaluate:'一般'
                },
                 {
                    id:Random.guid(),
                    img: require("@/assets/imgs/main/indent/we2.png"),
                    name: "后来的我们",
                    type: "剧情",
                    state: "中国/105分钟",
                    time: "2017-8-4",
                     star:"★★★★☆",
                    number: "9",
                    evaluate:'很好'
                }
            ]
        };
    },

    methods: {}
};
</script>

<style lang='scss' scoped>
.mymessage-main {
    .header-bar {
        width: 100%;
        height: 210px;
        background: linear-gradient(
            123deg,
            rgba(242, 94, 133, 1) 0%,
            rgba(241, 166, 97, 1) 100%
        );
        opacity: 0.9029;
        border-radius: 29px;
        .bar-box {
            position: relative;
            top: 80px;
            width: 336px;
            height: 185px;
            background: rgba(51, 54, 61, 1);
            box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
            border-radius: 17px;
            margin: 0 auto;

            .head-portrait {
                position: absolute;
                left: 131.5px;
                top: -35px;
                width: 73px;
                height: 73px;
            }
            .user-name {
                position: absolute;
                top: 50px;
                left: 85px;
                font-size: 18px;
                font-family: PingFangSC-Medium;
                font-weight: 500;
                color: rgba(255, 255, 255, 1);
            }
            .box-vip {
                position: absolute;
                top: 50px;
                right: 100px;
                width: 50px;
                height: 18px;
                border-radius: 12px;
                border: 1px solid rgba(251, 195, 73, 1);
                .vip-img {
                    width: 12px;
                    height: 12px;
                    margin-top: 2px;
                }
                .vip-sp {
                    font-size: 10px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    color: rgba(251, 195, 73, 1);
                    line-height: 14px;
                }
            }
            .box-signature {
                position: absolute;
                top: 80px;
                display: flex;
                width: 100%;
                height: 23px;
                display: flex;
                background: rgba(51, 54, 61, 1);
                border-radius: 5px;
                opacity: 0.7293999999999999;
                > p {
                    width: 100%;
                    font-size: 14px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 1);
                    line-height: 23px;
                    text-align: center;
                }
            }
            .box-get {
                position: absolute;
                top: 50px;
                right: 20px;
                display: flex;
                width: 50px;
                height: 20px;
                .get-img {
                    display: block;
                    width: 20px;
                    height: 20px;
                    margin-right: 10px;
                }
            }
        }
        .box-img {
            position: absolute;
            top: 30px;
            left: 20px;
            width: 80px;
            height: 60px;
            text-align: left;
            line-height: 30px;
        }
        .box-looked {
            position: absolute;
            top: 120px;
            display: flex;
            width: 100%;
            height: 40px;
            justify-content: center;
            .box-common {
                display: flex;
                width: 134px;
                height: 37px;
                border-radius: 6px;
                border: 1px solid;
                > p {
                    font-size: 15px;
                    font-family: PingFangSC-Medium;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 1);
                    line-height: 37px;
                    margin-left: 30px;
                }
            }

            .box-misslook {
                border-image: linear-gradient(
                        139deg,
                        rgba(242, 96, 132, 1),
                        rgba(241, 159, 100, 1)
                    )
                    1 1;
                margin-right: 10px;
            }
            .box-haveread {
                border-image: linear-gradient(
                        137deg,
                        rgba(60, 76, 172, 1),
                        rgba(198, 69, 151, 1)
                    )
                    1 1;
                margin-left: 10px;
            }
        }
    }
    .mymessage-empty {
        width: 100%;
        height: 80px;
    }
    .container {
        width: 100%;
        height: 100%;
        .container-title {
            width: 90%;
            height: 25px;
            margin: 20px auto;

            .title-p {
                font-size: 18px;
                font-family: PingFangSC-Medium;
                font-weight: 500;
                color: rgba(255, 255, 255, 1);
                line-height: 25px;
                text-align: left;
            }
        }
        .container-movie {
            width: 90%;
            height: 100%;
            margin: 0 auto;
            .movie-item {
                width: 100%;
                height: 140px;
                margin-top: 20px; 
                .item-grade {
                    width: 100%;
                    height: 20px;
                    display: flex;
                    color: #fbc34a;
                    .grade-number {
                        font-size: 12px;
                        font-family: PingFangSC-Medium;
                        font-weight: 500;
                        margin-left: 6px;
                        letter-spacing: 2px;
                    }
                    .grade-evaluate {
                        font-size: 12px;
                        letter-spacing: 2px;
                    }
                }
                .item-content {
                    position: relative;
                    display: flex;
                    width: 100%;
                    height: 120px;
                    background-color: #33363d;
                    .content-img {
                        width: 94px;
                        height: 120px;
                    }
                    .content-h2 {
                        position: absolute;
                        top: 15px;
                        left: 114px;
                        font-size: 16px;
                        font-family: PingFangSC-Medium;
                        font-weight: 500;
                        color: rgba(255, 255, 255, 1);
                        line-height: 22px;
                    }
                    .content-box {
                        width: 100%;
                        height: 70px;
                        font-size: 12px;
                        font-family: PingFangSC-Regular;
                        font-weight: 400;
                        color: rgba(255, 255, 255, 1);
                        text-align: left;
                        text-indent: 20px;
                        margin-top: 50px;
                        line-height: 20px;
                        color: #7F8186;
                    }
                }
            }
        }
    }
}
</style>
