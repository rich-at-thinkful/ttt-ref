var React = require('react');
var ReactDOM = require('react-dom');
var createStore = require('redux').createStore;
var reducers = require('./reducers');
var actions = require('./actions');

var store = createStore(reducers);

var addSocket = socket = {
  return {
    type: ADD_SOCKET,
    payload: socket
  };
};

var reducer = function(state, action) {
  if (action.ADD_SOCKET) {
    return Object.assign({}, state, { socket: action.payload });
  }
}

store.dispatch(addSocket(socket));


$(function() {
  ReactDOM.render()
});

var BoardGridItem = React.createClass({
  componentDidMount() {
    this.props.socket.on('moved', () => {
      this.props.dispatch(placeXonBoard('a1'));
    })
  }

  render() {
    return (
      <div onClick={() => this.props.socket.emit('moved')}>
        {this.props.socket}
      </div>
    );
  }
});

mapStateToProps
connect()