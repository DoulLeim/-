import api from '@/api/all.js'
var api1;
api1 = api.getall();



var state = {
    tick: api1,
    getone: {}
}
var getters = {

}
var mutations = {
    getOne(state, id) {
        console.log(id)
        state.getone = state.tick.find(item => item.id == id);
        console.log(state.getone);
    }
}
var actions = {

}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions

}
