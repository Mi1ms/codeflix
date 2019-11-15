// not finish 
function trim(str= '', whitespaceopt = ' ') {
    if (whitespaceopt === ' ') {
        return str.trim();
    } else {
        console.log(str.split(whitespaceopt))
    }
    console.log(str, str.replace(whitespaceopt, ''))
}
