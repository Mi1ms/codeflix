// exercice 04 

module.exports = function capitalize(str = '', restToLoweropt = false) { 
    const str_split = str.split(' ');
    let nbr_word_to_cap = restToLoweropt ? 1 : str_split.length;
    for (let index = 0; index < nbr_word_to_cap; index++) {
        let firstletter = str_split[index][0].toUpperCase();
        let size_w_end = str_split[index].substring(1, str_split[index].length).toLowerCase();
        str_split[index] = firstletter + size_w_end;
    }
    return str_split.join(' ');
}