import React from 'react'
import classes from './Header.module.css'; 
import { HeaderCartButton } from './HeaderCartButton'
import mealsImage from '../../Assets/mealsImage.png'

export default function Header(props) {
  return (
    <React.Fragment>
    
        <header className={classes.header}>
          <h1>ReactMeals</h1>
        <HeaderCartButton ShowCart={props.ShowCart} />
        </header>
        <div className={classes['main-image']}>
          <img src={mealsImage} alt='A table full of delicious food!' />
        </div>
    </React.Fragment>
  )
}
