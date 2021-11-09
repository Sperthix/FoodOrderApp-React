import { useEffect, useState } from "react";

import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import Meals from "./Meals";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-tutorial-dd1ce-default-rtdb.europe-west1.firebasedatabase.app/Meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong :/");
        // setLoadingError(response.status);
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: responseData[key].id,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setLoadingError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={styles.MealsLoading}>
        <p>Loading</p>
      </section>
    );
  }

  if (loadingError) {
    return (
      <section className={styles.MealsError}>
        <p>{loadingError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
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
