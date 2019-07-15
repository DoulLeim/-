<template>
	<div class="message-main">
		<div class="message-heard">
			<img src="@assets/imgs/icons/arr-left.png" alt="" @click="$router.go(-1)">
			<p>消息中心</p>
		</div>
		<div class="message-content">
			<ul class="content-fixed">
				<li class="fixed">
					<span class="fixed1-icon">
						<img src="@assets/imgs/mian/通知.png" alt="">
					</span>
					<span class="fixed1-tit1">系统通知</span>
					<span class="fixed1-tit2">哈皮巴斯得！祝你生日快乐</span>
					<span class="fixed1-tit3">1个月前</span>
				</li>
				<li class="fixed">
					<span class="fixed2-icon">
						<img src="@assets/imgs/mian/点赞.png" alt="">
					</span>
					<span class="fixed2-tit1">赞</span>
					<span class="fixed2-tit2">一个赞的不给我</span>
					<span class="fixed2-tit3">1个月前</span>
				</li>
				<li class="fixed">
					<span class="fixed3-icon">
						<img src="@assets/imgs/mian/评论.png" alt="">
					</span>
					<span class="fixed3-tit1">评论</span>
					<span class="fixed3-tit2">暂时还没有收到评论</span>
					<span class="fixed3-tit3">1个月前</span>
				</li>
			</ul>
			<div class="top">
				全部私信
			</div>
			<communication v-for="mes in messages" :key="mes.id" :id="mes.id" :mes="mes"></communication>
		</div>
	</div>
</template>
<script>
	import communication from '@/views/main/message/components/communication.vue'
	export default {
		name: 'message',
		components: {
			communication
		},
		data(){
			return{
				messages:[]
			}
		},
		created() {
			this.messages=this.$store.state.mess.messages;
			console.log(this.messages)
		}
	}
</script>
<style lang="scss" scoped>
	.message-main {
		width: 375px;
		.message-heard {
			width: 375px;
			height: 50px;
			display: flex;
			align-items: center;
			position: fixed;
			top: 0;
			left: 0;
			background-color: #21252C;
			z-index: 99;
// 			justify-content: space-around;
			img{
				width: 13px;
				height: 13px;
				margin-left: 20px;
			}
			p{
				font-size: 16px;
				text-indent: 110px;
				line-height: 20px;
			}
		}
		.message-content{
			width: 375px;
			margin-top: 50px;
			.content-fixed{
				width: 335px;
				margin: 10px auto;
				overflow: hidden;
				.fixed{
					width: 335px;
					height: 60px;
					margin-top: 10px;
					position: relative;
					overflow: hidden;
					img{
						margin-top: 10px;
						width: 24px;
						height: 23px;
					}
					.fixed1-icon{
						display: block;
						width: 44px;
						height: 44px;
						background-color: #F8C24D;
						border-radius:50%;
						float: left;
					}
					.fixed1-tit1{
						display: block;
						width: 130px;
						font-size: 15px;
						margin-top: 5px;
						font-weight: 600;
					}
					.fixed1-tit2{
						display: block;
						width: 240px;
						font-size: 12px;
						margin-top:10px;
						color: #606268;
					}
					.fixed1-tit3{
						position: absolute;
						top: 10px;
						right: 0;
						color: #606268;
					}
					.fixed2-icon{
						display: block;
						width: 44px;
						height: 44px;
						background-color: #EF8833;
						border-radius:50%;
						float: left;
					}
					.fixed2-tit1{
						display: block;
						width: 90px;
						font-size: 15px;
						margin-top: 5px;
						font-weight: 600;
					}
					.fixed2-tit2{
						display: block;
						width: 175px;
						font-size: 12px;
						margin-top:10px;
						color: #606268;
					}
					.fixed2-tit3{
						position: absolute;
						top: 10px;
						right: 0;
						color: #606268;
					}
					.fixed3-icon{
						display: block;
						width: 44px;
						height: 44px;
						background-color: #6548A9;
						border-radius:50%;
						float: left;
						margin-top:5px;
					}
					.fixed3-tit1{
						display: block;
						width: 105px;
						font-size: 15px;
						margin-top: 5px;
						font-weight: 600;
					}
					.fixed3-tit2{
						display: block;
						width: 200px;
						font-size: 12px;
						margin-top:10px;
						color: #606268;
					}
					.fixed3-tit3{
						position: absolute;
						top: 10px;
						right: 0;
						color: #606268;
					}
				}
			}
			.top{
				width: 80px;
				margin-top: 20px;
			}
		}
	}
</style>
