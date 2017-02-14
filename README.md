##nodejs
>写了一些node的基础API和一些实用的实例，用来devtool去调试代码


###文件说明
####fs文件夹
>逐行读取文件内容，可用于替换行的操作

####network文件夹
>node的网络模块

####buffer.js
>字符的替换、剪裁、合并
![](http://olcrntw9l.bkt.clouddn.com/8870C725-EC79-40FC-A388-8894EE8BB378.png)

####event.js
>事件的绑定与触发

```javascript
// Import events module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function (data) {
   console.log('执行了命名事件,参数为'+data);
}

// 绑定事件
eventEmitter.addListener('connection', connectHandler);

// 绑定匿名事件
eventEmitter.addListener('data_received', function(){
   console.log('执行了匿名事件');
});

eventEmitter.on('removeListener',function() {
    console.log('有事件被删除啦，%c触发了事件','color:red;')
})

// 触发事件
eventEmitter.emit('connection','1');
eventEmitter.emit('data_received');

//移除事件
console.log('%c<--移除事件-->','background:red;color:#fff')
eventEmitter.removeListener('connection',connectHandler)
console.log('%c<--!移除事件-->','background:red;color:#fff')

//未执行已移除的事件
eventEmitter.emit('connection');
```

####gulp-plugin文件夹
>也用node写了几个gulp脚本，gulp-plugin文件夹里面


*Yihuan He email:yihuan1993@qq.com*
