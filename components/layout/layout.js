import classes from './layout.module.scss';
import Link from 'next/link';

export default function Layout(props) {
  return (
    <div className={classes.layout}>
      <nav className={classes.navbar}>
        <div className={classes.navbarcontent}>
          <Link href="/">
            <h1>
              <a>Recipes For All</a>
            </h1>
          </Link>
          <ul>
            <Link href="/about">
              <li>
                <a>About</a>
              </li>
            </Link>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}
