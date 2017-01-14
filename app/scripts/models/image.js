var Backbone = require('backbone');
var $ = require('jquery');


var ImageCard = Backbone.Model.extend({
idAttribute: '_id'
});

var ImagesCollection = Backbone.Collection.extend({
  model: ImageCard,
  url: 'https://kevinbrowntown.herokuapp.com/classes/Images'
});

module.exports = {
  ImageCard: ImageCard,
  ImagesCollection: ImagesCollection
};
