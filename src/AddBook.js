import React, { Component } from 'react'
import axios from 'axios';

class AddBook extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newBook: {}
    }
  }

  handleNewBook = (event) => {
    event.preventDefault()
    axios.post('http://localhost:8082/api/books', {
      title: event.target.title.value,
      subtitle: event.target.subtitle.value,
      author: event.target.author.value,
      published: event.target.published.value,
      publisher: event.target.publisher.value,
      pages: event.target.pages.value,
      description: event.target.description.value,
      website: event.target.website.value
    })
    .then(response => {
      this.setState({newBook: response.data})
    })
    .catch(error => {
      console.log(error)
    })
  }

  //How do I get the page to re-render after a book is added? (i.e. form to clear and the new book to show up on the book list)

  render() {
    return (
      <div>
        <h3>Add New Book</h3>
        <form onSubmit={this.handleNewBook}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" required/>
          </div>
          <div className="form-group">
            <label htmlFor="subtitle">Subtitle</label>
            <input type="text" className="form-control" id="subtitle" />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input type="text" className="form-control" id="author" required/>
          </div>
          <div className="form-group">
            <label htmlFor="published">Published</label>
            <input type="text" className="form-control" id="published"/>
          </div>
          <div className="form-group">
            <label htmlFor="publisher">Publisher</label>
            <input type="text" className="form-control" id="publisher"/>
          </div>
          <div className="form-group">
            <label htmlFor="pages">Pages</label>
            <input type="text" className="form-control" id="pages"/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" className="form-control" id="description"/>
          </div>
          <div className="form-group">
            <label htmlFor="website">Website</label>
            <input type="text" className="form-control" id="website"/>
          </div>
          <button type="submit" className="btn btn-secondary">Add Book</button>
        </form>
      </div>
        )
      }
    }
    
    export default AddBook
    
