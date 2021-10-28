import { Fragment } from 'react';
import classes from './Header.module.css';

import HeaderCartButton from './HeaderCartButton';
import spotlightImg from '../../assets/spotlight.jpg';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>DoorVine</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={spotlightImg} alt="A blue plate of vibrant crepes and orange slices, topped with orange zest on a blue table cloth and napkin. " />
      </div>
    </Fragment>
  );
}

export default Header;
