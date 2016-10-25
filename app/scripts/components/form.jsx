var _ = require('underscore');
var React = require('react');
var $ = require('jquery');
var Backbone = require('backbone');

//pulls the values from a form
$.fn.serializeObject = function() {
   return this.serializeArray().reduce(function(acum, i) {
     acum[i.name] = i.value;
     return acum;
   }, {});
 };

var ImageForm = React.createClass({
  componentWillMount: function(){
    this.showForm = false;
  },
  //toggles the form view
  handleClick: function(e){
    e.preventDefault();

    this.showForm = !this.showForm;
    this.forceUpdate();
  },
  addImage: function(e){
    e.preventDefault();
    var inputValues = $('.image-form').serializeObject();
    this.props.collection.create(inputValues);

    console.log(this.props.collection);
  },
  render: function(){
    var form;
    if(this.showForm){
       form = (
        <form className="image-form form-group" action="index.html"  onSubmit={this.addImage}>
          <input className='form-control url' type="url" name="url" placeholder='Image url' />
          <input className='form-control caption' type="text" name="caption" placeholder='Caption' />
          <button className='submit-image btn btn-success' name="button">Submit</button>
        </form>
      );
    }
    return (
      <div className='well'>
        <button className='add-button btn btn-primary glyphicon glyphicon-plus' type="button" name="button" onClick={this.handleClick}></button>
        {form}
      </div>
    )
  }
});

module.exports = {
  ImageForm: ImageForm
}
