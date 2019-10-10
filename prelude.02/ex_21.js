module.exports = function map(ls, iterateCb) {
    let newArr = [];
    for (let item of Object.entries(ls)) {
        const [key, val] = item;
        console.log(iterateCb)
        newArr.push(iterateCb(val))
    } 
    return newArr;
}