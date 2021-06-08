import classes from './search.module.scss';

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
