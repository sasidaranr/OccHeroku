var express = require('express');
var app = express();
var https = require('https');
var fs = require('fs');

app.set('port', (process.env.PORT || 5000));

https.createServer({
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem')
    }, app).listen(app.get('port'));

    app.get('/', function (req, res) {
      res.header('Content-type', 'text/html');
      return res.end('<h1>Hello, Secure World!</h1>');
    });
