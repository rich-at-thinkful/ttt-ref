var express = require('express');
var app = express();
var server = require('http').createServer();
var io = require('socket.io')(server);

var DATABASE = {
  users: [
    {
      id: 1,
      username: 'rich',
      password: 'password'
    }
  ]
};

app.use(express.static('public'));

require('socketio-auth')(io, {
  authenticate: function (socket, data, callback) {
    console.log('authentication event was received!');
    //get credentials sent by the client
    var username = data.username;
    var password = data.password;

    var user = DATABASE.users.find(function (user) {
      return user.username === username;
    });

    if (!user) {
      return callback(new Error('User not authenticated'));
    }

    return callback(null, user.password === password);
  }
});

io.on('connection', function(client){
  console.log('Client connected:', client.id);

  client.on('test', function() {
    console.log('test event received');
  })
});

app.listen(3000, () => console.log('Server on 3000....'));
server.listen(3001);
