function isBlank(str='') {
    if (str.length == 0)
        return true

    return str.match(/[\s]/g).length === str.length;

}