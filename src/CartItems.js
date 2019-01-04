import React from 'react'
import CartItem from './CartItem'
import Total from './Total'


function CartItems({ items, handleTrashItem }) {
  return (
    <div className='cart'>
      <h2>Cart</h2>
      <Total items={items} />

      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-9"><strong>Title</strong></div>
            <div className="col-md-3"><strong>Price</strong></div>
          </div>
        </div>
        {items.map(book => {
          return <CartItem key={book.id} {...book} handleTrashItem={handleTrashItem}/>
        })}
      </div>
    </div>
  )

}

export default CartItems