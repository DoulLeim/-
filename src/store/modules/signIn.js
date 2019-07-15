var state={
  count:1,
  goodList:[]
}
var getters={

}
var mutations={
  good(state,payload){
    // console.log(payload.id)
    if(!state.goodList.some(item=>item.id==payload.id)){
      state.goodList.push({
        id:payload.id,
        count:1,
        // count:payload.inCount,
      })
    }else{
      var item=state.goodList.find(item=>item.id==payload.id);
      item.count++
      // console.log(item.count)
    }
  }

}
var actions={

}
export default {
  namespaced: true,
  state,
  mutations,
  getters
}