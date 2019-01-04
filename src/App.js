import React, { Component } from 'react';
import BookList from './BookList'

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1>Bookstore</h1>
        <BookList />
      </div>
    )
  }
}


export default App;
