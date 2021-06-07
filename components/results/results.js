import classes from './results.module.scss';

const recipes = [
  {
    id: '1',
    name: 'Chicken Parm',
    time: '30 minutes',
    description: 'Delicious crispy crust',
  },
  {
    id: '2',
    name: 'Chicken Parm',
    time: '30 minutes',
    description: 'Delicious crispy crust',
  },
  {
    id: '3',
    name: 'Chicken Parm',
    time: '30 minutes',
    description: 'Delicious crispy crust',
  },
  {
    id: '4',
    name: 'Chicken Parm',
    time: '30 minutes',
    description: 'Delicious crispy crust',
  },
  {
    id: '5',
    name: 'Chicken Parm',
    time: '30 minutes',
    description: 'Delicious crispy crust',
  },
  {
    id: '6',
    name: 'Chicken Parm',
    time: '30 minutes',
    description: 'Delicious crispy crust',
  },
];

export default function Results() {
  return (
    <div className={classes.cards}>
      {recipes.map((recipe) => (
        <div className={classes.card}>
          <h3>{recipe.name}</h3>
          <p>{recipe.time}</p>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}
