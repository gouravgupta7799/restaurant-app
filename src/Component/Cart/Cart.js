import React from 'react'
import classes from './Cart.module.css'
import Model from '../UI/Model';

export default function Cart(props) {

  const CartItem = (<ul className={classes['cart-items']}>
    {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }
    ].map((item) => (
      <li>{item.name}</li>
    ))}
  </ul>
  );


  return (
    <Model>
      {CartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Model>
  );
}
