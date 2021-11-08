import data from '../../database/matrix.json';
import TranscriptionTrainings from '../../components/TranscriptionTrainings/TranscriptionTrainings';
import styles from './TranscriptionTrainingsPage.module.css';

const list = [...data]
  .filter(e => e.hasOwnProperty('Eng') && e.hasOwnProperty('Qt'))
  .map((e, id) => {
    return {
      id,
      eng: e.Eng,
      qt: e.Qt,
    };
  })
  .sort(() => {
    return 0.5 - Math.random();
  });

export default function TranscriptionTrainingsPage() {
  const wordsArr = [...list];
  return (
    <div className={styles.TranscriptionTrainingsPage}>
      <h2>Transcription trainings</h2>
      {!wordsArr.length && (
        <h3 className={styles.warning}>words are missing from the database</h3>
      )}
      {wordsArr.length && <TranscriptionTrainings wordsArr={wordsArr} />}
    </div>
  );
}
