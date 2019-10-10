module.exports = function first(arr, n=1) {
    return n === 1 ? arr[0] : arr.splice(0, n);
}