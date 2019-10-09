
function insert(str= "", toInsertopt='', positionopt= 0) {
    let str_insert = [];
    if (toInsertopt.length > 1) {
        return false;
    } 
    let str_ps = 0;
    for (let i = 0; i <= str.length; i++) {
        if (positionopt === i) {
            str_insert.push(toInsertopt);
        } else {
            str_insert.push(str[str_ps]);
            str_ps++;
        }
    }
    console.log(str_insert)
    return str_insert.join('');
}

console.log(insert('hppy', 'A', 1))