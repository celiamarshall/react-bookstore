import React, { Component } from 'react'
import Book from './Book'
import CartItems from './CartItems'
import Total from './Total'
import axios from 'axios'

class BookList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      search: '',
      booksInCart: []
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

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  handleSearch = (event) => {
    event.preventDefault()

    axios.get('http://localhost:8082/api/books')
      .then(response => {
        const searchedItems = response.data.filter(book => {
          return book.title === this.state.search || book.author === this.state.search
        })

        this.setState({
          books: searchedItems,
          search: ''
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleAddToCart = (id) => {
    const addedBook = this.state.books.filter(book => book.id === id)
    axios.patch(`http://localhost:8082/api/books/cart/add/${id}`)
    this.setState({
      booksInCart: [...this.state.booksInCart, addedBook[0] ]
    })
  }

  //Without a way to GET the books that are in the cart, is using state the only option? (Problem is, the books in cart disappear upon reload)

  render() {
    return (
      <div className='row'>

        <div className='col-md-8'>
          <div className='row'>
            <form className='form-inline col-md-8' onSubmit={this.handleSearch}>
              <div className='form-group'>
                <input className='form-control' type='text' id='search' placeholder='Search by Title or Author' onChange={this.handleChange} required />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div>
            <h2>Books</h2>
            <div className="list-group">
              <div className="list-group-item">
                <div className="row">
                  <div className="col-md-6">Title</div>
                  <div className="col-md-2">Author</div>
                  <div className="col-md-2">Price</div>
                </div>
              </div>
              {this.state.books.map(book => {
                return <Book
                  key={book.id}
                  {...book}
                  handleAddToCart={this.handleAddToCart}
                />
              })}
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <CartItems items={this.state.booksInCart} />
          <Total items={this.state.booksInCart} />
        </div>

      </div>
    )
  }

}

export default BookList