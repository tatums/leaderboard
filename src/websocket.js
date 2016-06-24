const socket = require('socket.io-client')('http://localhost:9000');

socket.on('news', function (data) {
  const d  =  JSON.parse(data)
  console.log(d.hello);
  console.log('client is processing news', data);
  socket.emit('my other event', { my: 'data' });
});

socket.on('connect', function(){
  console.log('connect!');
});

socket.on('event', function(data){
  console.log('event', {data: data});
});

socket.on('disconnect', function(){
  console.log('disconnect', {data: data});
});

