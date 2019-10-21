function words(str='', patternopt, flagsopt ='') {
    const newArr = [];
    const split = str.split(/([A-Z][a-z]+)/g);
    for (const elem of split) {
        if (elem.trim() !== '') {
            newArr.push(elem);
        }
    }
    return newArr;
}