import Mock from 'mockjs'
const Random = Mock.Random

function messimg(){
	var img=[
		{
			id:Random.guid(),
			url: require('@/assets/imgs/mian/tx1.png'),
			name:'Zeng Wen',
			mess:'你好，朋友',
			time:'1个月前',
			count:1,
			onesay:Random.csentence(2),
		},
		{
			id:Random.guid(),
			url: require('@/assets/imgs/mian/tx2.png'),
			name:'Chikelu Obasea',
			mess:'您赤了吗',
			time:'1个月前',
			count:2,
			onesay:Random.csentence(2),
		},
		{
			id:Random.guid(),
			url: require('@/assets/imgs/mian/tx3.png'),
			name:'Kimmy McIlmorie',
			mess:'我枯了',
			time:'1个月前',
			count:3,
			onesay:Random.csentence(2),
		},
		{
			id:Random.guid(),
			url: require('@/assets/imgs/mian/tx4.png'),
			name:'Xu Jianhong',
			mess:'你是个好人',
			time:'1个月前',
			count:4,
			onesay:Random.csentence(2),
		},
		{
			id:Random.guid(),
			url: require('@/assets/imgs/mian/tx5.png'),
			name:'Kung Jiyeon',
			mess:'在吗，在干嘛想你了',
			time:'1个月前',
			count:5,
			onesay:Random.csentence(2),
		},
		]
		for(var i=0;i<5;i++){
			img.push({
				id:Random.guid(),
				url:Random.image('24x23', Random.color()),
				name:Random.string(7,10),
				mess:Random.csentence(2),
				time:'1个月前',
				count:Random.integer(0,100),
				onesay:Random.csentence(2),
			})
			
		}
	
	return img;
}
export default {
	messimg
}