import { useContext } from "react";

import styles from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderButton = (props) => {
    const cartCtx = useContext(CartContext);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Košík</span>
      <span className={styles.badge}>{cartCtx.totalAmount}</span>
    </button>
  );
};

export default HeaderButton;
