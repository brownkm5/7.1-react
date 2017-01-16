var _ = require('underscore');
var React = require('react');
var $ = require('jquery');
var Backbone = require('backbone');
var ImageListing = require('./listing.jsx');


var FormComponent = React.createClass({
  // componentWillMount: function(){
  //   this.showForm = false;
  // },
  getInitialState: function(){
    return {
      url: '',
      caption: ''
    };
  },
  handleUrlChange: function(e){
    var urlInputValue = e.target.value;
    this.setState({url: urlInputValue});
  },
  componentWillReceiveProps: function(nextProps){
    console.log(nextProps);
    if(nextProps.model){
      this.setState({
        url: nextProps.model.get('url'),
        caption: nextProps.model.get('caption')
      });
    }
  },
  handleCaptionChange: function(e){
    var captionValue = e.target.value;
    this.setState({caption: captionValue});
  },
  //toggles the form view
  handlesubmit: function(e){
    e.preventDefault();

      var imageData = {url: this.state.url, caption: this.state.caption};
      // console.log(this.props.model, 'model');
      // debugger
      if(this.props.model){
        // console.log(this.props.model, 'model');
        this.props.editImage(this.props.model, imageData);
      }else{
        this.props.addImage(imageData);
      }

      // this.setState({url: '', caption: ''});
  },
  // addImage: function(e){
  //   e.preventDefault();
  //   var inputValues = $('.image-form').serializeObject();
  //   this.props.collection.create(inputValues);
  //
  //   console.log(this.props.collection);
  //
  //   $('.url').val('');
  //   $('.caption').val('');
  // },
  render: function(){
    // console.log(this.state.url);
    return (
      <div className="">
        <form className="image-form form-group" action="index.html" onSubmit={this.handlesubmit}>
          <input onChange={this.handleUrlChange} value={this.state.url} className='form-control url' type="url" name="url" placeholder='Image URL' />
          <input onChange={this.handleCaptionChange} value={this.state.caption} className='form-control caption' type="text" name="caption" placeholder='Caption' />
          <button className='submit-image btn btn-success' name="button">{this.props.model ? 'Edit' : 'Add'} Image</button>
        </form>
      </div>
    );
  }
});

module.exports = FormComponent;
