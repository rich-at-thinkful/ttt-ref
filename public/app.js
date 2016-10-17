$(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    var socket = io('http://localhost:3001');
    
    var username = $('#username').val();
    var password = $('#password').val();
    socket.emit('authentication', { username, password });

    socket.on('authenticated', () => {
      console.log('User authentictaed!');

      runTicTacToe(socket);
    });

    socket.on('unauthorized', () => {
      console.log('User not authorized!');
    });

    console.log(username, password);
  });
});

function runTicTacToe(socket){

  $('#board').append('Board appears!');
  socket.emit('test');

  actions.dispatch(placeXonSquare('1'));


  socket.on('opponentPlayedMove', (move) => {
    actions.dispatch(placeXOnSquare(move));
  });


  if (actions.type ==='PLACE_X_ON_SQUARE') {
    state
  }

  board = {
    'A1': 'O',
    'A2': '',
    'A3': ''
  }

}