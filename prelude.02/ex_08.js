// non fonctionnelle (boouhh mims bouuh!! )

module.exports = function intersection(...arrays) {
    const [arr_f, ...rest] = arrays;
    arrays.splice(0,1);
    let present = false;
    let count = 0;
    let results = arr_f.filter(elem  => {
        return rest.map(array => {
            return array.includes()
        });
    })
    console.log(results)
}