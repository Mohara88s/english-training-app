import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import styles from './AnecdotesTrainings.module.css';
import PropTypes from 'prop-types';
// import { throttle } from 'lodash';

export default function AnecdotesTrainings({ anecdotesList }) {
  const [actualId, setActualId] = useState(0);
  const [losts, setLosts] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [resolved, setResolved] = useState(false);
  const [anecdotId, setAnecdotId] = useState(0);
  const [originalArray, setOriginalArray] = useState([]);
  const [mixedArray, setMixedArray] = useState([]);
  const [resolvedArray, setResolvedArray] = useState([]);

  useEffect(() => {
    if (anecdotesList[anecdotId].translation) {
      setOriginalArray([
        ...anecdotesList[anecdotId].translation
          .match(/[^.?!]+[.!?]+[\])'"`’”]*|.+/g)
          .map(e => (e[0] === ' ' ? e.slice(1) : e)),
      ]);
    }
  }, [anecdotId, anecdotesList]);

  useEffect(() => {
    setMixedArray([
      ...[...originalArray].sort(() => {
        return 0.5 - Math.random();
      }),
    ]);
  }, [originalArray]);

  const onClickButton = e => {
    const buttonValue = e.currentTarget.getAttribute('value');
    const id = Number.parseInt(e.currentTarget.getAttribute('data-id'));

    if (buttonValue === originalArray[actualId]) {
      onRightButtonClick(e.currentTarget, id, buttonValue);
    } else {
      onWrongButtonClick(e.currentTarget);
    }
    setAttempts(prevState => prevState + 1);
    if (actualId >= originalArray.length - 1) {
      onPositiveTrainingResult();
    }
  };

  const onWrongButtonClick = button => {
    setLosts(prevState => prevState + 1);
    button.classList.remove('btn-primary');
    button.classList.add('btn-danger');
    setTimeout(() => {
      button.classList.remove('btn-danger');
      button.classList.add('btn-primary');
    }, 300);
  };

  const onRightButtonClick = (button, id, value) => {
    button.classList.remove('btn-primary');
    button.classList.add('btn-success');
    setTimeout(() => {
      mixedArray.splice(id, 1);
      resolvedArray.push(value);
      button.classList.remove('btn-success');
      button.classList.add('btn-primary');
      setActualId(prevState => prevState + 1);
    }, 300);
  };

  const onPositiveTrainingResult = () => {
    setTimeout(() => {
      setResolved(true);
    }, 300);
  };
  const onClickButtonNext = () => {
    if (anecdotId >= anecdotesList.length - 1) {
      setAnecdotId(0);
    } else {
      setAnecdotId(prevState => prevState + 1);
    }
    setActualId(0);
    setLosts(0);
    setAttempts(0);
    setResolved(false);
    setResolvedArray([]);
  };

  return (
    <div className={styles.AnecdotesTrainings}>
      <h3>Anecdot in original language</h3>
      {!anecdotesList[anecdotId].original && (
        <h3 className={styles.warning}>no original available</h3>
      )}
      <p>{anecdotesList[anecdotId].original}</p>

      <h3>Anecdot in translation language</h3>
      <ul className={styles.anecdotFealdsList}>
        <li className={styles.anecdotFealdsList__item}>
          <h4 className={styles.anecdotFealdHeader}>Unresolved anecdot</h4>
          {!anecdotesList[anecdotId].translation && (
            <h3 className={styles.warning}>no translation available</h3>
          )}
          <ul className={styles.listTags}>
            {mixedArray.map((elem, id) => (
              <li key={id} className={styles.listTags__item}>
                <Button
                  variant="primary"
                  data-id={id}
                  // onClick={throttle(onClickButton, 500)}
                  onClick={onClickButton}
                  value={elem}
                >
                  {elem}
                </Button>
              </li>
            ))}
          </ul>
          {resolved && (
            <div className={styles.congratulations}>
              <h3>Congratulations, you're great!!!</h3>
              <p>Are you ready for a new test?</p>
              <p>Then press NEXT!</p>
              <Button variant="warning" onClick={onClickButtonNext}>
                NEXT
              </Button>
              <div className={styles.statistics}>
                <h5>Сurrent statistics:</h5>
                <p>Attempts: {attempts}</p>
                <p>Losts: {losts}</p>
              </div>
            </div>
          )}
        </li>
        <li className={styles.anecdotFealdsList__item}>
          <h4 className={styles.anecdotFealdHeader}>Resolved anecdot</h4>
          <ul className={styles.listTags}>
            {resolvedArray.map((elem, id) => (
              <li key={id} className={styles.listTags__item}>
                <Button variant="primary">{elem}</Button>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

AnecdotesTrainings.propTypes = {
  anecdotesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      original: PropTypes.string.isRequired,
      translation: PropTypes.string.isRequired,
    }),
  ),
};
