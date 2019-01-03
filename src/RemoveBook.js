import React, { Component } from 'react'
import axios from 'axios'
import BookToRemove from './BookToRemove'

class RemoveBook extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    this.getBooks()
  }

  getBooks = () => {
    axios.get('http://localhost:8082/api/books')
      .then(response => {
        this.setState({ books: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleRemoveBook = (id) => {
    axios.delete(`http://localhost:8082/api/books/${id}`)
      .then( () => {
        return axios.get('http://localhost:8082/api/books')
      })
      .then( response => {
        this.setState({ books: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  //when an admin removes a book, how can you trigger the booklist to re-render without needing a reload?

  render() {
    return (
      <div>
        <h3>Remove a Book</h3>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-6">Title</div>
              <div className="col-md-3">Author</div>
            </div>
          </div>
          {this.state.books.map(book => {
            return <BookToRemove
              key={book.id}
              {...book}
              handleRemoveBook={this.handleRemoveBook}
            />
          })}
        </div>
      </div>
    )
  }
}

export default RemoveBook