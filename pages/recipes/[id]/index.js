import classes from '../../../styles/slug.module.scss';

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
  const dataMeals = data.meals[0];
  const {
    strMeal,
    strMealThumb,
    strCategory,
    strArea,
    strInstructions,
  } = dataMeals;

  return (
    <div className={classes.card}>
      <div className={classes.mealDetails}>
        <img src={strMealThumb} alt={strMeal} />
        <h1 className={classes.name}>{strMeal}</h1>
      </div>
      <div className={classes.ingredientsContainer}>
        <h2 className={classes.ingredients}>Ingredients:</h2>
        <ul className={classes.ingredientsList}>
          <li>
            {dataMeals.strMeasure1} {dataMeals.strIngredient1}
          </li>
          <li>
            {dataMeals.strMeasure2} {dataMeals.strIngredient2}
          </li>
          <li>
            {dataMeals.strMeasure3} {dataMeals.strIngredient3}
          </li>
          <li>
            {dataMeals.strMeasure4} {dataMeals.strIngredient4}
          </li>
          <li>
            {dataMeals.strMeasure5} {dataMeals.strIngredient5}
          </li>
          <li>
            {dataMeals.strMeasure6} {dataMeals.strIngredient6}
          </li>
          <li>
            {dataMeals.strMeasure7} {dataMeals.strIngredient7}
          </li>
          <li>
            {dataMeals.strMeasure8} {dataMeals.strIngredient8}
          </li>
          <li>
            {dataMeals.strMeasure9} {dataMeals.strIngredient9}
          </li>
          <li>
            {dataMeals.strMeasure10} {dataMeals.strIngredient10}
          </li>
          <li>
            {dataMeals.strMeasure11} {dataMeals.strIngredient11}
          </li>
          <li>
            {dataMeals.strMeasure12} {dataMeals.strIngredient12}
          </li>
          <li>
            {dataMeals.strMeasure13} {dataMeals.strIngredient13}
          </li>
          <li>
            {dataMeals.strMeasure14} {dataMeals.strIngredient14}
          </li>
          <li>
            {dataMeals.strMeasure15} {dataMeals.strIngredient15}
          </li>
          <li>
            {dataMeals.strMeasure16} {dataMeals.strIngredient16}
          </li>
          <li>
            {dataMeals.strMeasure17} {dataMeals.strIngredient17}
          </li>
          <li>
            {dataMeals.strMeasure18} {dataMeals.strIngredient18}
          </li>
          <li>
            {dataMeals.strMeasure19} {dataMeals.strIngredient19}
          </li>
          <li>
            {dataMeals.strMeasure20} {dataMeals.strIngredient20}
          </li>
        </ul>
      </div>
      <div className={classes.directions}>
        <h2>Directions:</h2>
        <p>{strInstructions}</p>
      </div>
    </div>
  );
}
