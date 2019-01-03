import React, { Component } from 'react';
import BookList from './BookList'
import AddBook from './AddBook'
import RemoveBook from './RemoveBook'

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1>Bookstore</h1>
        <BookList />
        <hr/>
        <h2>For Admin: </h2>
        <div className="row">
          <div className="col-md-6">
            <AddBook />
          </div>
          <div className="col-md-6">
            <RemoveBook />
          </div>
        </div>
      </div>
    )
  }
}


export default App;
