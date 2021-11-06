import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import styles from './HomePage.module.css';

export default function HomePage() {
  const { url } = useRouteMatch();
  const location = useLocation();

  return (
    <div className={styles.HomePage}>
      <h2>Trainings:</h2>
      <Link
        to={{
          pathname: `${url}anecdotes-trainings/`,
          state: { from: location },
        }}
      >
        {' '}
        <h3>Anecdotes trainings</h3>
      </Link>
    </div>
  );
}
