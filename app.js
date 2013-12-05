
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();
var server = http.createServer(app); 

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var log = console.log;

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
  log('connected');
  socket.on('clientToServer', function(data, fn){
    fn(data + 'was successfully sent');

    socket.emit('serverToClient', data, function(data){
      log(data);
    });
    socket.broadcast.emit('serverToClient', data);
  
  });
  socket.on('disconnect', function(){
    log('disconnected');
  });
});
