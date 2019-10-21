
function splice(str="", start= 0, deleteCountopt= str.length - start, toAddopt= '') {
    const str_split = str.substring(start+ deleteCountopt).split('');
    const newArr = [];

    for (const key in str_split) {
        if (key == start)
            newArr.push(toAddopt)

        newArr.push(str_split[key]);
    }
    return newArr.join('')
}