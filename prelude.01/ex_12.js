
function substr(str= '', start, len= str.length) {
    let str_part = str.split('').slice(start, (start+len));
    console.log( start, len);
    return  str_part.join('');
}