import classes from '../../../util/slug.module.scss';

const apiEndPoint = `https://www.themealdb.com/api/json/v1/1/`;

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch(`${apiEndPoint}lookup.php?i=${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Recipes({ data }) {
  console.log(data);
  const dataMeals = data.meals[0];
  console.log(dataMeals);
  const {
    strMeal,
    strMealThumb,
    strCategory,
    strArea,
    strInstructions,
    str,
  } = dataMeals;

  return (
    <div className={classes.card}>
      <img src={strMealThumb} alt={strMeal} />
      <h1>{strMeal}</h1>
      <p>Category: {strCategory}</p>
      <p></p>
    </div>
  );
}
