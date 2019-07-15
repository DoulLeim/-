// // 
// var  messages=[
// 					{
// 						id:1,
// 						url: require('@/assets/imgs/mian/tx1.png'),
// 						name:'Zeng Wen',
// 						mess:'你好，朋友',
// 						time:'1个月前',
// 						count:1,
// 						onesay:'啊哈',
// 						twosay:'去去'
// 					},
// 					{
// 						id:2,
// 						url: require('@/assets/imgs/mian/tx2.png'),
// 						name:'Chikelu Obasea',
// 						mess:'您赤了吗',
// 						time:'1个月前',
// 						count:2,
// 						onesay:'噢耶',
// 						twosay:'gun!'
// 					},
// 					{
// 						id:3,
// 						url: require('@/assets/imgs/mian/tx3.png'),
// 						name:'Kimmy McIlmorie',
// 						mess:'我枯了',
// 						time:'1个月前',
// 						count:3,
// 						onesay:'嘿嘿',
// 						twosay:'fwiwu!'
// 					},
// 					{
// 						id:4,
// 						url: require('@/assets/imgs/mian/tx4.png'),
// 						name:'Xu Jianhong',
// 						mess:'你是个好人',
// 						time:'1个月前',
// 						count:4,
// 						onesay:'哈哈',
// 						twosay:'broing'
// 					},
// 					{
// 						id:5,
// 						url: require('@/assets/imgs/mian/tx5.png'),
// 						name:'Kung Jiyeon',
// 						mess:'在吗，在干嘛想你了',
// 						time:'1个月前',
// 						count:5,
// 						onesay:'海',
// 						twosay:'gun!'
// 					},
// 				]
import messapi from '@/api/mess.js'
var messages,
messages = messapi.getmessimg();
  var state= {
       messages,
			 getone:{}
  }
	var getters={
		
	}
  var mutations= {
			getOne(state,id){
				console.log('aaa',id);
			state.getone =	state.messages.find(item=>item.id==id)
			}
  }
  var actions={

  }
	export default{
		namespaced: true,
		state,
		getters,
		mutations,
		actions
	}

