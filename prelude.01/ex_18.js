

function lastIndexOf(str="", search, fromIndexopt) {
    let pos = -1;
    for (let letter in str) {
        if (str[letter] === search) {
            pos = letter;
        }
    }
    return pos;
}