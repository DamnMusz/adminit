//var http = require('http');
//var port = process.env.port || 1337;
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);


var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

var app = express()

app.use(express.static('web'));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())

app.use(cookieParser());

var server = app.listen(3000, function () {
    
    var host = server.address().address
    var port = server.address().port
    
    console.log('Example app listening at http://%s:%s', host, port)
})

app.get('/', function (req, res) {
    res.render('index.html');
});

