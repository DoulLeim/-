import Mock from 'mockjs'
var Random = Mock.Random
const commentList = []
for (var i = 0; i < 10; i++) {
    commentList.push({
        id: Random.guid(),
        photo: Random.image('50x50', Random.color(), Random.cfirst()),
        username: Random.word() + Random.integer(1001, 9999),
        average: Random.float(4, 9, 1, 1),
        text: Random.cparagraph(2, 4),
        time: Random.datetime('MM-dd HH:mm'),
        praise: Random.integer(10, 99),
        comment: Random.integer(10, 49)
    })
}
var hotCity = [
    { id: Random.guid(), name: '上海' },
    { id: Random.guid(), name: '北京' },
    { id: Random.guid(), name: '广州' },
    { id: Random.guid(), name: '杭州' },
    { id: Random.guid(), name: '深圳' },
    { id: Random.guid(), name: '武汉' },
    { id: Random.guid(), name: '成都' },
    { id: Random.guid(), name: '重庆' },
    { id: Random.guid(), name: '南京' },
    { id: Random.guid(), name: '西安' },
]
var sideList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'S', 'T', 'W', 'X', 'Y', 'Z']

var state = {
    list: commentList,
    list2: commentList,
    hotCity: hotCity,
    aa: '',
    bb: '',
    cc: '',
    sideList: sideList
}
var getters = {
    time(state) {
        state.cc = state.list.map(item => {
            var obj = Object.assign({}, item)
            obj.time2 = Date.parse(new Date(item.time))
            return obj;
        });
        function fn(a, b) {
            return b.time2 - a.time2;
        }
        return state.cc.sort(fn);
        // console.log(state.list);
    },
    good(state) {
        return state.aa = state.list.filter(item => item.average >= 6.0);
    },
    negative(state) {
        return state.bb = state.list.filter(item => item.average < 6.0);
    }
}

export default {
    namespaced: true,
    state,
    getters
}