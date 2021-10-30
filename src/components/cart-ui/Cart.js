
import Modal from '../_core-ui/Modal';
import classes from './Cart.module.css';

const Cart = props => {

  const cartItems = <ul className={classes['cart-items']} >{[
    {
      id: 'c1',
      name: 'Tuscany Crepe',
      amount: 2,
      price: 12.99
    }
  ].map(cartItem => <li key={Math.random().toString}>{cartItem.name}</li>)}</ul>;





  return (
    <Modal onConfirm={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
};

export default Cart;