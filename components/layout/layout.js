import classes from './layout.module.scss';
import Link from 'next/link';

export default function Layout(props) {
  return (
    <div className={classes.layout}>
      <nav className={classes.navbar}>
        <section className={classes.navbarcontent}>
          <Link href="/">
            <h1>
              <a className={classes.heading}>No Bloat Recipes</a>
            </h1>
          </Link>
        </section>
      </nav>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}
