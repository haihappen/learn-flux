var Dispatcher = require('flux').Dispatcher;
var merge = require('react/lib/merge');

var AppDispatcher = merge(Dispatcher.prototype, {
  handleViewAction: function(action) {
    console.log('action', action);
    this.dispatch({
      source: 'VIEW_AVTION',
      action: action
    });
  }
});

module.exports = AppDispatcher;
