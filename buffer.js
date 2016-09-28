// Buffer
var buf = new Buffer(256);
var len = buf.write("www.runoob.com");

console.log("%cBuffer",'background:yellow')
console.log("Buffer 原始字符串为 %cwww.runoob.com",'color:red')
console.log('--------------------');

console.log("写入字节数为 : ",len);
console.log('输出全部数据 : ',buf.toString('utf8'))
console.log('输出部分数据 : ',buf.toString('utf8',0,7))
console.log('输出转换的JSON数据 : ',buf.toJSON(buf))
//! Buffer


console.log('');

// Buffer.concat()
console.log('%c缓冲区合并 Buffer.concat()','background:yellow');

var buffer1 = new Buffer('姓名:');
var buffer2 = new Buffer('DC');
var buffer3 = Buffer.concat([buffer1,buffer2]);

console.log("buffer1 原始字符串为 : %c姓名:",'color:red')
console.log("buffer2 原始字符串为 : %cDC",'color:red')
console.log('--------------------');

console.log("合并后的字符串为 : %c"+buffer3.toString(),'color:red');
//! Buffer.concat()

console.log('');

// Buffer.copy()
console.log('%c缓冲区拷贝 Buffer.copy()','background:yellow');

var buffer4 = new Buffer('ABCDE');
    // 拷贝一个缓冲区
var buffer5 = new Buffer(5);
console.log("buffer4 原始字符串为 : %cABCDE",'color:red')
console.log("buffer5 原始字符串为 : %cNULL",'color:red')
console.log('--------------------');

buffer4.copy(buffer5);
console.log("buffer5 copy后 字符串为 : %c"+buffer5.toString(),'color:red');
//！ Buffer.copy()

console.log('');

// Buffer.slice()
console.log('%c缓冲区剪裁 Buffer.slice()','background:yellow');

var buffer6 = new Buffer('12345');
    // 剪切缓冲区
var buffer6 = buffer6.slice(0,2);

console.log("buffer6 原始字符串为 : %c12345",'color:red')
console.log('--------------------');

console.log('buffer6 剪裁后的数据为 : %c'+buffer6.toString(),'color:red');
//! Buffer.slice()

console.log('');

console.log('%c缓冲区长度 .length','background:yellow');

var buffer7 = new Buffer('1234567');
console.log("buffer7 原始字符串为 : %c1234567",'color:red')
console.log('--------------------');

console.log("buffer7 的长度为: %c"+buffer7.length,'color:red');















//1
