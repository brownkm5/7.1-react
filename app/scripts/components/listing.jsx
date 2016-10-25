var _ = require('underscore');
var React = require('react');
var $ = require('jquery');
var Backbone = require('backbone');

var ImageList = React.createClass({
  // componentWillMount : function(){
  //
  // },
  render: function(){
    // console.log('collection', this.props.collection);
    var imageListing = this.props.collection.map(function(image){
      return (
        <li key={image.cid}>
          <img src="{image.get('url')}" alt="" />
          <div>{image.get('caption')}</div>
        </li>
      )
    });
  }
});

module.exports = ImageList;
