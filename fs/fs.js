//逐行读取文件内容
var lineReader = require('line-reader');
var key = 1;
lineReader.eachLine('./fs.txt', function(line, last) {
    console.log(line);
    console.log(key);
    key++;
    if (key>3) {
        return false;
    }
});