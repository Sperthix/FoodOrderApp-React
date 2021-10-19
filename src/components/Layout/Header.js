import React, { Fragment } from "react";

import styles from "./Header.module.css";
import backgroundImg from '../../assets/McWrap.jpg';

const Header = (props) => {
  return <Fragment>
      <header className={styles.header}>
          <h1>Mekacik</h1>
          <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
          <img src={backgroundImg} alt="Delicious Mc wraps <3" />
      </div>
  </Fragment>;
};

export default Header;
