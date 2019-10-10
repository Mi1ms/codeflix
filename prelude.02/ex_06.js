module.exports = function without(arr, ...values) {
    console.log(values)
    let arr_clean = [];
    for (let val of arr ) {
        if (!values.includes(val)) {
            arr_clean.push(val)
        }
    }
    return arr_clean;
}