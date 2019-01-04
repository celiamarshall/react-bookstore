import React from 'react'

function CartItem({ title, price }) {
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-9">{title}</div>
        <div className="col-md-3">{price ? `$${price.toFixed(2)}` : 'Unavailable'}</div>
      </div>
    </div>
  )

}

export default CartItem