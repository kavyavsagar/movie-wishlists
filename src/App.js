import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Movie Wishlists</h1>
        </header>
        <p className="App-intro">
          App is created to track and lists out my favorite Movies which would like to watch later
        </p>  
        <Movie/>     
      </div>
    );
  }
}

export default App;
