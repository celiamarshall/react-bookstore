import React, { Component } from 'react'
import axios from 'axios'
import BookToRemove from './BookToRemove'

function RemoveBook(props) {
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
        {props.books.map(book => {
          return <BookToRemove
            key={book.id}
            {...book}
            handleRemoveBook={props.handleRemoveBook}
          />
        })}
      </div>
    </div>
  )
}

export default RemoveBook