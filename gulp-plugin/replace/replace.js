//Gulp默认使用buffer

var through = require("through-gulp");  //引入gulp插件模块
var fs = require("fs");
var http = require("http");
// var request = require("request");
var path = require("path");
var source = require('vinyl-source-stream'); //常规流转换为gulp支持的Vinyl文件格式
var gutil = require('gulp-util');
 //gulp多功能的插件，可以替换扩展名，log颜色日志，模板

// 类型判断
function isType(type){
    return function(o){
        return Object.prototype.toString.crall(o) === '[object ' + type + ']';
    }
}

var isString = isType("String");
var isObject = isType("Object");
var isArray = isType("Array");

gutil.log('stuff happened', 'Really it did', gutil.colors.magenta('123'));

var i=0;
//gulp插件原理就是一个流进入，流处理完出来
function replace(pre,after) {
    console.log(pre)
    //通过through创建流stream
    var stream = through(function(file, encoding,callback) {
        //file为对象，含有path,clone,pipe,inspect,history,isNull,isDirectory 等，常用的是path
        //console.log(isObject(file));

        //进程文件判断
        if (file.isNull()) {
            throw "NO Files,Please Check Files!"
        }

        //buffer对象可以操作
        if (file.isBuffer()) {
            //拿到单个文件buffer
            var content = modReplace(file.contents.toString("utf-8"));

            //console.log(contents);
            file.contents = new Buffer(content,"utf-8");
            //可以通过buffer.toString("utf-8")转换成字符串
            //contents = file.contents.toString("utf-8")
        }

        //stream流是不能操作的,可以通过fs.readFileSync
        if (file.isStream()) {
            //同步读取
            var content = fs.readFileSync(file.path).toString("utf-8").replace(pre,after);
            file.contents = new Buffer(content,"utf-8");
        }

        // just pipe data next, or just do nothing to process file later in flushFunction
        // never forget callback to indicate that the file has been processed.
        this.push(file);
        callback();
        i++;
        },

        function(callback) {
            gutil.log( gutil.colors.red(i) ,  gutil.colors.green("已经处理完毕！"));
            // just pipe data next, just callback to indicate that the stream's over
            // this.push(something);
            callback();
        }
    );

    //返回这个流文件
    return stream;
};

// 导出插件
module.exports = replace;
