const { duplicate, transform, csv2json, catPipeWc } = require('./streambox');
const {upperCase} = require('voca');
const args = process.argv.slice(2);

if (args.length == 0) {
     console.log('No arguments, required minimum 1\n')
     exit(2);
}
catPipeWc(args[0] ,args[1], function(result) {
     console.log(result)
});
// transform(args[0], /Ch0pin/ig, upperCase, false);