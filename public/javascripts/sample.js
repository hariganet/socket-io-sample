var log = function(){ console.log(arguments); }

var socket = io.connect('http://localhost');

socket.on('connect', function(){
  log('connected');
  socket.emit('clientToServer', 'Test Message PAPAPA!!!!!!!', function(data){
    log(data);
  });
  socket.on('serverToClient', function(data, fn){
    fn(data + 'was successfully pushed');
    log(data);
  });
});
