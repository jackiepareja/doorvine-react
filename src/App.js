import { useState } from 'react';
import CartProvider from './store/CartProvider';
import Header from '../src/components/_layout-ui/Header';
import Meals from '../src/components/meals-ui/Meals';
import Cart from './components/cart-ui/Cart';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const hideCartHandler = (evt) => {
    evt.preventDefault();
    setCartIsShown(false);
  }

  const showCartHandler = (evt) => {
    evt.preventDefault();
    setCartIsShown(true)
  }



  return (
    <CartProvider>
      {
        cartIsShown &&
        (<Cart onHideCart={hideCartHandler} />)
      }
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
