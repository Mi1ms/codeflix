const fs = require('fs');
const path = require('path');
const parseIni = require('./parseINI');
const parseEnv = require('./parseENV');

const argv = process.argv.slice(2);

// check size of parameter cli
if (argv.length !== 1) {
    console.log(`Require only 1 argument: have ${argv.length}`);
    process.exit();
} else {
    const configfile = argv[0];
    const file_exist = fs.existsSync(configfile);

    if (!file_exist) {
        console.log(`file ${configfile} doesnt exist`);
        process.exit(-1);
    }

    // check extension file 
    const content = fs.readFileSync(configfile, 'utf-8')
    const extension = path.extname(configfile) ;
    const split_path = configfile.split('/');
    const file = split_path.length > 1 ? split_path[split_path.length-1] : split_path[0]
    console.log(file, extension)

    if (file == '.env') {
        parseEnv(content, file);
    } else if (extension == '.ini') {
        parseIni(content);
    } else {
        console.log('Not a good format'); 
        process.exit(-1);
    }
}
