 var myorders=[
	 {
		 id:1,
		 url: require('@/assets/imgs/mian/dy1.png'),
		 name:'后来的我们',
		 yname:'万达国际影院',
		 price:30,
		 time:'5月16号 18:00',
		 state:'已完成',
		 type:'all',
		 open:1,
		 place:'五号厅 5排14座'
	 },
	 {
	 		 id:2,
	 		 url: require('@/assets/imgs/mian/dy2.png'),
	 		 name:'后来的我们',
	 		 yname:'好莱鸟国际影院',
	 		 price:40,
	 		 time:'5月30号 20:00',
	 		 state:'代付款',
	 		 type:'payment',
	 		 open:1,
	 		 place:'五号厅 5排14座'
	 },
	 {
	 		 id:3,
	 		 url: require('@/assets/imgs/mian/dy3.png'),
	 		 name:'后来的我们',
	 		 yname:'流弊国际影院',
	 		 price:30,
	 		 time:'3月22号 00:00',
	 		 state:'待评论',
	 		 type:'remain',
	 		 open:1,
	 		 place:'五号厅 5排14座'
	 },
	 {
	 		 id:4,
	 		 url: require('@/assets/imgs/mian/dy4.png'),
	 		 name:'后来的我们',
	 		 yname:'雷霆总冠军国际影院',
	 		 price:50,
	 		 time:'10月16号 18:00',
	 		 state:'等待退款',
	 		 type:'await',
	 		 open:1,
	 		 place:'五号厅 5排14座'
	 },
	 {
	 		 id:5,
	 		 url: require('@/assets/imgs/mian/dy1.png'),
	 		 name:'后来的我们',
	 		 yname:'雷霆总冠军国际影院',
	 		 price:50,
	 		 time:'10月16号 18:00',
	 		 state:'等待退款',
	 		 type:'await',
	 		 open:1,
	 		 place:'五号厅 5排14座'
	 },
	 {
	 		 id:6,
	 		 url: require('@/assets/imgs/mian/dy2.png'),
	 		 name:'后来的我们',
	 		 yname:'雷霆总冠军国际影院',
	 		 price:50,
	 		 time:'10月16号 18:00',
	 		 state:'等待退款',
	 		 type:'await',
	 		 open:1,
	 		 place:'五号厅 5排14座'
	 },
 ]
 var state= {
      myorders,
	  ordersdata:{}
  }
	var getters={
		
	}
  var mutations= {
		getdata(state,id){
			state.ordersdata=state.myorders.find(item=>item.id==id);
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

