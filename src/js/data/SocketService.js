var AppActions = require('../actions/AppActions');

var sock = new SockJS('http://localhost:3333/echo');

module.exports = {
    start: function() {
        sock.onopen = function() {
            console.log('open');
        };
        sock.onmessage = function(e) {
            AppActions.messageReceived(JSON.parse(e.data));
        };
    },

    sendMessage: function(message) {
        sock.send(message);
    }
};
