var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  messageReceived: function(message){
  	AppDispatcher.handleViewAction({
  		actionType: AppConstants.NEW_MESSAGE,
  		data: message
  	})
  }
}

module.exports = AppActions
