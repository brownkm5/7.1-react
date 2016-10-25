var $ = require('jquery');
var Backbone = require('backbone');

var React = require('react');
var ReactDOM = require('react-dom');
var AppComponent = require('./components/app.jsx').AppComponent;
// require('./router');

$(function(){
  ReactDOM.render(
      React.createElement(AppComponent),
      document.getElementById('app')
    );
});
