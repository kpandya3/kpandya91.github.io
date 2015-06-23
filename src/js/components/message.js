/** @jsx React.DOM */
var React = require('react');
var ReactPropTypes = React.PropTypes;

var App = React.createClass({
    propTypes: {
      msg: ReactPropTypes.string.isRequired,
    },

    render:function(){
      return (
        <li id="single-msg">{this.props.msg}</li>
      )
    }
  });

module.exports = App;
