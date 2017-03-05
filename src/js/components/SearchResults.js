var React = require('react');
var Result = require('./Result.js');
var SearchResults = React.createClass({
    render: function() {
        var results = this.props.searchText ? <h2 className="page-header">Results for {this.props.searchText}</h2>:'' ;
        return (
            <div>
                {results}
                {
                    this.props.results.map(function(result,index) {
                        return (
                            <Result result={result} key={index} />
                        )
                    })
                }
            </div>
        )
    }
});

module.exports = SearchResults;
