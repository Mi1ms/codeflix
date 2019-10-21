
module.exports = function substr(str= '', start, len= str.length) {
    let str_part = str.split('').slice(start, (start+len));
    return  str_part.join('');
}