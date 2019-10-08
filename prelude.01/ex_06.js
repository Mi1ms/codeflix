// exercice 06 

function kebabCase(str= '') {
    let str_split = str.split([a-zA-Z0-9]);
    console.log(str_split)
}

console.log(kebabCase('love one code'))
console.log(kebabCase('loveOneCode'))
console.log(kebabCase('-love-one-code-'))