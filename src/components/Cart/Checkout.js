import { useRef, useState } from "react";

import styles from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isNotPostal = (value) => value.trim().length !== 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = !isEmpty(nameInputRef.current.value);
    const enteredStreet = !isEmpty(streetInputRef.current.value);
    const enteredPostal = !isNotPostal(postalInputRef.current.value);
    const enteredCity = !isEmpty(cityInputRef.current.value);

    setFormInputsValidity({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postal: enteredPostal,
    });

    const formIsVaid =
      enteredName && enteredPostal && enteredStreet && enteredCity;

    if (!formIsVaid) {
      // throw error here
      return;
    }
    // submit form to database
  };

  const nameStyles = `${styles.control} ${formInputsValidity.name ? '' : styles.invalid}`;
  const streetStyles = `${styles.control} ${formInputsValidity.street ? '' : styles.invalid}`;
  const postalStyles = `${styles.control} ${formInputsValidity.postal ? '' : styles.invalid}`;
  const cityStyles = `${styles.control} ${formInputsValidity.city ? '' : styles.invalid}`;

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={nameStyles}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p className={styles.invalid}>Please enter your name.</p>}
      </div>
      <div className={streetStyles}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p className={styles.invalid}>Please enter your address.</p>}
      </div>
      <div className={postalStyles}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputsValidity.postal && <p className={styles.invalid}>Please enter your postal code.</p>}
      </div>
      <div className={cityStyles}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p className={styles.invalid}>Please enter a valid city.</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
