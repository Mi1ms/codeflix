function isAlpha(str='') {
    return str.match(/[a-z]/ig).length === str.length;
}