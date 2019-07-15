import alls from '@/mock/all.js'

function getall() {
    var alltu = alls.all();
    new Promise((resolve, reject) => {
        resolve(alltu);
    })
    return alltu;
}

export default {
    getall
}