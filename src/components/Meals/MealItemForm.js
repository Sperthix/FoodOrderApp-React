import Input from "../UI/Input";
import styles from "./MealItemForm.module.css";

const MealFormItem = (props) => {
  return (
    <form className={styles.form}>
      <Input
        label="Počet"
        input={{
          id: 'amount',
          type: "number",
          min: "1",
          max: "9",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Pridaj</button>
    </form>
  );
};

export default MealFormItem;
