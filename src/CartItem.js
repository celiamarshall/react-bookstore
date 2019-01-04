import React from 'react'

function CartItem({ id, title, price, handleTrashItem}) {
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-8">{title}</div>
        <div className="col-md-3">{price ? `$${price.toFixed(2)}` : 'Unavailable'}</div>
        <button className="col-md-1 btn btn-secondary trash" onClick={() => handleTrashItem(id)}>
          <i className='fa fa-trash-o'></i>
        </button>
      </div>
    </div>
  )

}

export default CartItem