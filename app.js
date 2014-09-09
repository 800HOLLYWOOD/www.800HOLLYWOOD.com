var express = require('express');
var app = express();
var config = require('./config.json');
console.log(config);
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);
