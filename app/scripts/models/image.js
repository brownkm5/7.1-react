var Backbone = require('backbone');
var $ = require('jquery');


var ImageCard = Backbone.Model.extend({

});

var ImagesCollection = Backbone.Collection.extend({
  model: ImageCard,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/kevintrialimagecard'
});

module.exports = {
  ImageCard: ImageCard,
  ImagesCollection: ImagesCollection
};
