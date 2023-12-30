import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Model from '../UI/Model';
import { CartContext } from '../Store/cart-context';
import { CartItems } from './CartItems';


export default function Cart(props) {

  const cartitemsCtx = useContext(CartContext);

  const CartItem = (<ul className={classes['cart-items']}>

    {cartitemsCtx.items.map((item) => (
      <CartItems
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
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
        <button className={classes.button}>Order</button>
      </div>
    </Model>
  );
}
