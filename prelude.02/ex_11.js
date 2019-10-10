module.exports = function lastIndexOf(arr, value) {
    let idx = 0;
    for (const nb in arr) {
        if (arr[nb] === value) 
            idx = nb;
    }
    return idx;
}