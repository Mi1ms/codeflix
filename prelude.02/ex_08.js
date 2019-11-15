module.exports = function intersection(...arrays) {
    const [arr_f, ...rest] = arrays;
    rest.slice(1);
    const results = arr_f.filter(elem  => {
        let count = 0;
        const x = rest.map((arr) => {
            return arr.includes(elem) ? true : false;
        });
        return (!x.includes(false));
        
    })
    return results;
}