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

//Do we need to let the admin add and delete books? Do we need to add authorization for that?

export default App;
