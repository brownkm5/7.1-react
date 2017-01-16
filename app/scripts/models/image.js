var Backbone = require('backbone');
var $ = require('jquery');


var ImageCard = Backbone.Model.extend({
idAttribute: 'objectId',
save: function(key, val, options){
  delete this.attributes.createdAt;
  delete this.attributes.updatedAt;

  return Backbone.Model.prototype.save.apply(this, arguments);
}
});

var ImagesCollection = Backbone.Collection.extend({
  model: ImageCard,
  parse: function(data){
   return data.results
  },
  url: 'https://kevinbrowntown.herokuapp.com/classes/Images'
});

module.exports = {
  ImageCard: ImageCard,
  ImagesCollection: ImagesCollection
};
