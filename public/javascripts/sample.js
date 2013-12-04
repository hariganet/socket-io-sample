var log = function(){ console.log(arguments); }

var socket = io.connect('http://localhost');

socket.on('connect', function(){
  log('connected');
  socket.emit('clientToServer', 'Test Message PAPAPA!!!!!!!');
  socket.on('serverToClient', function(data){
    log(data);
  });
});
