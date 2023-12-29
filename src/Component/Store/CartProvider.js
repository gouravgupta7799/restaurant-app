import React, { useState } from 'react'
import {CartContext } from './cart-context';

export default function CartProvider(props) {

  const [items, updateItems] = useState([]);
  const [total, updateTotal] = useState(0);

  function addItemToCartHandler(item) {
    updateItems([...items, item])

    let price = item.price;
  

    updateTotal(total + price);
  }

  function removeItemFromCartHandler() {

  }

  const cartContext = {
    items: items,
    totalAmount: total,
    addItem: addItemToCartHandler,
    deleteFromCart: removeItemFromCartHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

