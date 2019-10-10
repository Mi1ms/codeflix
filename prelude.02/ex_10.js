module.exports = function indexOf(arr, value) {
    let idx = 0;
    for (const nb in arr) {
        if (arr[nb] === value) 
            return nb;
    }
}