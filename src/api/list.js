import lists from '@/mock/list.js'

function getLists() {
	var list = lists.lylist();
	var promise = new Promise((resolve, reject) => {
		resolve(list);
	})
	return promise;
}

export default {
	getLists
}