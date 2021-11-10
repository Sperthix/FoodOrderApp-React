import { useContext, useState } from "react";

import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const [ordering, setOrdering] = useState(false);

  const totalPrice = `${cartCtx.totalPrice.toFixed(2)} €`;
  const cartIsNotEmpty = cartCtx.totalAmount > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderClickHandler = (event) => {
    event.preventDefault();
    setOrdering(true);
  };

  const submitOrderHandler = (userData) => {
    fetch('https://react-tutorial-dd1ce-default-rtdb.europe-west1.firebasedatabase.app/meal-orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items
      })
    })
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Celkom</span>
        <span>{totalPrice}</span>
      </div>
      {ordering && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
      {!ordering && (
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={props.onClose}>
            Zavri
          </button>
          {cartIsNotEmpty && (
            <button className={styles.button} onClick={orderClickHandler}>
              Objednaj
            </button>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;
