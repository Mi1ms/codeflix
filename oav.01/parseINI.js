const fs = require('fs');

module.exports = function parseINI(content, filename) {
    const result_json = {};
    const match = content.match(/^(\[.*\])|^(\s*?[\w.]+\s*?)=\s.*?(.*)/gm);
    let nameArr;
    const file = filename.split('.');


    match.map((elem, idx) => {
        let clean_el = elem.trim();
        if(clean_el[0] == "[") {
            const nameelem = clean_el.replace('[', '').replace(']', '');
            result_json[nameelem] = [];
            nameArr = nameelem;
        } else {
            position_split = clean_el.indexOf('=');
            const key = clean_el.substring(0, position_split).trim();
            const value = clean_el.substring(position_split+1, clean_el.length).trim() == '' ? null : clean_el.substring(position_split+1, clean_el.length).trim(); 
            const obj = {};
            obj[key] = value;
            result_json[nameArr].push(obj);
        }
    });

    let today = new Date();
    let filedate = file[0]+today.getFullYear()+(today.getMonth()+1)+today.getDate()+today.getHours()+today.getMinutes()+today.getSeconds()+".json";
    
    fs.writeFile(filedate, JSON.stringify(result_json), (err) => {
        if (err) throw err;
        console.log('file has been successfully created')
    })
}