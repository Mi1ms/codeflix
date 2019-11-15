const fs = require('fs');
const path = require('path');
const { Transform } = require('stream');

function duplicate(filenames) {
    
    if (filenames.length > 0) {
        filenames.map(filename => {       
            const ext = path.extname(filename);
            const base = path.basename(filename, ext);
            const outputFilename = `${base}.copy${ext}`;
            const rstream = fs.createReadStream(filename);
            const wstream = fs.createWriteStream(outputFilename);
            
            rstream.on('open', () => {
                rstream.pipe(wstream);
            });
            
            rstream.on('error', (err) => {
                res.end(err);
            });
        });
            
    } else {
        console.log(`Expected one file, received ${filename.length} file`);
    }
}

function transform(filename, rgx, cb, in_stdout = true) {
    const ext = path.extname(filename);
    
    const rstream = fs.createReadStream(filename)
    const wstream = fs.createWriteStream(`${filename}`)

    if (in_stdout) {
        let content = "";
        
    } else {
        const updatestream = new Transform({
            transform(chunk, encoding, callback) {
                this.push(chunk.toString().replace(rgx, cb));
                callback();
            }
        });
    
        rstream.pipe(updatestream).pipe(wstream);
    }
}

function csv2json(filename) {
    const extension = path.extname(filename);
    if (extension.includes('csv')) {
        const rstream = fs.createReadStream(filename);
        const wstream = fs.createWriteStream('copy.json');
        let jsonContent = {};
        
        rstream.on('data', chunk => {
            let line = chunk.toString();
            const array_split = line.split('\n');
            const arr_key = array_split[0].split(';'); 
            const arr_val = array_split[1].split(';'); 

            arr_key.map((key, idx) => {
                if (arr_val[idx].includes(',')) {
                    jsonContent[key] = arr_val[idx].toLowerCase().split(',');
                } else if (arr_val[idx].match(/[a-z]/ig) == null) {
                    const datearg = arr_val[idx];
                    const year = datearg.slice(0, 4);
                    const month = datearg.slice(4, 6);
                    const day = datearg.slice(6, 8);
                    jsonContent[key] = `${year}-${month}-${day}`;
                } else {
                    jsonContent[key] = arr_val[idx];
                }
            });
        });
        rstream.on('end', () => {
            fs.writeFile('Copy.json', JSON.stringify(jsonContent), (err) => {
            });
        });
        
    } else {
        console.log(`Excepted file extension csv, received ${extension}`)
        exit(1);
    }
}

function catPipeWc(directory, type, cb) {
    let promise = new Promise(() => {});
    fs.readdir(directory, function(err, items) {
        const match_arr = items.filter( item => {
            return path.extname(item) == `.${type}`; 
        });
        let count = 0;
        // Algorithm count elements
        match_arr.map(file => {
            const rstream = fs.createReadStream(`${directory}${file}`);

            rstream.on('data', (chunck) => {
                const split_chunck = chunck.toString().split('');
                count += split_chunck.length;
            });
            rstream.on('end', () => {
                promise = Promise.resolve(count)
                console.log(count)
            });
        });
        promise.then(count => {
           cb(count)
        })
    });
}

module.exports = {
    duplicate,
    transform,
    csv2json,
    catPipeWc,
}