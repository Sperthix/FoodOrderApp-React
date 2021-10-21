import { useContext, useEffect, useState } from "react";

import styles from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderButton = (props) => {
  const [btnBump, setBtnBump] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  const btnStyles = `${styles.button} ${btnBump ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    } else {
      setBtnBump(true);
      const timer = setTimeout(() => {
        setBtnBump(false);
      }, 300);
      return () => {
        clearTimeout(timer);
      }
    }
  }, [items]);

  return (
    <button className={btnStyles} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Košík</span>
      <span className={styles.badge}>{cartCtx.totalAmount}</span>
    </button>
  );
};

export default HeaderButton;
