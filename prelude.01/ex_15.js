

module.exports = function countSubstring(str='', substring) {
    let regex = substring;
    let match = [...str.match(regex)];
    console.log(match)
    return match.length;
}