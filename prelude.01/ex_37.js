function split(str='', separatoropt, limitopt) {
    const arr_split = str.split(separatoropt)
    const limit = limitopt ? limitopt : arr_split.length;
    return arr_split.slice(0, limit)
}