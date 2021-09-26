import { useRouter } from 'next/router';
import Link from 'next/link';

import classes from './displayrecipecards.module.scss';

export default function DisplayRecipeCards(props) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/recipes/[slug]');
  };

  return (
    <div className={classes.cards}>
      {props.display.map((meal) => (
        <div className={classes.card}>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <h2 className={classes.name}>
            {meal.strMeal.length > 25
              ? meal.strMeal.substring(0, 24) + '...'
              : meal.strMeal}
          </h2>
          <p className={classes.description}>
            {meal.strInstructions.substring(0, 75) + '...'}
          </p>
          <button
            className={classes.btn}
            type="button"
            onClick={() => {
              router.push({
                pathname: '/recipes/[id]',
                query: { id: meal.idMeal },
              });
            }}
          >
            View More
          </button>
        </div>
      ))}
    </div>
  );
}
