import { useRef, useState } from "react";

import Input from "../UI/Input";
import styles from "./MealItemForm.module.css";

const MealFormItem = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHander = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 9
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={styles.form} onSubmit={submitHander}>
      <Input
        ref={amountInputRef}
        label="Počet"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "9",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Pridaj</button>
      {!amountIsValid && <p>Počet papania musí byť medzi 1-9</p>}
    </form>
  );
};

export default MealFormItem;
