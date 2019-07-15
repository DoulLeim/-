<template>
    <div class="content-communication" >
    	
    	<ul class="communications" >
			<router-link tag="li" class="communication" :to="{name:'chat',params:{id:mes.id}} ">
    			<img :src="mes.url" alt="">
    			<span class="communication-tit1">{{mes.name}}</span>
    			<span class="communication-tit2">{{mes.mess}}</span>
    			<span class="communication-tit3">{{mes.time}}</span>
    			<span class="communication-tit4">{{mes.count}}</span>
    		</router-link>
    	</ul>
    </div>
</template>
<script>

export default {
	props:{
		mes:Object,
		// id:Number
	},
    components:{
		
    }


}
</script>
<style lang="scss" scoped>
	
		.content-communication{
			width: 375px;
			
			.communications{
				width: 375px;
				margin-top: 20px;
				.communication{
					width: 335px;
					height: 60px;
					margin: 0 auto;
					overflow: hidden;
					position: relative;
					img{
						display: block;
						height: 44px;
						height: 44px;
						border-radius:50%;
						float: left;
					}
					.communication-tit1{
						display: block;
						width: 335px;
						margin-top: 5px;
						color: #F8C24D;
						text-align: left;
						margin-left: 60px;
					}
					.communication-tit2{
						display: block;
						width:335px;
						margin-top: 5px;
						text-align: left;
						margin-left: 60px;
					}
					.communication-tit3{
						position: absolute;
						top: 5px;
						right: 0;
					}
					.communication-tit4{
						position: absolute;
						top: 25px;
						right: 0;
						width: 15px;
						height: 15px;
						background-color: #F8C24D;
						border-radius:50%;
					}
				}
			}
		}
	
</style>

