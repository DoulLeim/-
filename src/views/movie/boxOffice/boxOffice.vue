<template>
	<div class="boxoffice">
		<div class="header">
			<img @click="$router.go(-1)" class="icon icon-goback" :src="require('@/assets/imgs/icons/arr-left.png')" alt="">
			<span>傲慢与偏见</span>
			<span></span>
		</div>
		<div class="main">
			<div class="ma left ">
				<span>2</span>
				<p>今日票房排行</p>
			</div>
			<div class="ma m">
				<span>暂无</span>
				<p>首日票房(万)</p>
			</div>
			<div class="ma right">
				<span>2660</span>
				<p>今日票房(万)</p>
			</div>
		</div>
		<div class="gang"></div>
		<div class="gross">
			<p class="ps">总票房</p>
			<div class="gr left ">
				<span>地区</span>
				<p>中国</p>
			</div>
			<div class="gr m">
				<span>每周末票房</span>
				<p>暂无数据</p>
			</div>
			<div class="gr right">
				<span>总票房</span>
				<p>501万元</p>
			</div>
		</div>
		<div class="gang"></div>
		<div class="day">
			<p class="ps">日票房明细</p>
			<p class="element">单位：万元</p>
			<ul class="nav">
				<li class="lis a">日期</li>
				<li class="lis b">当日票房</li>
				<li class="lis c">票房占比</li>
				<li class="lis d">拍片占比</li>
				<li class="lis f">场次人数</li>
			</ul>
			<ul class="aab">
				<li class="liu a">
					<span>2018-5-18</span>
					周六上映首日
				</li>
				<li class="liu b">538.6</li>
				<li class="liu c">8.3%</li>
				<li class="liu d">21.3%</li>
				<li class="liu e">3</li>
			</ul>
			<ul class="rong">
				<li class="liu a">
					<span>2018-5-17</span>
					周五零点场
				</li>
				<li class="liu b">--</li>
				<li class="liu c">--</li>
				<li class="liu d">0.00%</li>
				<li class="liu e">0</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
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
		left: 0;
		top: 0;
		.icon{
			width:10px;
			height:15px;
			
		}
		span{
			display: block;
			line-height: 25px;
			font-size: 16px;
		}
	}
	.main{
		width: 100%;
		height: 60px;
		margin-top: 45px;
		.ma{
			float: left;
			margin-left: 40px;
		}
		.left{
			width: 80px;
			height: 50px;
			margin-left: 30px;
			span{
				display: block;
				width: 20px;
				height: 25px;
				font-size: 18px;
				line-height: 25px;
				margin: 0 auto;
				color: #FBC34A;
			}
			p{
				width:72px;
				height:17px;
				font-size:12px;
				font-weight:400;
				line-height:17px;
				opacity: 0.6;
			}
		}
		.m{
			width: 80px;
			height: 70px;
			span{
				display: block;
				width: 36px;
				height: 25px;
				font-size: 18px;
				line-height: 25px;
				margin: 0 auto;
				
			}
			p{
				width:72px;
				height:17px;
				font-size:12px;
				font-weight:400;
				line-height:17px;
				opacity: 0.6;
			}
		}
		.right{
			width: 80px;
			height: 50px;
			span{
				display: block;
				width: 44px;
				height: 25px;
				font-size: 18px;
				line-height: 25px;
				margin: 0 auto;
				color: #FBC34A;
			}
			p{
				width:72px;
				height:17px;
				font-size:12px;
				font-weight:400;
				line-height:17px;
				opacity: 0.6;
			}
		}
	}
	.gang{
		width:100%;
		height:6px;
		background:rgba(51,54,61,1);
	}
	.gross{
		width: 100%;
		height: 110px;
		margin-top: 30px;
		.ps{
			width: 50px;
			margin-left: 30px;
			font-size: 16px;
			text-align: left;
		}
		.gr{
			float: left;
			margin-left: 80px;
			margin-top: 32px;
		}
		.left{
			width:24px;
			height:12px;
			font-size:12px;
			line-height:12px;
			
			margin-left: 30px;
			span{
				display: block;
				width: 24px;
				height: 15px;
				font-size: 12px;
				line-height: 15px;
				margin: 0 auto;
				opacity: 0.6;
			}
			p{
				margin-top: 8px;
				width:24px;
				height:17px;
				font-size:12px;
				font-weight:400;
				line-height:17px;
				opacity: 0.8;
			}
		}
		.m{
			width: 80px;
			height: 70px;
			span{
				display: block;
				width: 60px;
				height: 25px;
				font-size: 12px;
				line-height: 15px;
				margin: 0 auto;
				opacity: 0.6;
			}
			p{
				width:48px;
				height:17px;
				font-size:12px;
				font-weight:400;
				line-height:17px;
				margin-left: 17px;
				opacity: 0.9;
			}
		}
		.right{
			width: 80px;
			height: 70px;
			margin-left: 70px;
			span{
				display: block;
				width: 50px;
				height: 25px;
				font-size: 12px;
				line-height: 15px;
				margin: 0 auto;
				opacity: 0.6;
			}
			p{
				width:48px;
				height:17px;
				font-size:12px;
				font-weight:400;
				line-height:17px;
				margin-left: 17px;
				opacity: 0.8;
			}
		}
	}
	.day{
		width: 100%;
		height: 150px;
		margin-top: 20px;
		position: relative;
		.ps{
			width: 80px;
			margin-left: 30px;
			font-size: 16px;
			text-align: left;
			opacity: 0.8;
		}
		.element{
			position: absolute;
			right: 20px;
			top: 2px;
			opacity: 0.6;
		}
		.nav{
			width: 340px;
			margin: 30px auto;
			.lis{
				float: left;
				width: 50px;
				height: 30px;
				margin-left: 12px;	
				opacity: 0.6;
				&.a{
					margin-left: 10px;
					width: 80px;
					text-align: left;
				}
				&.b{
					margin-left: 0px;
				}
			}
			
		}
		.aab{
			width: 340px;
			height: 50px;
			margin: 30px auto;
			.liu{
				float: left;
				width: 50px;
				height: 30px;
				margin-left: 12px;	
				opacity: 0.6;
				line-height: 30px;
				&.a{
					width: 72px;
					color: #FBC34A;
					line-height: 15px;
					span{
						width: 68px;
						display: block;
						text-align: left;
						
						
						color: #C01212;
					}
				}
			}
		}
		.rong{
			width: 340px;
			margin: 0 auto;
			.liu{
				float: left;
				width: 50px;
				height: 30px;
				margin-left: 12px;	
				opacity: 0.6;
				line-height: 30px;
				&.a{
					width: 65px;
					
					line-height: 15px;
					span{
						width: 65px;
						display: block;
						text-align: left;
					
					}
				}
			}
		}
	}
</style>
