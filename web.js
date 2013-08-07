var express = require('express');
var fs = require('fs');

var data = fs.readFileSync('index.html');
var buf = new Buffer(data);
var filecontent = buf.toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(filecontent);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
