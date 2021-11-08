import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import styles from './HomePage.module.css';
import anecdotTrainingsImg from '../../public/pictures/anecdot_trainings.jpg';
import sentencesTrainingsImg from '../../public/pictures/sentences_trainings.jpg';
import transcription__trainingsImg from '../../public/pictures/transcription__trainings.jpg';
import plug__trainingsImg from '../../public/pictures/plug__trainings.jpg';

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
              pathname: `${url}sentences-trainings/`,
              state: { from: location },
            }}
          >
            <h3 className={styles.LinksList__name}>Sentences trainings</h3>
            <img
              src={sentencesTrainingsImg}
              alt="Sentences trainings"
              className={styles.LinksList__picture}
            />
          </Link>
        </li>
        <li className={styles.LinksList__item}>
          <Link
            to={{
              pathname: `${url}transcription-trainings/`,
              state: { from: location },
            }}
          >
            <h3 className={styles.LinksList__name}>Transcription trainings</h3>
            <img
              src={transcription__trainingsImg}
              alt="Transcription trainings"
              className={styles.LinksList__picture}
            />
          </Link>
        </li>
        <li className={styles.LinksList__item}>
          <Link
            to={{
              pathname: `${url}plug/`,
              state: { from: location },
            }}
          >
            <h3 className={styles.LinksList__name}>PLUG trainings</h3>
            <img
              src={plug__trainingsImg}
              alt="PLUG trainings"
              className={styles.LinksList__picture}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
