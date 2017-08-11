var http = require('http');
var url = require('url');
var querystring = require('querystring');
var static = require('node-static');
var file = new static.Server('.', {
  cache: 0
});

// http.createServer(function(req, res) {
//   file.serve(req, res);
// }).listen(8080);

console.log('Server running on port 8080');


function accept(req, res) {

  if (req.url == '/phones.json') {
    // искусственная задержка для наглядности
    setTimeout(function() {
      file.serve(req, res);
    }, 2000);
    console.log("accept");
  } else {
    file.serve(req, res);
    console.log("error");
  }


}


// ------ запустить сервер -------

if (!module.parent) {
  http.createServer(accept).listen(8080);
} else {
  exports.accept = accept;
}
