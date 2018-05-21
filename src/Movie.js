import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {  

  constructor(props) {
    super(props);
    this.state = {movies: [], editing: false, editId: null};

    this.addNew = this.addNew.bind(this);
    this.update = this.update.bind(this);
  }

  addNew(event) {
    var arr = this.state.movies;
    var target = event.target;
    //console.log(this.refs.moviename.value);
    arr.push(target.elements[0].value);

    this.setState({movies: arr});

   this.refs.moviename.value = '';
    event.preventDefault();
  }
  //function keyword switches the context of 'this' to be whatever object the function is bound to, in this case it's undefined
  //eachMovie(value, i){

  // Arrow functions were added to JS because of this behavior since they do not change the context of 'this'.
  eachMovie = (value,i) => {
    return ( <li key={i}>{value} <button className="btn-red" onClick={this.remove.bind(this, i)} title="delete"><i class="fas fa-trash-alt"></i></button> <button className="btn-blue" onClick={this.edit.bind(this, i)} title="Update"><i class="fas fa-edit"></i></button></li> );
  };

  // Handle remove
  remove = (i) =>{
    this.state.movies.splice(i,1);
    this.setState({movies: this.state.movies})
  }; 

  // Handle edit
  edit = (i) =>{
    this.setState({editing: true, editId: i});

    this.refs.moviename.value = this.state.movies[i]
  }; 

  // Save Edit
  update(event) {    
    var arr = this.state.movies;
    var id = this.state.editId;
    var target = event.target;   
    
    arr[id] = target.elements[0].value; 
    this.setState({movies: arr});

    this.refs.moviename.value = '';   
    
    this.setState({editing: false, editId: null});
    event.preventDefault();
  }

  // cancel update
  cancel(event){
    this.refs.moviename.value = '';
    this.setState({editing: false, editId: null});
   
    event.preventDefault();
  }

  renderEditForm(){
    return ( 
      
      <div className="Movie">
        <div className="form-movie">
        <h1>Edit Movie</h1>

        <form onSubmit={this.update}>            
          <input type="text" ref="moviename" placeholder="Movie name..."/>   
          <input type="submit" value="Update" className="btn-green"/>  
          <input type="button" value="Cancel" className="btn-grey" onClick={this.cancel.bind(this)} />
        </form>

        </div>
        <div className="list-movies">
        <h2>Favorite Movies</h2>       
        <ul>    
          {
            this.state.movies.map(this.eachMovie)
          }
        </ul>
        </div>
      </div>
      
    );
  }

  renderAddForm(){
    return ( 
      
      <div className="Movie">
        <div className="form-movie">
        <h1>Add New Movie</h1>

        <form onSubmit={this.addNew}>          
          <input type="text" ref="moviename" placeholder="Movie name..."/>      
          <input type="submit" value="Submit" className="btn-green"/>
        </form>

        </div>

        <div className="list-movies">  
        <h2>Favorite Movies ({this.state.movies.length})</h2>       
        <ul>    
          {
            this.state.movies.map(this.eachMovie)
          }
        </ul>
        </div>
      </div>
      
    );
  }



  render() {
    if(this.state.editing){
      return this.renderEditForm(); 
    }else{
      return this.renderAddForm();
    }
  }
}

export default Movie;
