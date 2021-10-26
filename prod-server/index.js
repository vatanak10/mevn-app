'use strict';

var _routes = require('./routes');

var _env = require('./config/env');

var _db = require('./config/db');

var express = require('express');
var app = express();
var port = 3000;


(0, _env.setEnvironment)(app);
(0, _db.connectToDB)();
(0, _routes.registerRoutes)(app);

app.get('/', function (req, res) {
    if (process.env.NODE_ENV !== "production") {
        return res.send('Running server in development mode');
    } else {
        return res.sendFile('index.html', { root: __dirname + '/../dist/' });
    }
});

app.listen(port, function () {
    console.log('MEVN Stack app listening at http://localhost:' + port + ' in ' + process.env.NODE_ENV + ' mode!');
});