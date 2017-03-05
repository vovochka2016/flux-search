var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/appAPI');

var CHANGE_EVENT = 'change';

var _searchText = '';
var _results = [];

var AppStore = assign({}, EventEmitter.prototype, {
  setSearchText: function(search) {
    _searchText = search.text;
  },
  getSearchText: function() {
    return _searchText;
  },
  setResults: function(results) {
    _results = results;
  },
  getResults: function() {
    return _results;
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on('change', callback);
  },
  removeChangeListener: function(callback) {
    this.remove('change', callback);
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;
  switch(action.actionType) {
    case AppConstants.SEARCH_TEXT:
      //console.log("Saving Contact...");

      //Store Save 
      AppStore.setSearchText(action.search);

      // Save to API
       AppAPI.searchText(action.search);

      //Emit Change 
      AppStore.emit(CHANGE_EVENT);
      break;
    case AppConstants.RECEIVE_RESULTS:
      //Store Save
      AppStore.setResults(action.results);

      //Emit Change
      AppStore.emit(CHANGE_EVENT);
      break;
    default:
      return;
  }
  return true;
});

module.exports = AppStore;