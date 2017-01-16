var $ = require('jquery');
var React = require('react');

var AlbumCollection = require('../models/albums.js').AlbumCollection;

//create form for adding new albums
// pull albums down from parse
//list them out
//

var AddAlbumForm = React.createClass({
  getInitialState: function(){
    return {
      albumName: '',
      albumCollection: []
    }
  },

  componentWillMount: function(){
    var albumCollection = new AlbumCollection();
    var self = this;

    this.parseSetup();

    albumCollection.fetch().then(function(){
      self.setState({albumCollection: albumCollection});
    })
  },

  parseSetup: function(){
    $.ajaxSetup({
      beforeSend: function(xhr){
        xhr.setRequestHeader('X-Parse-Application-Id', 'kmbparse');
        xhr.setRequestHeader('X-Parse-REST-API-Key', 'kylesb');
      }
    });
  },

  handleAblumName: function(e){
    var albumName = e.target.value;
    this.setState({albumName: albumName});
  },

  addAlbum: function(e){
    e.preventDefault();

    var albumName = this.state.albumName;
    var album = ({albumName: albumName});
    var albumCollection = this.state.albumCollection;

    albumCollection.create(album);
  },

  render: function(){
    return (
      <nav className='navbar navbar-default'>
        <div className='navbar-header'>
          <a className='navbar-brand' href=''>Welcome to your albums!</a>
        </div>
        <div className='collapse navbar-collapse'>
          <form className="navbar-form navbar-left" onSubmit={this.addAlbum}>
            <div className="form-group">
              <label htmlFor="album-name">Add a new album</label>
              <input type="text" className="form-control" id='name' onChange={this.handleAblumName} placeholder="Album name" />
            </div>
            <button className="btn btn-default">Create!</button>
          </form>
        </div>
      </nav>
    )
  }
});


var AlbumComponent = React.createClass({
  render: function(){
    return (
      <div className='album-page'>
        <AddAlbumForm></AddAlbumForm>
      </div>
    )
  }
});

module.exports = {
  AlbumComponent: AlbumComponent
}
