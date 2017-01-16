var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var model = require('./models/image.js');
var ImageFormComponent = require('./components/form.jsx').ImageForm;
var AppComponent = require('./components/app.jsx').AppComponent;
var AlbumComponent = require('./components/albums.jsx').AlbumComponent;


var ImageRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'album/{id}': 'album'
  },
  // initialize: function(){
  //   var images = this.images = new model.ImagesCollection();
  //   this.images.fetch();
  //   console.log(this.images);
  // },
  index: function(){
    ReactDOM.render(
        React.createElement(AlbumComponent),
        document.getElementById('app')
      );
  },

  album: function(){
    ReactDOM.render(
        React.createElement(AppComponent),
        document.getElementById('app')
      );
  }
});

var router = new ImageRouter();

module.exports = router;
