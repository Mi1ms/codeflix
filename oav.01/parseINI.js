const fs = require('fs');

module.exports = function parseINI(content) {
    console.log(content.split(/\[.*\]/gm)[2]);
    const match = content.match(/^\s*?([\w.]*)\s*?=(.*)/mg)
    // ^\[.*\](\n)+(\n[.]*)
    // console.log(match)
}