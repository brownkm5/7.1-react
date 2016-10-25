var _ = require('underscore');
var React = require('react');
var $ = require('jquery');
var Backbone = require('backbone');

var ImageList = React.createClass({
  handleDelete: function(e){
    this.props.deleteImage(this.props.model);
  },
  handleEdit: function(e){
    this.props.handleEdit(this.props.model);
  },
  render: function(){
      return (
        <div className='col-sm-offset-1 col-xs-offset-1 col-sm-10'>
          <img className='will col-sm-12 col-xs-12' src={this.props.model.get('url')} alt="" />
          <div className="well">
            <h3 class='caption'>
              {this.props.model.get('caption')}
            </h3>
            <div className="buttons">
              <button onClick={this.handleDelete} className='remove-button btn btn-primary' type="button" name="button">Remove</button>
              <button onClick={this.handleEdit} className='remove-button btn btn-primary' type="button" name="button">Edit</button>
            </div>
          </div>
        </div>
      )

  }
});

module.exports = ImageList;
