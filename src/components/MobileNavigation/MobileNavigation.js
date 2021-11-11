import { NavLink } from 'react-router-dom';
import styles from './MobileNavigation.module.css';
import { useState } from 'react';

export default function MobileNavigation() {
  const [menuOpened, setMenuOpened] = useState(false);
  const onClickMenuButton = e => {
    menuOpened ? closeMenu(e.currentTarget) : openMenu(e.currentTarget);
  };
  const openMenu = menuBtn => {
    menuBtn.classList.add('btn-dark');
    menuBtn.classList.remove('btn-primary');
    setMenuOpened(true);
  };
  const closeMenu = menuBtn => {
    menuBtn.classList.add('btn-primary');
    menuBtn.classList.remove('btn-dark');
    setMenuOpened(false);
  };

  return (
    <nav className={styles.MobileNavigation}>
      {menuOpened && (
        <ul className={styles.MobileNavigationList}>
          <li className={styles.MobileNavigationList__item}>
            <NavLink
              exact
              to="/"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.MobileNavigationList__item}>
            <NavLink
              exact
              to="/anecdotes-trainings"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Anecdotes trainings
            </NavLink>
          </li>

          <li className={styles.MobileNavigationList__item}>
            <NavLink
              exact
              to="/sentences-trainings"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Sentences trainings
            </NavLink>
          </li>

          <li className={styles.MobileNavigationList__item}>
            <NavLink
              exact
              to="/transcription-trainings"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Transcription trainings
            </NavLink>
          </li>
        </ul>
      )}

      <button
        type="button"
        className="btn btn-primary"
        onClick={onClickMenuButton}
      >
        Menu
      </button>
    </nav>
  );
}
