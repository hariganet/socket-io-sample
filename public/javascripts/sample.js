var log = function(){ console.log(arguments); }

var socket = io.connect('http://localhost');

socket.on('connect', function(){
  log('connected');
  socket.emit('msg send', 'data');
  socket.on(7msg push', function(msg){
    log(msg);
  });
});
