/** @jsx React.DOM */
var React = require('react');
var Message = require('./message');
var ReactPropTypes = React.PropTypes;
var Socket = require('../data/SocketService');

var App = React.createClass({
    getInitialState: function () {
      return { text: "" };
    },

    propTypes: {
      allMessages: ReactPropTypes.object.isRequired,
    },

    render:function(){
      var msgs = []
      for (var key in this.props.allMessages) {
        msgs.push(<Message key={key} msg={this.props.allMessages[key]} />);
      }
      return (
        <section id="main">
          <input id="out-msg" type="text" value={this.state.text} onChange={this._onChange}/>
          <button onClick={this._sendMessage} />
          <ul id="message-list">{msgs}</ul>
        </section>
      )
    },

    _onChange: function(event) {
      console.log(event.target.value);
      this.setState({
        text: event.target.value
      });
    },

    _sendMessage: function() {
      Socket.sendMessage(JSON.stringify(this.state.text));
      this.setState({
        value: ''
      });
    }
  });

module.exports = App;
