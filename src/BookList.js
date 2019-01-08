import React, { Component } from 'react'
import Search from './Search'
import Book from './Book'
import CartItems from './CartItems'
import AddBook from './AddBook'
import RemoveBook from './RemoveBook'
import axios from 'axios'

class BookList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      search: '',
      editingBooks: false
    }
  }

  componentDidMount() {
    this.getBooks()
  }

  getBooks = () => {
    axios.get(process.env.REACT_APP_BASE_URL)
      .then(response => {
        this.setState({ books: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleChange = (event) => {
    if (event) {
      this.setState({
        search: event.target.value.toLowerCase()
      })
    }
    return this.state.books.filter(book => {
      return book.title.toLowerCase().includes(this.state.search) || book.author.toLowerCase().includes(this.state.search)
    })
  }

  handleSearch = (event) => {
    event.preventDefault()

    this.setState({
      search: ''
    })
  }

  handleAddToCart = (id) => {
    axios.patch(`${process.env.REACT_APP_BASE_URL}/cart/add/${id}`)
      .then(() => {
        this.getBooks()
      })
  }

  handleTrashItem = (id) => {
    axios.patch(`${process.env.REACT_APP_BASE_URL}/cart/remove/${id}`)
      .then(() => {
        this.getBooks()
      })
  }

  handleEditBooks = () => {
    this.setState({
      editingBooks: !this.state.editingBooks
    })
  }

  handleNewBook = (title, subtitle, author, published, publisher, pages, description, website) => {
    axios.post(process.env.REACT_APP_BASE_URL, {
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
    axios.delete(`${process.env.REACT_APP_BASE_URL}/${id}`)
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
          <div className='col-md-8'>
            {this.state.editingBooks ? null : <Search handleChange={this.handleChange} handleSearch={this.handleSearch} />}
          </div>
          <div className='col-md-4 admin'>
            <h5 className='admin-text'>Admin</h5>
            <button className="btn btn-secondary" onClick={this.handleEditBooks}>
              <i className='fa fa-user-circle'></i>
            </button>
          </div>
        </div>

        {this.state.editingBooks ?

          <div className="row">
            <div className="col-md-6">
              <AddBook handleNewBook={this.handleNewBook} />
            </div>
            <div className="col-md-6">
              <RemoveBook handleRemoveBook={this.handleRemoveBook} books={this.state.books} />
            </div>
          </div>

          :

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
                {this.handleChange().map(book => {
                  return <Book key={book.id} {...book} handleAddToCart={this.handleAddToCart} />
                })}
              </div>
            </div>
            <div className='col-md-4'>
              <CartItems items={this.state.books.filter(book => book.inCart)} handleTrashItem={this.handleTrashItem} />
            </div>
          </div>

        }

      </div>
    )
  }

}

export default BookList