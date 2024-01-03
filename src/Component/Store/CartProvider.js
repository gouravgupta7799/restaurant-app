// import React, { useState } from 'react'
// import { CartContext } from './cart-context';
// export default function CartProvider(props) {

//   const [items, updateItems] = useState([]);
//   const [total, updateTotal] = useState(0);

//   function addItemToCartHandler(item) {
//     const existingItemCartIndex = items.findIndex((i) => i.id === item.id)

//     if (existingItemCartIndex === -1) {
//       updateItems([...items, item]);
//     } else {
//       const updatedItems = [...items];
//       updatedItems[existingItemCartIndex].quantity = Number(updatedItems[existingItemCartIndex].quantity) + 1;
//     }

//     let price = item.price;
//     updateTotal(total + (price*item.quantity));
//   }

//   function removeItemFromCartHandler(id) {
//     const itemToRemove = items.find((item) => item.id === id);
//     const priceNumber = Number(itemToRemove.price);

//     const existingItemCartIndex = items.findIndex((i) => i.id === id)

//     const updatedItems = [...items];
//     if (updatedItems[existingItemCartIndex].quantity > 1) {
//       updatedItems[existingItemCartIndex].quantity = Number(updatedItems[existingItemCartIndex].quantity) - 1;
//     } else {
//       items.splice(existingItemCartIndex, 1)
//     }
//     if (total > 0) updateTotal(total - priceNumber);
//   }

//   const cartContext = {
//     items: items,
//     totalAmount: total,
//     addItem: addItemToCartHandler,
//     deleteFromCart: removeItemFromCartHandler,
//   }

//   return (
//     <CartContext.Provider value={cartContext}>
//       {props.children}
//     </CartContext.Provider>
//   )
// }

import { CartContext } from "./cart-context"
import React, { useReducer } from "react"
const defaultCartState = {
  items: [],
  totalAmount: 0
}
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updateTotalAmount = state.totalAmount + action.item.price * action.item.quantity;
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
    const existingCartItem = state.items[existingCartItemIndex]


    let updateItems;
    if (existingCartItem) {

      const updateItem = {
        ...existingCartItem,
        quantity: Number(existingCartItem.quantity) + Number(action.item.quantity)
      }
      updateItems = [...state.items]
      updateItems[existingCartItemIndex] = updateItem
    }
    else {

      updateItems = state.items.concat(action.item);
    }

    return {
      items: updateItems,
      totalAmount: updateTotalAmount
    }
  }
  if (action.type === 'REMOVE') {
    console.log(state.items)
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)
    const existingItem = state.items[existingCartItemIndex]
    const updateTotalAmount = state.totalAmount - existingItem.price
    let updateItems;
    if (existingItem.quantity === 1) {
      updateItems = state.items.filter(item => item.id !== action.id)
    } else {
      const updateItem = { ...existingItem, quantity: existingItem.quantity - 1 }
      updateItems = [...state.items]
      updateItems[existingCartItemIndex] = updateItem
    }
    return {
      items: updateItems,
      totalAmount: updateTotalAmount
    }
  }
  return defaultCartState
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
  const addItemToCartHandler = item => {
    dispatchCartAction({ type: 'ADD', item: item })
  }
  const removeItemFromCartHandler = id => {
    dispatchCartAction({ type: 'REMOVE', id: id })
  }
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }
  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
}
export default CartProvider