import classes from './layout.module.scss';
// import Navbar from './navbar';

export default function Layout(props) {
  return (
    <div className={classes.layout}>
      <nav className={classes.navbar}>
        <div className={classes.navbarcontent}>
          <h1>Recipes For All</h1>
          <ul>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}
