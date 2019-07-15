<template>
	<div class="score">
		<div class="header">
			<img @click="$router.go(-1)" class="icon icon-goback" :src="require('@/assets/imgs/icons/arr-left.png')" alt="">
			<span class="title">电影评分</span>
			<a href="#"><img class="icon icon-share" :src="require('@/assets/imgs/icons/share.png')" alt=""></a>
		</div>
		<div class="bigbg"><img src="@assets/imgs/details/yingp.png" alt=""></div>
		<div class="comment">
		</div>
		<div class="filter"></div>
		<div class="pin">
			<p class="p1">《傲慢与偏见》</p>
			<span class="xing">
				<img src="@assets/imgs/details/xing.png" alt="">
				<img src="@assets/imgs/details/xing.png" alt="">
				<img src="@assets/imgs/details/xing.png" alt="">
				<img src="@assets/imgs/details/xing.png" alt="">
				<img src="@assets/imgs/details/xing1.png" alt="">
				<span class="sfen">9.0<i>分</i></span>
			</span>
			<p class="p2" style="opacity: 0.4;">28.5万人评分</p>
		</div>
		<div class="data">
			<ul>
				<li>
					<p class="pone">56.4%</p>
					<span class="sp"></span>
					<p class="ptwo">9-10分</p>
				</li>
				<li>
					<p class="pone a">29.4%</p>
					<span class="sp1"></span>
					<p class="ptwo">7-8分</p>
				</li>
				<li>
					<p class="pone b">12.3%</p>
					<span class="sp2"></span>
					<p class="ptwo">5-6分</p>
				</li>
				<li>
					<p class="pone c">1.1%</p>
					<span class="sp3"></span>
					<p class="ptwo">3-4分</p>
				</li>
				<li>
					<p class="pone d">0.8%</p>
					<span class="sp4"></span>
					<p class="ptwo">1-2分</p>
				</li>
			</ul>
			<p style="opacity: 0.7;">以上数据 实时更新</p>
		</div>
		<div class="gang"></div>
		<div class="audience">
			<p>观众评分画像</p>
			<div class="vs">
				<div class="boy"> 
					<a href="#"><img src="@assets/imgs/details/boy.png" alt=""></a>
					<span>男性观众 <i>8.4分</i></span>
				</div> 
				<div class="v">VS</div>
				<div class="girl">
					<a href="#"><img src="@assets/imgs/details/girl.png" alt=""></a>
					<span>女性观众 <i>8.6分</i></span></div>
				</div>
				<div class="gang-date">
					
					<ul>
						<li>
							<span class="pz">95后</span>
							<span class="spx"></span>
							<span class="pc">8.7分</span>
						</li>
						<li>
							<span class="pz a">90后</span>
							<span class="spx a"></span>
							<span class="pc b">8.4分</span>
						</li>
						<li>
							<span class="pz b">80后</span>
							<span class="spx b"></span>
							<span class="pc b">8.2分</span>
						</li>
						<li>
							<span class="pz a">70后</span>
							<span class="spx c"></span>
							<span class="pc b">8.5分</span>
						</li>
					</ul>
					<p class="shua">以上数据，每30分钟更新一次</p>
				</div>
			</div>
			
		</div>
		
		
</template>

<script>
</script>

