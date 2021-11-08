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
      Anecdotes trainings
    </NavLink>

    <NavLink
      exact
      to="/sentences-trainings"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Sentences trainings
    </NavLink>
  </nav>
);
export default Navigation;
