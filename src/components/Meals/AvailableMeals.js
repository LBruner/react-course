import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import {useEffect, useState} from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = 'https://react-3ad0d-default-rtdb.firebaseio.com/meals.json';
  useEffect(() => {
    async function fetchMeals(){
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      const newMeals = []

      for (let key in data){
        newMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        })
      }
      setIsLoading(false);
      setMeals(newMeals)
    }

    fetchMeals();
  }, [])

 
  const mealsList = meals.map((meal, i) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (isLoading) return(
      <section className={classes.loading}>
        <p>Loading meals...</p>
      </section>
  )
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
