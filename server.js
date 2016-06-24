var express = require('express');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var morgan = require('morgan')
app.use(morgan('combined'))

server.listen(9000);

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


//io.on('connection', function (socket) {
//  socket.emit('news', { hello: 'world' });
//  socket.on('my other event', function (data) {
//    console.log(data);
//  });
//});
//
app.post('/notification', function(req, res) {

  var bodyarr = []
  req.on('data', function(chunk){
    bodyarr.push(chunk);
  })

  req.on('end', function(){
    const str = bodyarr.join('')
    const json = JSON.parse(str)
    const message = json['Message']
    io.emit('news', message);
    console.log(message)
  })
})
