import { Fragment } from 'react';
import Header from '../src/components/_layout-ui/Header';
import Meals from '../src/components/meals-ui/Meals';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
