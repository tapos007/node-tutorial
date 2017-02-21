var fs = require('fs');
var contents = fs.readFileSync('file.txt', 'utf8');
 // this line is not reached until the read results are in
console.log(contents);
console.log("come there");
