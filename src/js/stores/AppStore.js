var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');
var Socket = require('../data/SocketService');

Socket.start();

var CHANGE_EVENT = 'change';

var _messages = ["First msg.", "rywqnvmxc fe8w hfhasdf", "dHDUHSAD ewqdsa"]

/**
 * Create a Message.
 */
function addMessage(data) {
	_messages.push(data);
  // _messages[data[id]] = {
  //   lat: data[lat],
  //   lng: data[lng],
  //   message: data[msg.trim()]
  // };
}

var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  
  getAll: function() {
    return _messages;
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action){
	switch(action.actionType) {
		case AppConstants.NEW_MESSAGE:
			addMessage(action.data);
			AppStore.emitChange();
			console.log(action.data);
			break;

		default:
			console.log("default");
			break;
	}
	return true;
});

module.exports = AppStore;
