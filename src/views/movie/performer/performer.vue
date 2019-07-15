<template>
	<div class="performer">
		<div class="header">
			<img @click="$router.go(-1)" class="icon icon-goback" :src="require('@/assets/imgs/icons/arr-left.png')" alt="">
			<span v-show="slide">{{moviescom[2].name}}</span>
			<span></span>
		</div>
		<div class="header-top">
			<img :src="'https://images.weserv.nl/?url='+diu.small" alt>
		</div>
		<div class="information">
			<span class="spimg"><img src="@assets/imgs/details/qixi.webp" alt></span>
			<p class="p1">{{diu.name}}</p>
			<p>Xi Qi</p>
			<span class="spa">关注</span>
			<p>1376992人关注</p>
		</div>
		<div class="introduce">
			<p class="po">简介</p>
			<span>{{movie.summary}}</span>
			<div href="javascript:;" @click="shows($event)" class="more">查看更多  &gt;</div>
		</div>
		<div class="works">
			<p class="po">个人作品</p>
			<ul>
				<li v-for="w in words" :key="w.id">
					<span><img :src="w.imgs"></span>
					<p class="p1">{{w.name}}</p>
					<p class="p2">评分: {{w.score}}</p>
					<p class="p3">演员: {{w.performer}}</p>
					<p class="p4">上映时间: {{w.data}}</p>
				</li>
			</ul>
		</div>
		<div class="album">
			<p class="po">相册</p>
			<span class="sp1"><img src="@assets/imgs/details/qixia.jpg" alt=""></span>
			<span class="sp2"><img src="@assets/imgs/details/qixi2.webp" alt=""></span>
			<span class="sp3"><img src="@assets/imgs/details/qixi.webp" alt=""></span>
			<span class="sp4"><img src="@assets/imgs/details/qixi3.webp" alt=""></span>
		</div>
	</div>
</template>

<script>
	import Axios from "axios";
	const subject = "http://59.110.138.169/api/douban/movie/subject/";
	export default{
		name: "performer",
		data(){
			return{
				movie: {	
					casts:[
					
					]
				},
				slide:true,
				id:'17363',
				n: 0,
				words:[
					{
						id: 1,
						imgs: require('@assets/imgs/details/words.webp'),
						name: '桃源',
						score: '暂无',
						performer: '耿乐',
						data: '2018年10月16日'
					},
					{
						id: 2,
						imgs: require('@assets/imgs/details/words2.webp'),
						name: '八个女人一台戏',
						score: '6.5',
						performer: '白百何',
						data: '2019年10月5日'
					}
				]
			}
		},
		methods:{
			gomovie(id){
				var url = subject + 26715636;
				Axios.get(url).then(res => {
				  this.movie = res.data;
				   console.log(this.movie.casts);
				});
			},
			shows(e){
				this.n++;
				if(this.n%2 ==0){
					var target = e.target;
					var spans = target.previousSibling;
					spans.style.webkitLineClamp = '3';
				}else{
					var target = e.target;
					var spans = target.previousSibling;
					spans.style.webkitLineClamp = '10';
				}
				
			}
		},
		created(){
			this.gomovie();
			
		},
		computed:{
			diu(){
				var rs =  this.movie.casts.find(item=>{
					if(item.id == "17363"){
						var temp = item;
						return temp;
					}
					
				})
				return rs;
			},
			moviescom(){
				var bs = this.movie.casts.map(item=>{
					item.dirbbq = item.name
					
					return item;
				})
				return bs;
			},
		}
	}
</script>

<style lang="scss" scoped>
	$widths: 340px;
	a{
		color: red;
		font-size: 20px;
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
		left: 0;
		top: 0;
		.icon{
			width:10px;
			height:15px;
			
		}
		span{
			display: block;
			line-height: 25px;
		}
	}
	.header-top{
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 20;
		opacity: 0.2;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.information{
		width: 100%;
		z-index: 990;
		margin-top: 45px;
		position: relative;
		.spimg{
			width: 85px;
			height: 85px;
			display: block;
			opacity: 1;
			margin: 0 auto;
			margin-top: 55px;
			img{
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}
		p{
			margin-top: 8px;
			font-size: 12px;
		}
		.p1{
			font-size: 20px;
		}
		.spa{
			display: block;
			width:48px;
			height:24px;
			background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
			box-shadow:0px 4px 16px 0px rgba(0,0,0,0.5);
			border-radius:11px;
			margin: 10px auto;
			line-height: 24px;
		}
	}
	.introduce{
		width: $widths;
		position: relative;
		z-index: 999;
		margin: 25px auto;
		.po{
			display: block;
			width: 32px;
			font-size: 16px;
		}
		span{
			display: block;
			margin-top: 10px;
			width: 100%;
			font-size:12px;
			font-weight:400;
			color:rgba(255,255,255,0.5);
			line-height:18px;
			overflow : hidden;
			text-overflow : ellipsis;
			display : -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
		}
		.more{
			width:70px;
			height:14px;
			font-size:14px;
			font-weight:400;
			color:rgba(251,195,74,1);
			line-height:20px;
		}
	}
	.works{
		width: $widths;
		position: relative;
		z-index: 999;
		margin: 25px auto;
		.po{
			display: block;
			width: 64px;
			font-size: 16px;
		}
		ul{
			width: 100%;
			height: 340px;
			li{
				width: 100%;
				float: left;
				margin-top: 20px;
				position: relative;
				span{
					display: block;
					width: 100px;
					height: 140px;
					img{
						width: 100%;
					}
				}
				p{
					display: block;
					position: absolute;
					left: 140px;
					top: 22px;
					&.p1{
						font-size: 18px;
						font-weight:400;
					}
					&.p2{
						top: 55px;
						font-size: 14px;
					}
					&.p3{
						top: 85px;
						font-size: 14px;
					}
					&.p4{
						top: 120px;
						font-size: 14px;
					}
				}
			}
		}
	}
	.album{
		width: $widths;
		position: relative;
		margin: 25px auto;
		height: 200px;
		z-index: 999;
		.po{
			display: block;
			width: 64px;
			font-size: 16px;
		}
		.sp1{
			width: 192px;
			height: 100px;
			display: block;
			margin-top: 10px;
			float: left;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.sp2{
			width: 138px;
			float: left;
			height: 229px;
			display: block;
			margin-top: 10px;
			margin-left: 8px;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.sp3{
			width: 94px;
			height: 122px;
			display: block;
			margin-top: 10px;
			position: absolute;
			left: 0;
			top: 125px;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.sp4{
			width: 94px;
			height: 122px;
			display: block;
			margin-top: 10px;
			position: absolute;
			left: 98px;
			top: 125px;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
