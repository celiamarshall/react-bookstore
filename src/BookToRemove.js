import React from 'react'

function BookToRemove({id, title, author, handleRemoveBook}) {
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-6">{title}</div>
        <div className="col-md-3">{author}</div>
        <button className="col-md-3 btn btn-secondary" onClick={() => handleRemoveBook(id)}>Remove Book</button>
      </div>
    </div>
  )
}

export default BookToRemove