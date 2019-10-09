function last(str = '', len=1) {
    let last_letter = str.length ; 
    return str.substring((last_letter - len), last_letter);
}
