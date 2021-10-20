import React from "react";

import styles from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderButton = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Košík</span>
      <span className={styles.badge}>0</span>
    </button>
  );
};

export default HeaderButton;
