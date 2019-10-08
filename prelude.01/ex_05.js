// exercice 05 

function decapitalize(str = '') { 
    const str_split = str.split(' ');
    for (let index = 0; index < str_split.length; index++) {
        let firstletter = str_split[index][0].toLowerCase();
        let size_w_end = str_split[index].substring(1, str_split[index].length)
        str_split[index] = firstletter + size_w_end;
    }
    return str_split.join(' ');
}
