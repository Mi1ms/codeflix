

function indexOf(str="", search, fromIndexopt) {
    let pos = -1;
    for (let letter in str) {
        if (str[letter] === search) {
            return letter
        }
    }
    return pos;
}