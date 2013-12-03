var log = function(){ console.log(arguments); }

var socket = io.connect('http://localhost');

socket.on('connect', function(){
  log('connected');
  socket.emit('msg send', 'data');
  socket.on('msg push', function(msg){
    log(msg);
  });
});
