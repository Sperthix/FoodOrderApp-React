import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles}>
      {[{ id: "c1", name: "sushi" }].map((item) => {
        <li>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Celkom</span>
        <span>69.69</span>
      </div>
      <div className={styles.actions}>
          <button className={styles['button--alt']} onClick={props.onClose}>Zavri</button>
          <button className={styles.button}>Objednaj</button>
      </div>
    </Modal>
  );
};

export default Cart;
