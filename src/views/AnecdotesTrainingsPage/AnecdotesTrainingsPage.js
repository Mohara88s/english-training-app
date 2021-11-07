import AnecdotesTrainings from '../../components/AnecdotesTrainings/AnecdotesTrainings';
import styles from './AnecdotesTrainingsPage.module.css';
import data from '../../database/anecdotes.json';

import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function AnecdotesTrainingsPage() {
  const languages = ['english', 'ukrainian', 'russian'];
  const [originalLanguage, setOriginalLanguage] = useState(languages[0]);
  const [translationLanguage, setTranslationLanguage] = useState(languages[1]);
  const [anecdotesList, setAnecdotesList] = useState([]);

  const onClickButtonOriginalLanguage = e => {
    const { value } = e.currentTarget;
    console.log(value);
    setOriginalLanguage(value);
  };

  const onClickButtonTranslationLanguage = e => {
    const { value } = e.currentTarget;
    setTranslationLanguage(value);
  };

  useEffect(() => {
    const list = [...data].map(e => {
      return {
        id: e.id,
        original: e[`${originalLanguage}`],
        translation: e[`${translationLanguage}`],
      };
    });
    console.log(list);
    setAnecdotesList([...list]);
  }, [originalLanguage, translationLanguage]);

  return (
    <div className={styles.AnecdotesTrainingsPage}>
      <ul className={styles.languagesCoosesList}>
        <li>
          <h3>Choose original language:</h3>
          <ul className={styles.languagesList}>
            {languages.map(elem => (
              <li key={elem + 1}>
                <Button
                  variant="primary"
                  onClick={onClickButtonOriginalLanguage}
                  value={elem}
                  className={
                    elem === originalLanguage
                      ? 'btn btn-primary btn-lg'
                      : 'btn btn-primary'
                  }
                >
                  {elem}
                </Button>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <h3>Choose translation language:</h3>
          <ul className={styles.languagesList}>
            {languages.map(elem => (
              <li key={elem + 2}>
                <Button
                  variant="primary"
                  onClick={onClickButtonTranslationLanguage}
                  value={elem}
                  className={
                    elem === translationLanguage
                      ? 'btn btn-primary btn-lg'
                      : 'btn btn-primary'
                  }
                >
                  {elem}
                </Button>
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <AnecdotesTrainings anecdotesList={anecdotesList} />
    </div>
  );
}
