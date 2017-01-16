var _ = require('underscore');
var React = require('react');
var $ = require('jquery');
var Backbone = require('backbone');

var ImageList = React.createClass({
  handleDelete: function(e){
    this.props.deleteImage(this.props.model);
  },
  handleEdit: function(e){
    // console.log(this.props.model, "listing");
    this.props.handleEdit(this.props.model);
  },
  render: function(){
      return (
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <div className="thumbnail">
              <img src={this.props.model.get('url')} />
              <div className="caption">
                <h3 className='caption'>{this.props.model.get('caption')}</h3>
                <div className="buttons">
                  <button onClick={this.handleDelete} className='remove-button btn btn-primary' type="button" name="button">Remove</button>
                  <button onClick={this.handleEdit} className='remove-button btn btn-primary' type="button" name="button">Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      )

  }
});

module.exports = ImageList;
