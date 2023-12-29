import React from 'react'
import Input from '../UI/Input';
import classes from './MealItemForm.module.css';
import {CartContext} from "../Store/cart-context";
import { useContext } from 'react';

export default function MealItemForm(props) {

  const cartCtx = useContext(CartContext);

  function addToCart(e) {
    e.preventDefault();
    const quantity = document.getElementById('amount' + props.id).value;
    cartCtx.addItem({ ...props.items, quantity: quantity });
  }

  return (
    <form className={classes.form}>
      <Input
        label='Amount'
        input={{
          id: 'amount' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button onClick={addToCart}>+ Add</button>
    </form>
  );
}
