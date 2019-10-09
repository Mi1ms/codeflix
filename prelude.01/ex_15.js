

function countSubstring(str='', substring) {
    let regex = substring;
    let match = [...str.match(regex)];
    return match.length;
}