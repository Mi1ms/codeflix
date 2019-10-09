
function reverse(str= "") {
    let countdown = str.length;
    let str_reverse = [];
    for (let i = str.length; i >= 0; i--) {
        str_reverse.push(str[i])
    }
    return str_reverse.join('');
}