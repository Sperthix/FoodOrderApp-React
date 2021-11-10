import { Fragment, useContext, useState } from "react";

import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const [ordering, setOrdering] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

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

  const finishHandler = () => {
    cartCtx.clearCart();
    props.onClose();
  }

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    const response = await fetch(
      "https://react-tutorial-dd1ce-default-rtdb.europe-west1.firebasedatabase.app/meal-orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
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

  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={styles.total}>
        <span>Celkom</span>
        <span>{totalPrice}</span>
      </div>
      {ordering && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
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
    </Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <Fragment>
      <p>Order was sent successfully.</p>
      <button className={styles.button} type="button" onClick={finishHandler}>Dokončiť.</button>
    </Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
