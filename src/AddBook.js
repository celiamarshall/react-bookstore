import React from 'react'
import axios from 'axios';

function AddBook(props) {

  return (
    <div>
      <h3>Add New Book</h3>
      <form onSubmit={(event) => {
        props.handleNewBook(
          event.target.title.value,
          event.target.subtitle.value,
          event.target.author.value,
          event.target.published.value,
          event.target.publisher.value,
          event.target.pages.value,
          event.target.description.value,
          event.target.website.value
        )}
      }>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" required />
        </div>
        <div className="form-group">
          <label htmlFor="subtitle">Subtitle</label>
          <input type="text" className="form-control" id="subtitle" />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input type="text" className="form-control" id="author" required />
        </div>
        <div className="form-group">
          <label htmlFor="published">Published</label>
          <input type="text" className="form-control" id="published" />
        </div>
        <div className="form-group">
          <label htmlFor="publisher">Publisher</label>
          <input type="text" className="form-control" id="publisher" />
        </div>
        <div className="form-group">
          <label htmlFor="pages">Pages</label>
          <input type="text" className="form-control" id="pages" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" className="form-control" id="description" />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input type="text" className="form-control" id="website" />
        </div>
        <button type="submit" className="btn btn-secondary">Add Book</button>
      </form>
    </div >
  )

}

export default AddBook

