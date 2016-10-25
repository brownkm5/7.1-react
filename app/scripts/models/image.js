var Backbone = require('backbone');
var $ = require('jquery');


var ImageCard = Backbone.Model.extend({
idAttribute: '_id'
});

var ImagesCollection = Backbone.Collection.extend({
  model: ImageCard,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/kevintrialtwoimagecard'
});

module.exports = {
  ImageCard: ImageCard,
  ImagesCollection: ImagesCollection
};
