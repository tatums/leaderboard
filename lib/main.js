require("./css/style.css")
require('angular/angular.js')
require('bootstrap-material-design/dist/css/bootstrap-material-design.css')

document.write(require("./js/content.js"))



const socket = require('socket.io-client')('http://localhost:9000');
socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});

socket.on('connect', function(){});
socket.on('event', function(data){});
socket.on('disconnect', function(){});

