import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav className={styles.Navigation}>
    <NavLink
      exact
      to="/"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>

    <NavLink
      exact
      to="/anecdotes-trainings"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Anecdotes training
    </NavLink>
  </nav>
);
export default Navigation;
