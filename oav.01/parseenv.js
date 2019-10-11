const fs = require('fs');

module.exports = function parseENV(content, filename) {
    
    let json_contnt = {};
    const matching = content.match(/^([\w.]+)=(.+)/gm);
    for (let elem of matching) {
        [key, value] = elem.split("=");
        json_contnt[key] = value;
    }

    let today = new Date();
    const name = filename.slice(1); 
    let filedate = name+today.getFullYear()+(today.getMonth()+1)+today.getDate()+today.getHours()+today.getMinutes()+today.getSeconds()+".json";
    
    fs.writeFile(filedate, JSON.stringify(json_contnt), (err) => {
        if (err) throw err;
        console.log('file has been successfully created')
    })

}