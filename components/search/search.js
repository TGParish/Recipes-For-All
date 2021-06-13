import classes from './search.module.scss';

export default function Search(props) {
  return (
    <div className={classes.searchwrapper}>
      <form className={classes.search} onSubmit={props.submit}>
        <label htmlFor="header-search">
          <span className={classes.hidden}>Search recipes</span>
        </label>
        <input
          type="text"
          id="header-search"
          placeholder="find a recipe"
          name="search"
          value={props.search}
          onChange={props.handler}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
