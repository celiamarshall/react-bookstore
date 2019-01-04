import React from 'react'

function Total({items}) {
  const total = items.reduce((total, item) => item.price ? total + item.price : total, 0)

  return (
    <h3>Total: ${total.toFixed(2)}</h3>
  )

}

export default Total