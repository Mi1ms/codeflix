module.exports = function sample(list, nbr= 1) {
    let newArr = []; 

    while(newArr.length < nbr ) {
        const elem_of_list =list[Math.floor(Math.random() * Math.floor(list.length))]
      
        if (!newArr.includes(elem_of_list))
            newArr.push(elem_of_list);
    }
    return newArr;
}