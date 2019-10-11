// test file for all exercices

// import from folder prelude.02 
let first = require('./prelude.02/ex_01');
let initial = require('./prelude.02/ex_02');
let last = require('./prelude.02/ex_03');
let rest = require('./prelude.02/ex_04');
let flatten = require('./prelude.02/ex_05');
let without = require('./prelude.02/ex_06');
let union = require('./prelude.02/ex_07');
let intersection = require('./prelude.02/ex_08');
let difference = require('./prelude.02/ex_09');
let indexOf = require('./prelude.02/ex_10');
let lastIndexOf = require('./prelude.02/ex_11');
let keys = require('./prelude.02/ex_12');
let value = require('./prelude.02/ex_13');
let invert = require('./prelude.02/ex_15');
let pick = require('./prelude.02/ex_16');
let omit = require('./prelude.02/ex_17');
let has = require('./prelude.02/ex_18');
let size = require('./prelude.02/ex_19');
let sample = require('./prelude.02/ex_20');
let map = require('./prelude.02/ex_21');
let pluck = require('./prelude.02/ex_22');
let isArray = require('./prelude.02/ex_23');
let isObject = require('./prelude.02/ex_24');
let isMatch = require('./prelude.02/ex_25');

// console.log(initial([1, 3, 5, 7, 42]))
// console.log(rest([1, 3, 5, 7, 42]))
console.log( isMatch({name: "Robin", city: "Vancouver", id: 3}, {name: "Robin"}) )
