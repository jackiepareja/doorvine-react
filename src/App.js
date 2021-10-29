import { Fragment, useState } from 'react';
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
    <Fragment>
      {
        cartIsShown &&
        (<Cart onCloseCart={hideCartHandler} />)
      }
      <Header onOpenCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
