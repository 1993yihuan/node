var http = require("http");
var url = require("url");

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("server获取路径为 : %c" + pathname,'color:red');

    route(pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("beta router");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("%c已启动 : 127.0.0.1:8888",'background:yellow');
}

exports.start = start;
