import { useEffect, useState } from 'react';
import Image from 'next/image';
import classes from './results.module.scss';
import axios from 'axios';

export default function Results() {
  const [meal, setMeal] = useState('');

  useEffect(() => {
    async function getMeal() {
      try {
        const res = await fetch(
          'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken'
        );
        const data = await res.json();

        setMeal(data.meals[3]);
      } catch (error) {
        console.error(error);
      }
    }

    getMeal();
  }, []);

  const { strMealThumb, strMeal, strInstructions, strArea, strCategory } = meal;

  return (
    <div className={classes.cards}>
      <div className={classes.card}>
        <img src={strMealThumb} alt={strMeal} />
        <h2 className={classes.name}>{strMeal}</h2>
        <p className={classes.description}>
          {strInstructions.substring(0, 150) + '...'}
        </p>
        <button className={classes.btn}>View More</button>
      </div>
    </div>
  );
}
