var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var model = require('./models/image.js');
var ImageFormComponent = require('./components/form.jsx').ImageForm;
var ImageListComponent = require('./components/listing.jsx');

var ImageRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  initialize: function(){
    var images = this.images = new model.ImagesCollection();
    console.log(images);
  },
  index: function(){
  ReactDOM.render(
      React.createElement(ImageFormComponent, {collection: this.images}),
      document.getElementById('header')
    );
  }
  // images.fetch();
  // console.log(this.images);
});

var router = new ImageRouter();

module.exports = router;
