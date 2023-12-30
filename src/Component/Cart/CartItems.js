import classes from './CartItems.module.css';

export const CartItems = (props) => {
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price}</span>
          <span className={classes.amount}>x {props.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>

        <button onClick={(e)=>console.log('clicked on add',props.id)}>+</button>
        <button onClick={()=>console.log('clicked on remove',props.id)}>−</button>
      </div>
    </li>
  );
};