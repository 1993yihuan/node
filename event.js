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
