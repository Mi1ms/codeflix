module.exports = function values(object) {
    let arr = [];
    for (let [key, val] of Object.entries(object)) {
        arr.push(val);
    } 
    return arr;
}