import React from 'react'

function Total({items}) {
  const total = items.reduce((total, item) => total + item.price, 0)

  return (
    <h3>Total: ${total}</h3>
  )

}

export default Total