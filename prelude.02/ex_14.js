module.exports = function pairs(object) {
    let arr = [];
    for (let item of Object.entries(object)) {
        arr.push(item);
    } 
    return arr;
}