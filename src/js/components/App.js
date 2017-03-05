var React = require('react');
var AppStore = require('../stores/AppStore.js');

var SearchForm = require('./SearchForm.js');
var SearchResult = require('./SearchResults.js');

function getAppState() {
  return {
    results: AppStore.getResults(),
    searchText: AppStore.getSearchText()
  }
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
  render: function() {
    return (
      <div>
        <SearchForm />
        <SearchResult searchText={this.state.searchText} results={this.state.results} />
      </div>
      )
  },
  _onChange: function() {
    this.setState(getAppState());
  }
});

module.exports = App;