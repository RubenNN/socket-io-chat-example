var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket){
  io.emit('someone connect', 'New user connected')
  socket.on('chat message', function(msg){
    io.emit('chat message respond', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});