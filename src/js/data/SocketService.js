var AppActions = require('../actions/AppActions');

var sock = new SockJS('http://localhost:3333/echo');
// sock.onopen = function() {
//  console.log('open');
// };
// sock.onmessage = function(e) {
//  console.log('message', e.data);
// };
// sock.onclose = function() {
//  console.log('close');
// };

module.exports = {
    start: function() {
        sock.onopen = function() {
            console.log('open');
        };
        sock.onmessage = function(e) {
            this.messageReceived(e.data);
        };
    },

    sendMessage: function(message) {
        sock.send(message);
    },

    messageReceived: function(message) {
        console.log(message);
        AppActions.messageReceived(message);
    }
};
