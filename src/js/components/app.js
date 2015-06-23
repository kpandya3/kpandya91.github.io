/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Messages = require('./messages');

function getAppState() {
  return {
    allMessages: AppStore.getAll()
  };
}

var App = React.createClass({
    getInitialState: function() {
      return getAppState();
    },

    componentDidMount: function() {
      AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      AppStore.removeChangeListener(this._onChange);
    },

    render:function(){
      return (
        <div className="wrapper">
          <Messages allMessages={this.state.allMessages} />
        </div>
      )
    },
    _onChange: function() {
      this.setState(getAppState());
    }
  });

module.exports = App;
