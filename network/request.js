var request = require('request');

request('https://api.github.com', function (error, response, body) {
  console.log(response);
})