import React, { Fragment } from "react";

import styles from "./Header.module.css";
import backgroundImg from "../../assets/McWrap.jpg";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Mekáčik</h1>
        <HeaderButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={backgroundImg} alt="Delicious Mc wraps <3" />
      </div>
    </Fragment>
  );
};

export default Header;
