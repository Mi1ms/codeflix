
function splice(str="", start= 0, deleteCountopt= str.length - start, toAddopt= '') {
    let substring = str.substring(start, start+deleteCountopt);
    console.log(substring)
    // str = start >= 0 ? str.substring(deleteCountopt, str.length) : str.substring(0, (str.length-start));
    console.log(str.split(substring));
    console.log(str )
    if (toAddopt.length > 0)
        str = toAddopt + str;


    // console.log(str)
}

console.log(splice('Hey June, dont be afraid', 1, 4))
// console.log(splice('Hey June, dont be afraid', -10, 4, '...'))