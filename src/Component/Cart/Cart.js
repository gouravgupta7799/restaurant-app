import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Model from '../UI/Model';
import { CartContext } from '../Store/cart-context';
import { CartItems } from './CartItems';


export default function Cart(props) {

  const cartitemsCtx = useContext(CartContext);
  const hasItems = cartitemsCtx.items.length > 0

  function cartHandlerForAdd(item) {
    cartitemsCtx.addItem({ ...item, quantity: 1 })
  }
  function cartHandlerForRemove(id) {
    cartitemsCtx.removeItem(id)
  }

  const CartItem = (<ul className={classes['cart-items']}>

    {cartitemsCtx.items.map((item) => (
      <CartItems
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
        deleteFromCart={cartHandlerForRemove.bind(null, item.id)}
        addItem={cartHandlerForAdd.bind(null, item)}
      />
    ))}
  </ul>
  );


  return (
    <Model>
      {CartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartitemsCtx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.hideCart}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Model>
  );
}
