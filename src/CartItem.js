import React from 'react'

function CartItem({ title, price }) {
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-10">{title}</div>
        <div className="col-md-2">${price.toFixed(2)}</div>
      </div>
    </div>
  )

}

export default CartItem