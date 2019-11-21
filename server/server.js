const http = require('http');
const url = require('url');
const https = require('https');
const fs = require('fs');

let port;
const LOCAL_DATABASE = 'data.json';
if (process.argv[2]) {
    port = process.argv[2];
} else {
    console.log('Need parameter port (example: 8080)\n');
    exit(2);
}

http.createServer((req, res) => {
    console.log(`Running port ${port}`);
    const {pathname, query} = url.parse(req.url, true);
    
    if (req.method == 'GET') {  
        console.log('Method GET\n');
        if (pathname == '/' && query) {
            const name_parameter = query.name ? query.name : "World";
            res.write(htmlRender(name_parameter));     
        } 

    } else if (req.method == 'POST') {  
        console.log('method POST\n');
        let body = '';      
        if (pathname.includes('/students')) {
            req.on('data', (data) => {
                body += data.toString();
            });

            req.on('end', () => {
                
                let user = JSON.parse(body);
                let data;
                if (!fs.existsSync(`./${LOCAL_DATABASE}`)) {
                    user.id = 1;
                    data = [user];
                } else {
                    const json = require(`./${LOCAL_DATABASE}`);
                    user.id = json.length + 1;
                    json.push(user);
                    data = json;
                }

                fs.writeFileSync(LOCAL_DATABASE, JSON.stringify(data, null, 3));
            });
        }
    } else if (req.method == 'PUT') {
        console.log('methode PUT\n');
        let pathname_id = pathname.split('/students/').slice(1)[0];
        let body = '';
        req.on('data', (chunck) => {
            body += chunck.toString();
        });

        req.on('end', () => {

            const json = require(`./${LOCAL_DATABASE}`);
            const updte = JSON.parse(body);
            json.map((elem, id) => {
                if (elem.id == pathname_id) {
                    json[id] = updte;
                }
            });
            fs.writeFileSync(LOCAL_DATABASE, JSON.stringify(json, null, 3));        
        });
    } else if (req.method == 'DELETE') {
        const split_pathname = pathname.split('/').slice(1);

        req.on('end', () => {

            const newArr = [];
            if (split_pathname[split_pathname.length-1] !== '') {
            
                const json = require(`./${LOCAL_DATABASE}`);
                const id = parseInt(split_pathname[1]);
                json.map((elem) => {
                    if (elem.id !== id) {
                        newArr.push(elem);
                    }
                });
    
            }
            fs.writeFileSync(LOCAL_DATABASE, JSON.stringify(newArr, null, 3));        
        });
    }
    res.end();

}).listen(port);

function htmlRender(name) {
    return `<!DOCTYPE html><h1> Hello ${name} </h1></html>`;
}

