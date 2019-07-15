 var studios = [{
						id: 1,
						name: '耀莱成龙影城(建业店)',
						title: '金水区普惠路77号绿地之窗尚峰座正大乐城3楼',
						hui: '千与千寻等6部影片特惠',
						guan: '观影套餐限量特惠',
						kai: '开卡特惠,每单两张立减2元',
						price: '19.9元',
						distance: '1.7km'
					},
					{
						id: 2,
						name: '五一影城',
						title: '管城回族区东风南路商鼎路交汇处升龙广场4楼',
						hui: '千与千寻等2部影片特惠',
						guan: '观影套餐限量特惠',
						kai: '开卡特惠,每单两张立减2元',
						price: '19.9元',
						distance: '1.9km'
					},
					{
						id: 3,
						name: '奥斯卡熙地港影城',
						title: '金水区郑东新区农业东路和众意西路交叉口熙地港...',
						hui: '黑衣人等6部影片特惠',
						guan: '观影套餐限量特惠',
						kai: '开卡特惠,每单两张立减2元',
						price: '19.9元',
						distance: '4.7km'
					},
					{
						id: 4,
						name: '中影星影迷影城(光彩店)',
						title: '管城回族区人民路太康路交叉口光彩3楼',
						hui: '黑衣人等14部影片特惠',
						guan: '观影套餐限量特惠',
						kai: '开卡特惠,每单两张立减2元',
						price: '19.9元',
						distance: '9.4km'
					}
				]
  var state = {
	  cimelist: studios,
	  temp: {}
  }
  
  var getters={
  	
  }
  
  var mutations ={
  	 getGoods(state,id){
  		state.temp = state.cimelist.find(item=>item.id==id); 
  	 },
  }
  
  var actions ={
  	addBuy({ dispatch, commit, getters, rootGetters },id){
  		commit('getGoods',id,{root: true});
  	}
  }
  
  export default{
  	namespaced: true,
  	state,
  	getters,
  	mutations,
  	actions,
  }