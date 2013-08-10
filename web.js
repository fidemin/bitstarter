var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

var data = new Buffer(fs.readFileSync('index.html'));
app.get('/', function(request, response) {
  response.send(data)
    
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
