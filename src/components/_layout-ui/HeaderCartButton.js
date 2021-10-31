import { useContext, useEffect, useState } from 'react';
import CartIcon from '../cart-ui/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  // find the number of cart items in an array
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0)

  const { items } = cartCtx;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true)
    // remove animation bump after 300ms
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300)

    // cleanup fn
    return () => {
      clearTimeout(timer);
    }
  }, [items])

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {numberOfCartItems}
      </span>
    </button>
  );
}

export default HeaderCartButton;
