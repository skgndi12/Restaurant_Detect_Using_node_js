var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var server_router = require('./router/server')
var default_router = require('./router/default')

var app = express();
var nPort = 3000;

