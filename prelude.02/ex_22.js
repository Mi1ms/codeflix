module.exports = function pluck(list, property) {
    let newArr = [];
    for (const elem of list) {
        if (typeof elem === 'object' && elem.hasOwnProperty(property))
            newArr.push(elem[property])
    } 
    return newArr;
}