<style lang="scss" scoped>
	.score{
		position: relative;
		width: 100%;
		height: 800px;
		z-index: 90;
		background-color: #22262D;
	}
	.header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 17.5px;
		z-index: 999999;
		box-sizing: border-box; 
		width: 100%;
		height: 25px;
		position: fixed;
		z-index: 50;
		left: 0;
		top: 0;
		img{
			width:10px;
			height:15px;
			
		}
		.title{
			position: absolute;
			left: 150px;
			height: 40px;
			font-size: 18px;
			line-height: 40px;
		}
		a{
			display: block;
			width: 19px;
			height: 19px;
			
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
	.bigbg{
		width: 100%;
		height: 252px;
		position: fixed;
		z-index: 30;
		opacity: 0.3;
		top: -10px;
		img{
			width: 100%;
		}
	}
	.comment{
		width: 100%;
		height: 300px;
		z-index: 99;
		background-color: #22262D;
		position: fixed;
		top: 170px;
		opacity: 0.2;
	}
	.filter{
		width: 100%;
		height: 300px;
		z-index: 109;
		background-color: #22262D;
		position: fixed;
		top: 180px;
		opacity: 0.8;
	}
	.pin{
		width: 100%;
		position: relative;
		top: 120px;
		
		z-index: 110;
		.p1{
			font-size: 18px;
		}
		.xing{
			display: block;
			margin-top: 12px;
			margin-left: -50px;
			img{
				width: 8px;
				height: 8px;
				margin-left: 3px;
				
			}
			.sfen{
				font-size: 22px;
				display: block;
				position: absolute;
				left: 200px;
				top: 25px;
				color: #FBC34A;
				i{
					font-size: 14px;
					margin-left: 3px;
				}
			}
		}
		.p2{
			margin-top: 10px;
		}
	}
	.data{
		width: 100%;
		position: relative;
		top: 150px;
		z-index: 120;
		ul{
			width: 340px;
			height: 200px;
			margin-left: 45px;
			li{
				float: left;
				width: 50px;
				margin-left: 10px;
				height: 200px;
				.pone{
					width:37px;
					height:17px;
					font-size:12px;
					font-weight:400;
					color:rgba(251,195,74,1);
					line-height:17px;
					&.a{
						margin-top: 37px;
					}
					&.b{
						margin-top: 86px;
					}
					&.c{
						margin-top: 111px;
					}
					&.d{
						margin-top: 128px;
					}
				}
				span{
					display: block;
					width:22px;
					height:135px;
					border-radius:5px;
					margin-left: 5px;
					margin-top: 5px;
					background:linear-gradient(180deg,rgba(241,162,99,1) 0%,rgba(242,94,132,1) 100%);
					&.sp{
						width:22px;
						height:135px;
						
					}
					&.sp1{
						width:22px;
						height:98px;
						background:linear-gradient(180deg,rgba(241,162,99,1) 0%,rgba(242,94,132,1) 100%);
						border-radius:5px;
					}
					&.sp2{
						width:22px;
						height:49px;
					}
					&.sp3{
						width:22px;
						height:25px;
					}
					&.sp4{
						width:22px;
						height:9px;
					}
				}
				.ptwo{
					width:39px;
					height:17px;
					font-size:12px;
					margin-top: 5px;
					font-weight:400;
					color:rgba(255,255,255,1);
					line-height:17px;
				}
			}
		}
	}
	.gang{
		position: relative;
		top: 168px;
		width:375px;
		height:6px;
		background:#33363D;
		
	}
	.audience{
		width: 100%;
		position: relative;
		top: 200px;
		z-index: 120;
		p{
			font-size: 18px;
		}
		.vs{
			width: 100%;
			font-size: 16px;
			.boy{
				width:138px;
				height:36px;
				background:rgba(51,54,61,1);
				border-radius:6px;
				margin-left: 20px;
				margin-top: 25px;
				float: left;
				a{
					width: 20px;
					height: 20px;
					margin-left: 8px;
					display: block;
					img{
						width: 100%;
						height: 100%;
						margin-top: 10px;
					}
				}
				span{
					display: block;
					margin-left: 30px;
					line-height: 0px;
					font-size: 14px;
					i{
						color: #FBC34A;
						margin-left: 8px;
					}
				}
			}
			.v{
				float: left;
				margin-top: 35px;
				margin-left: 15px;
				font-size: 16px;
			}
			.girl{
				width:138px;
				height:36px;
				background:rgba(51,54,61,1);
				border-radius:6px;
				margin-left: 20px;
				margin-top: 25px;
				float: left;
				a{
					width: 14px;
					height: 21px;
					margin-left: 8px;
					display: block;
					img{
						width: 100%;
						height: 100%;
						margin-top: 8px;
					}
				}
				span{
					display: block;
					margin-left: 25px;
					line-height: 0px;
					font-size: 14px;
					i{
						margin-left: 8px;
						color: #FBC34A;
					}
				}
			}	
		}
		.gang-date{
			width: 100%;
			
			float: left;
			margin-top: 40px;
			ul{
				width: 340px;
				height: 200px;
				margin-left: 25px;
				li{
					float: left;
					width: 100%;
					margin-top: 10px;
					height: 50px;
					span{
						display: block;
						float: left;
					}
					.pz{
						width: 50px;
						font-size:14px;
						font-weight:400;
						color:rgba(255,255,255,1);
						margin-left: 15px;
					}
					.spx{
						display: block;
						width:135px;
						height:12px;
						background:linear-gradient(180deg,rgba(241,162,99,1) 0%,rgba(242,94,132,1) 100%);
						border-radius:5px;
						margin-left: 5px;
						&.a{
							width:126px;
							height:12px;
							background:linear-gradient(180deg,rgba(241,162,99,1) 0%,rgba(242,94,132,1) 100%);
							border-radius:5px;
						}
						&.b{
							width:110px;
							height:12px;
							background:linear-gradient(180deg,rgba(241,162,99,1) 0%,rgba(242,94,132,1) 100%);
							border-radius:5px;
						}
						&.c{
							width:117px;
							height:12px;
							background:linear-gradient(180deg,rgba(241,162,99,1) 0%,rgba(242,94,132,1) 100%);
							border-radius:5px;
						}
					}
					.pc{
						margin-left: 15px;
						font-size:14px;
						font-weight:400;
						color:rgba(251,195,74,1);
					}
				}
			}
			.shua{
				font-size: 12px;
			}
		}
	}
</style>
