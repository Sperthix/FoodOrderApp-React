import { useContext } from "react";

import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {};
  const cartItemAddHandler = (item) => {};

  const cartItems = (
    <ul className={styles}>
      {cartCtx.items.map((item) => {
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />;
      })}
    </ul>
  );

  const totalPrice = `${cartCtx.totalPrice.toFixed(2)} €`;
  const cartIsNotEmpty = cartCtx.totalAmount > 0;

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Celkom</span>
        <span>{totalPrice}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Zavri
        </button>
        {cartIsNotEmpty && <button className={styles.button}>Objednaj</button>}
      </div>
    </Modal>
  );
};

export default Cart;
