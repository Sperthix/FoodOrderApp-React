import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Wrapík grilovany",
    description: "A taky dobry, moj oblubeny",
    price: 5.5,
  },
  {
    id: "m2",
    name: "Wrapík vyprazany",
    description: "Pre tucnych a skaredych ludi",
    price: 5,
  },
  {
    id: "m3",
    name: "Barbecue Wrap",
    description: "Pre američana",
    price: 8.99,
  },
  {
    id: "m4",
    name: "Veggie Wrap",
    description: "Taky zdravy, o ničom, fuj, nechcel by som",
    price: 6.5,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
