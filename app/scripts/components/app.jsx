var React = require('react');

var ImagesCollection = require('../models/image.js').ImagesCollection;
var Image = require('../models/image.js').ImageCard;
var FormComponent = require('./form.jsx');
var ImageListing = require('./listing.jsx');


var AppComponent = React.createClass({
  getInitialState: function(){
    var self = this;
    var imageBoard = new ImagesCollection();
    var imageModel = new Image();

    imageBoard.fetch().then(function(){
      self.setState({collection: imageBoard});
    });

    return {
      imageToEdit: false,
      collection: imageBoard,
      showForm: false
    };
  },
  addImage: function(imageModel){
    this.state.collection.create(imageModel);
    this.setState({collection: this.state.collection});
  },
  handleToggleForm: function(e){
    e.preventDefault();

    var showForm = !this.state.showForm;
    this.setState({showForm: showForm});
  },
  handleEdit: function(model){
    this.setState({showForm: true, imageToEdit: model});
  },
  deleteImage: function(image){
    image.destroy();
    this.setState({collection: this.state.collection});
  },
  editImage: function(model, data){
   model.set(data);
   model.save();

   this.setState({imageToEdit: false, showForm: false});
 },
  render: function(){
    var self = this;

    var imageList = this.state.collection.map(function(image){
      console.log('image', image.get('_id'));
      var key = image.get('_id') || image.cid;
      return (
        <ImageListing
          key={key}
          model={image}
          deleteImage={self.deleteImage}
          handleEdit={self.handleEdit}
        />
      );
    });

    return (
      <div>
        <div className="contain">
          <header className='well col-sm-12 col-xs-12'>
            <button className='add-button btn btn-primary glyphicon glyphicon-plus' type="button" name="button" onClick={this.handleToggleForm}></button>
          </header>
        <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                {this.state.showForm ? <FormComponent model={this.state.imageToEdit} addImage={this.addImage} editImage={this.editImage}/> : null}
              </div>
            </div>
            <div className="row">
              {imageList}
            </div>
          </div>
        </div>
        </div>
    );
  }

});

module.exports= {
  AppComponent: AppComponent
};
