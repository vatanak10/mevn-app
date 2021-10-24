'use strict';

var _routes = require('./routes');

var express = require('express');
var app = express();
var port = 3000;


(0, _routes.registerRoutes)(app);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log('MEVN Stack app listening at http://localhost:' + port);
});