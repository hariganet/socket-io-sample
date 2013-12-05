var log = function(){ console.log(arguments); }

var socket = io.connect('http://localhost');
var chat = io.connect('http://localhost/chat');
var news = io.connect('http://localhost/news');

socket.on('connect', function(){
  socket.emit('clientToServer', 'home');
  socket.on('serverToClient', function(data){
    log(data);
  });
});

chat.on('connect', function(){
  socket.emit('clientToServer', 'chat');
  socket.on('serverToClient', function(data){
    log(data);
  });
});

news.on('connect', function(){
  socket.emit('clientToServer', 'news');
  socket.on('serverToClient', function(data){
    log(data);
  });
});

