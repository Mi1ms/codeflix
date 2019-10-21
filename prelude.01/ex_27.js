function isAlphaDigit(str='') {
    return str.match(/[a-z0-9]/ig).length === str.length;
}