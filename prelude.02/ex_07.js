module.exports = function union(...arrays) { 
    let arr_clean = [];
    arrays.map(elem => {
        elem.map( value => {
            arr_clean.includes(value) ? null : arr_clean.push(value);
        });
    });
    return arr_clean;
}