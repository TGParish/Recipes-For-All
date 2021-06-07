import classes from './search.module.scss';

const recipes = [
  {
    id: '1',
    name: 'Chicken Parm',
    time: '30 minutes',
    description: 'Delicious crispy crust',
  },
];

export default function Search() {
  return (
    <div className={classes.searchwrapper}>
      <form action="/" method="get" className={classes.search}>
        <label htmlFor="header-search">
          <span className={classes.hidden}>Search recipes</span>
        </label>
        <input
          type="text"
          id="header-search"
          placeholder="Search for..."
          name="search"
        />
      </form>
    </div>
  );
}
