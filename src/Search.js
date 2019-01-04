import React from 'react'

function Search(props) {
  return (
    <form className='form-inline' onSubmit={props.handleSearch}>
      <div className='form-group'>
        <input className='form-control search search-input' type='text' id='search' placeholder='Search by Title or Author' onChange={props.handleChange}
          required />
      </div>
      <button type="submit" className="btn btn-secondary">Search</button>
    </form>
  )

}

export default Search