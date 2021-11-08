import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import styles from './HomePage.module.css';
import anecdotTrainingsImg from '../../public/pictures/anecdot_trainings.jpg';

export default function HomePage() {
  const { url } = useRouteMatch();
  const location = useLocation();

  return (
    <div className={styles.HomePage}>
      <h2>Choose trainings:</h2>
      <ul className={styles.LinksList}>
        <li className={styles.LinksList__item}>
          <Link
            to={{
              pathname: `${url}anecdotes-trainings/`,
              state: { from: location },
            }}
          >
            <h3 className={styles.LinksList__name}>Anecdotes trainings</h3>
            <img
              src={anecdotTrainingsImg}
              alt="Anecdotes trainings"
              className={styles.LinksList__picture}
            />
          </Link>
        </li>
        <li className={styles.LinksList__item}>
          <Link
            to={{
              pathname: `${url}anecdotes-trainings/`,
              state: { from: location },
            }}
          >
            <h3 className={styles.LinksList__name}>PLUG trainings</h3>
            <img
              src={anecdotTrainingsImg}
              alt="Anecdotes trainings"
              className={styles.LinksList__picture}
            />
          </Link>
        </li>
        <li className={styles.LinksList__item}>
          <Link
            to={{
              pathname: `${url}anecdotes-trainings/`,
              state: { from: location },
            }}
          >
            <h3 className={styles.LinksList__name}>PLUG trainings</h3>
            <img
              src={anecdotTrainingsImg}
              alt="Anecdotes trainings"
              className={styles.LinksList__picture}
            />
          </Link>
        </li>
        <li className={styles.LinksList__item}>
          <Link
            to={{
              pathname: `${url}anecdotes-trainings/`,
              state: { from: location },
            }}
          >
            <h3 className={styles.LinksList__name}>PLUG trainings</h3>
            <img
              src={anecdotTrainingsImg}
              alt="Anecdotes trainings"
              className={styles.LinksList__picture}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
