const os = require('os');
const test = require('./test.js');
const _ = require('lodash');
// console.log(os.cpus());
// console.log(os.userInfo());
// console.log(test.sum);
// console.log(test.add(4,6));
var array = [1, 2, 3];

console.log(_.reverse(array));

console.log(_.isString('abc'));

console.log(_.isString(1));
