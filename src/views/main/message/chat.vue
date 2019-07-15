<template>
    <div class="chat-main">
        <div class="chat-heard">
			<img src="@/assets/imgs/icons/arr-left.png" alt="" @click="$router.go(-1)" class="icon-left">
			<div class="header-main">
				<img :src="messa.url" alt="" class="icon-tx">
				<p>{{messa.name}}</p>
			</div>
			<img class="icon-bianzu" src="@/assets/imgs/mian/编组.png" alt="">
		</div>
		<div class="chat-content">
			<div class="left-1">
				{{messa.onesay}}
			</div>
			<div class="left-1s"></div>
			<ul class="right-1">
				<li class="right-2" v-for="item in messagearray">
					{{item}}
				</li>
			</ul>
		</div>
		<div class="chat-foot">
			<input type="text" class="chat-input" v-model="message">
			<input type="button" class="chat-button" value="发送" @click="add">
		</div>
    </div>
</template>
<script>

export default {
    name: 'chat',
   data(){
	   return{
		   id:this.$route.params.id,
		   messagearray:[],
		   message:''
	   }
   },
   methods:{
		add(){
			this.messagearray.push(this.message);
            this.message = '';
			console.log(this.messagearray);
		}
   },
   computed:{
	   messa(){
		  return this.$store.state.mess.getone;
	   }
   },
   created(){
	   this.$store.commit('mess/getOne',this.id);
	   console.log('hello',this.messa);
   }
}
</script>
<style lang="scss" scoped>
	
	.chat-main{
		.chat-heard{
			width: 375px;
			height: 50px;
			display: flex;
			align-items: center;
			position: fixed;
			top: 0px;
			left: 0;
			background-color: #21252C;
			z-index: 100;
			.icon-tx{
				border-radius:50%;
			}
			.icon-left{
				width: 20px;
				height: 20px;
				margin-left: 20px;
			}
			.header-main{
				display: flex;
				align-items: center;
				margin-left: 10px;
				p{
					margin-left: 5px;
					font-size: 14px;
					font-weight: 500px;
				}
			}
			.icon-bianzu{
				position: absolute;
				top: 30px;
				right: 20px;
			}
		}
		.chat-content{
			.left-1{
				width: 74px;
				height: 32px;
				background-color: #32353C;
				z-index: 99;
				position: absolute;
				top: 90px;
				left: 35px;
				line-height: 30px;
			}
			.left-1s{
				width:0;
				height:0;
				border-width:0 30px 30px;
				border-style:solid;
				border-color:transparent transparent #32353C;/*透明 透明  灰*/
				margin:40px auto;
				position: absolute;
				position: absolute;
				left: 20px;
				top: 52px;
			}
			.right-1{
				max-width: 50%;
				position: absolute;
				top: 140px;
				right: 35px;
				li:nth-child(1){
					margin-top: 0;
				}
				.right-2{
					max-width: 100%;
					background-color: #F8C24D;
					margin-top: 35px;
					font-size: 12px;
					line-height: 20px;
					position: relative;
					z-index: 99;
					text-align: left;
					padding: 15px;
					&::before{
						content: '';
						width:0;
						height:0;
						border-width:0 15px 15px;
						border-style:solid;
						border-color:transparent transparent #F8C24D;/*透明 透明  灰*/
						margin:40px auto;
						position: absolute;
						position: absolute;
						right: -15px;
						top: -23px;
					}
				}
				
			}
			
			.right-1s{
				width:0;
				height:0;
				border-width:0 30px 30px;
				border-style:solid;
				border-color:transparent transparent #F8C24D;/*透明 透明  灰*/
				margin:40px auto;
				position: absolute;
				position: absolute;
				right: 20px;
				top: 102px;
			}
		}
		.chat-foot{
			width: 375px;
			height: 40px;
			position: fixed;
			bottom: 0;
			margin: 0 auto;
			background-color: #21252C;
			z-index: 100;
			.chat-input{
				width: 300px;
				height: 30px;
				float: left;
				margin-left: 10px;
			}
			.chat-button{
				    width: 45px;
					height: 30px;
					margin-top: 5px;
			}
		}
	}
	
</style>

