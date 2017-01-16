var $ = require('jquery');
var React = require('react');

var ImagesCollection = require('../models/image.js').ImagesCollection;
var Image = require('../models/image.js').ImageCard;
var FormComponent = require('./form.jsx');
var ImageListing = require('./listing.jsx');


var AppComponent = React.createClass({
  getInitialState: function(){
    var self = this;

    var imageModel = new Image();

    return {
      imageToEdit: '',
      collection: [],
      showForm: true
    };
  },

  componentWillMount: function(){
    var self = this;
    var imageBoard = new ImagesCollection();

    this.parseSetup();

    imageBoard.fetch().then(function(){
      self.setState({collection: imageBoard});
    });
    // console.log(this.state.collection);
  },

  parseSetup: function(){
    $.ajaxSetup({
      beforeSend: function(xhr){
        xhr.setRequestHeader('X-Parse-Application-Id', 'kmbparse');
        xhr.setRequestHeader('X-Parse-REST-API-Key', 'kylesb');
      }
    });
  },

  addImage: function(imageModel){
    console.log(this.state.collection);
    this.state.collection.create(imageModel);
    this.setState({collection: this.state.collection});
  },

  handleToggleForm: function(e){
    e.preventDefault();

    var showForm = !this.state.showForm;
    this.setState({showForm: showForm});
  },

  handleEdit: function(model){
    console.log(model, 'app');
    this.setState({showForm: true, imageToEdit: model});
    console.log(this.state.imageToEdit, 'image');
  },

  deleteImage: function(image){
    image.destroy();
    this.setState({collection: this.state.collection});
  },

  editImage: function(model, data){
    console.log(data);
    model.save(data);

    this.setState({imageToEdit: false, showForm: false});
  },

  render: function(){
    var self = this;

    var imageList = this.state.collection.map(function(image){
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
            <div className="">
              <div className="form-component">
                {this.state.showForm ? <FormComponent model={this.state.imageToEdit} addImage={this.addImage} editImage={this.editImage}/> : null}
              </div>
            </div>
          </header>
        <div className="container">

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
