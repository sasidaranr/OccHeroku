var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  res.send('Hello World! GET');
});

app.post('/', function(req, res) {
    console.log("request  ",req)
      res.send('Hello World! POST');
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ', app.get('port'));
});
