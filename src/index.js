var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./js/components/App.js');

require('./css/bootstrap.min.css');
require('./css/style.css');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);