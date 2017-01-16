var Backbone = require('backbone');
var $ = require('jquery');

var Album = Backbone.Model.extend({
  idAttribute: 'objectId',
});

var AlbumCollection = Backbone.Collection.extend({
  model: Album,
  // parse: function(data){
  //  return data.results
  // },
  url: 'https://kevinbrowntown.herokuapp.com/classes/Albums'
});

module.exports = {
  AlbumCollection: AlbumCollection
}
