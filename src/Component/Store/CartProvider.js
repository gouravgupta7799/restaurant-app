import React, { useState } from 'react'
import { CartContext } from './cart-context';
export default function CartProvider(props) {

  const [items, updateItems] = useState([]);
  const [total, updateTotal] = useState(0);

  function addItemToCartHandler(item) {
    const existingItemCartIndex = items.findIndex((i) => i.id === item.id)

    if (existingItemCartIndex === -1) {
      updateItems([...items, item]);
    } else {
      const updatedItems = [...items];
      updatedItems[existingItemCartIndex].quantity = Number(updatedItems[existingItemCartIndex].quantity) + 1;
    }

    let price = item.price;
    updateTotal(total + price);
  }

  function removeItemFromCartHandler(id) {
    const itemToRemove = items.find((item) => item.id === id);
    const priceNumber = Number(itemToRemove.price);

    const existingItemCartIndex = items.findIndex((i) => i.id === id)

    const updatedItems = [...items];
    if (updatedItems[existingItemCartIndex].quantity > 0) {
      updatedItems[existingItemCartIndex].quantity = Number(updatedItems[existingItemCartIndex].quantity) - 1;
    } else {
      const itemsList = items.filter((e) => { return (e.id !== id) })
      updateItems([itemsList])
    }
    if (total > 0) updateTotal(total - priceNumber);
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

