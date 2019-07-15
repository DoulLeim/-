import Mock from 'mockjs'
const Random = Mock.Random

function lylist() {
    var list = [{
        id: "a1",
        add: '地址: 云龙广场',
        cine: '万达国际影城',
        title: '后来的我们',
        hall: '五号厅 5排14座 5排15座',
        time: Random.time('HH:mm'),
        time1: Random.time('HH:mm'),
        title1: '原版3D',
        hall: '1号厅（冠名招商中）',
        moth: Random.integer(20, 50),
    },
    {
        id: "a2",
        add: '地址: 二七万达',
        cine: '长城国际影城',
        title: '傲慢与偏见',
        hall: '六号厅 1排15座',
        time: Random.time('HH:mm'),
        time1: Random.time('HH:mm'),
        title1: '原版3D',
        hall: '2号厅（冠名招商中）',
        moth: Random.integer(20, 50),
    },
    {
        id: "a3",
        add: '地址: 国贸大厦',
        cine: '郑州国际影城',
        title: '大鱼海棠',
        hall: '一号厅  2排1座',
        time: Random.time('HH:mm'),
        time1: Random.time('HH:mm'),
        title1: '原版3D',
        hall: '3号厅（冠名招商中）',
        moth: Random.integer(20, 50),
    },
    {
        id: "a4",
        add: '地址: 二七万达',
        cine: '长城国际影城',
        title: '傲慢与偏见',
        hall: '六号厅 1排15座',
        time: Random.time('HH:mm'),
        time1: Random.time('HH:mm'),
        title1: '原版3D',
        hall: '4号厅（冠名招商中）',
        moth: Random.integer(20, 50),
    },
    {
        id: "a5",
        add: '地址: 云龙广场',
        cine: '万达国际影城',
        title: '后来的我们',
        hall: '五号厅 5排14座 5排15座',
        time: Random.time('HH:mm'),
        time1: Random.time('HH:mm'),
        title1: '原版3D',
        hall: '5号厅（冠名招商中）',
        moth: Random.integer(20, 50),
    },
    {
        id: "a6",
        add: '地址: 国贸大厦',
        cine: '郑州国际影城',
        title: '大鱼海棠',
        hall: '一号厅  2排1座',
        time: Random.time('HH:mm'),
        time1: Random.time('HH:mm'),
        title1: '原版3D',
        hall: '6号厅（冠名招商中）',
        moth: Random.integer(20, 50),
    },
    ]
    return list;
}
export default {
    lylist
}


