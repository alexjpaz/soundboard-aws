var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const EventEmitter = require('events');

var events = new EventEmitter();

app.get('/', function(req, res){
    res.sendfile('index.html');
});

app.get('/play', function(req, res) {
  events.emit('play', {
    "url": req.query.url
  });
  res.send("OK");
});

io.on('connection', function(socket){
  events.on('play', function(data) {
    socket.send(data);
  });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
