import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import { CartContext } from "../Store/cart-context";

export const HeaderCartButton = (props) => {

  const contectCtx = useContext(CartContext);

  let quantity = contectCtx.items.reduce((curNumber, item) => {
    return curNumber + Number(item.quantity);
  }, 0);

  return (
    <button className={classes.button} onClick={props.ShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};