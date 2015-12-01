var express = require('express');
var app = express()
app.use(express.static('public'));
app.use(express.static('bower_components'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
    }
);
app.listen(process.env.PORT || 3000);
console.log('Listening on port 8000');
