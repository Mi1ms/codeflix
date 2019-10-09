
function charAt(str= '', position) {
    let ps = position ? position : 0;
    return str.length > 0 ? str[ps] : false;
}

console.log(charAt('ser', 1));