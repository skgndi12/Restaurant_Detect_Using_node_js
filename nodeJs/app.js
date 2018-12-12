var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var server_router = require('./router/server')
var default_router = require('./router/default')

var app = express();
var nPort = 3000;

app.use('/', default_router)

app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public/view'));


app.listen(nPort, function () {
  console.log('app listening on port ' + nPort);
});