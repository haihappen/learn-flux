/** @jsx React.DOM */

var React = require('react');
var AppActions = require('../actions/app-actions.js');


var app = React.createClass({
  handleClick: function() {
    AppActions.addItem('this is the item');
  },

  render: function() {
    return <h1 onClick={this.handleClick}>my app</h1>
  }
})
module.exports = app;
