import axios from 'axios'
// 如果export default    可以用import 直接导入 

// 导出一个组件 用户获取正在热映列表
export function  getInTheaters(start,limit) {
	const url = 'http://www.bufantec.com/api/douban/movie/in_theaters';
	//返回的结果是promise类型
	return axios.get(url+'?start='+start+'&limit='+limit);
}
export function  getSubject(id) {
	const subjectUrl = 'http://www.bufantec.com/api/douban/movie/subject/';
	//返回的结果是promise类型
	return axios.get(subjectUrl+id);
}
export function  getTop250(start,limit) {
	const top250Url = 'http://www.bufantec.com/api/douban/movie/top250';
	//返回的结果是promise类型
	return axios.get(top250Url+'?start='+start+'&limit='+limit);
}