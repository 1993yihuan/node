/*读取文件*/

console.log("%c1.读取流",'background:yellow')

var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('beta.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
    data += chunk;
});

readerStream.on('end',function(){
    console.log('读取完成，读取数据为 : %c'+data,'color:red');
    console.log('')
    console.log("%c2.写入流",'background:yellow')
    /*写入文件*/
        var datain = '1234567 ABCDEFG';

        // 创建一个可以写入的流，写入到文件 beta.txt 中
        var writerStream = fs.createWriteStream('beta.txt');

        // 使用 utf8 编码写入数据
        writerStream.write(datain,'UTF8');

        // 标记文件末尾
        writerStream.end();

        // 处理流事件 --> data, end, and error
        writerStream.on('finish', function() {
            console.log("写入完成,写入数据为 : %c"+datain,'color:red');
            console.log('');
            /*管道流pipe*/
                console.log("%c3.管道流",'background:yellow');

                // 创建一个可读流
                var readerStream2 = fs.createReadStream('beta.txt');

                // 创建一个可写流
                var writerStream2 = fs.createWriteStream('beta2.txt');

                // 管道读写操作
                // 读取 beta.txt 文件内容，并将内容写入到 beta2.txt 文件中
                readerStream2.pipe(writerStream2);
                console.log('将beta.txt的内容写入beta2.txt，内容为 : %c'+datain,'color:red');
            /*！管道流pipe*/
        });

        writerStream.on('error', function(err){
           console.log(err.stack);
        });
    /*!写入文件*/
    });

readerStream.on('error', function(err){
    console.log(err.stack);
});
/*!读取文件 */
