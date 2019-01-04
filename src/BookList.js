import React, { Component } from 'react'
import Search from './Search'
import Book from './Book'
import CartItems from './CartItems'
import Total from './Total'
import AddBook from './AddBook'
import RemoveBook from './RemoveBook'
import axios from 'axios'

class BookList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      search: '',
      booksInCart: [],
      editingBooks: false
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
      search: event.target.value.toLowerCase()
    })
  }

  handleSearch = (event) => {
    event.preventDefault()

    axios.get('http://localhost:8082/api/books')
      .then(response => {
        const searchedItems = response.data.filter(book => {
          return book.title.toLowerCase().includes(this.state.search) || book.author.toLowerCase().includes(this.state.search)
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
      booksInCart: [...this.state.booksInCart, addedBook[0]]
    })
  }

  handleEditBooks = () => {
    this.setState({
      editingBooks: !this.state.editingBooks
    })
  }

  //Without a route to GET the books that are in the cart, is using state the only option? (Problem is, the books in cart disappear upon reload)

  handleNewBook = (title, subtitle, author, published, publisher, pages, description, website) => {
    axios.post('http://localhost:8082/api/books', {
      title,
      subtitle,
      author,
      published,
      publisher,
      pages,
      description,
      website,
    })
      .then(() => {
        this.getBooks()
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleRemoveBook = (id) => {
    axios.delete(`http://localhost:8082/api/books/${id}`)
      .then(() => {
        this.getBooks()
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-md-6'>
            <Search handleChange={this.handleChange} handleSearch={this.handleSearch}/>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-8'>
            <h2>Books</h2>
            <div className="list-group">
              <div className="list-group-item">
                <div className="row">
                  <div className="col-md-6"><strong>Title</strong></div>
                  <div className="col-md-2"><strong>Author</strong></div>
                  <div className="col-md-2"><strong>Price</strong></div>
                </div>
              </div>
              {this.state.books.map(book => {
                return <Book key={book.id} {...book} handleAddToCart={this.handleAddToCart} />
              })}
            </div>
          </div>


          <div className='col-md-4'>
            <CartItems items={this.state.booksInCart} />
            <Total items={this.state.booksInCart} />
          </div>
        </div>

        <hr />
        <h2>For Admin: </h2>
        <button className="btn btn-secondary" onClick={this.handleEditBooks}>Edit Books</button>

        {this.state.editingBooks ?
          <div className="row">
            <hr />
            <div className="col-md-6">
              <AddBook handleNewBook={this.handleNewBook} />
            </div>
            <div className="col-md-6">
              <RemoveBook handleRemoveBook={this.handleRemoveBook} books={this.state.books}/>
            </div>
          </div>
          :
          null
        }

      </div>
    )
  }

}

export default BookList