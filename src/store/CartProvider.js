import { useReducer } from 'react';

import CartContext from './cart-context';

// default state
const defaultCartState = {
  items: [],
  totalAmount: 0
}

// alt useState : (state, action) => return newState w/ a dispatch method
// useReducer is preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. 
// useReducer also lets you optimize performance for components that trigger deep updates b/c you can pass dispatch down instead of callbacks.
// this is the reducer function that has complex state logic
const cartReducer = (state, action) => {
  // logic to add ADD_CART_ITEM from dispatch method below
  if (action.type === 'ADD_CART_ITEM') {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  } else if (action.type === 'REMOVE_CART_ITEM') {

  }

  // return a new state snapshot
  return defaultCartState;
};

const CartProvider = props => {
  // [current state snapshot, function that allows you to dispatch an action] = useReducer(state, initialState)
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const addItemToCartHandler = item => {
    // type: first property is the name of the param, second property, to 'add the item', need to forward the item as part of the action. The 'item' argument passed to addItemToCartHandler is forwarded as the value of the second property.
    dispatchCartAction({ type: 'ADD_CART_ITEM', item: item })
  }

  const removeItemFromCartHandler = id => {
    dispatchCartAction({ type: 'REMOVE_CART_ITEM', id: id })
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
};

export default CartProvider;