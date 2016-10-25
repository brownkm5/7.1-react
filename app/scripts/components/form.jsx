var _ = require('underscore');
var React = require('react');
var $ = require('jquery');
var Backbone = require('backbone');
var ImageListing = require('./listing.jsx');


//pulls the values from a form
// $.fn.serializeObject = function() {
//    return this.serializeArray().reduce(function(acum, i) {
//      acum[i.name] = i.value;
//      return acum;
//    }, {});
//  };

var FormComponent = React.createClass({
  // componentWillMount: function(){
  //   this.showForm = false;
  // },
  getInitialState: function(){
    return {
      url: this.props.model.get('url'),
      caption: this.props.model.get('caption')
    };
  },
  handleUrlChange: function(e){
    var urlInputValue = e.target.value;
    this.setState({url: urlInputValue});
  },
  handleCaptionChange: function(e){
    var captionValue = e.target.value;
    this.setState({caption: captionValue});
  },
  //toggles the form view
  handlesubmit: function(e){
    e.preventDefault();
    var newImage = {url: this.state.url, caption: this.state.caption};

    this.props.addImage(newImage);

    this.setState({url: '', caption:''});
    // this.showForm = !this.showForm;
    // this.forceUpdate();
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
    return (
      <div className="well">
        <form className="image-form form-group" action="index.html" onSubmit={this.handlesubmit}>
          <input onChange={this.handleUrlChange} className='form-control url' type="url" name="url" placeholder='Image URL' />
          <input onChange={this.handleCaptionChange} className='form-control caption' type="text" name="caption" placeholder='Caption' />
          <button className='submit-image btn btn-success' name="button">Add Image</button>
        </form>
      </div>
    );
  }
});

module.exports = FormComponent;
