import classes from '../styles/about.module.scss';

export default function About() {
  return (
    <div className={classes.cards}>
      <div className={classes.card}>
        <p>
          This website utilizes the mealdDB.com API and allows you to search the
          database for recipes. No ads or fluff!
        </p>
      </div>
    </div>
  );
}
