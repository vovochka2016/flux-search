var React = require('react');
var AppActions = require('../actions/AppActions.js');

var SearchForm = React.createClass({
  render: function() {
    return (
      <div>
        <form onSubmit={this.searchText} className="well">
          <div className="form-group">
            <label>Search for something...</label>
            <input type="text" className="form-control" ref="text" />
          </div>
        </form>
      </div>
    )
  },

  searchText: function(e) {
    e.preventDefault();
    // console.log("Submitted...");
    var search = {
      text: this.refs.text.value.trim()
    };

    AppActions.searchText(search);
  }
});
module.exports = SearchForm;