var fs = require('fs');

var items = fs.readFileSync(process.argv[2]);
var str = items.toString().split('\n').length - 1;
console.log(str);