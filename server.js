var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.all('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(3000, function() {
    console.log('ready on port 3000');
});