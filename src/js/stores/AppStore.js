var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');


var CHANGE_EVENT = 'change';

var _messages = {};

/**
 * Create a Message.
 */
function addMessage(data) {
  _messages[data[id]] = {
    lat: data[lat],
    lng: data[lng],
    message: data[msg.trim()]
  };
}

var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  /**
   * Get the entire collection of Messages.
   */
  getAll: function() {
    return _messages;
  }
});

AppDispatcher.register(function(action){
	switch(action.actionType) {
		case AppConstants.ADD_ITEM:
			console.log("ADD ITEM");
			break;

		case AppConstants.REMOVE_ITEM:
			console.log("REMOVE ITEM");
			break;

		case AppConstants.NEW_MESSAGE:
			addMessage(action.data);
			AppStore.emitChange();
			console.log("NEW MESSAGE");
			break;

		default:
			console.log("default");
			break;
	}
	console.log(action);
	return true;
});

module.exports = AppStore;
