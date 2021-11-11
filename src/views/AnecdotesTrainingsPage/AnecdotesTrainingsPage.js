import data from '../../database/anecdotes.json';
import { useState } from 'react';
import AnecdotesTrainings from '../../components/AnecdotesTrainings/AnecdotesTrainings';
import ChooseLanguages from '../../components/ChooseLanguages/ChooseLanguages';
import styles from './AnecdotesTrainingsPage.module.css';

export default function AnecdotesTrainingsPage() {
  const languages = ['english', 'ukrainian', 'russian'];
  const [anecdotesList, setAnecdotesList] = useState([]);

  const onLanguageChange = (originalLanguage, translationLanguage) => {
    const list = [...data]
      .map(e => {
        return {
          id: e.id,
          original: e[`${originalLanguage}`],
          translation: e[`${translationLanguage}`],
        };
      })
      .sort(() => {
        return 0.5 - Math.random();
      });
    setAnecdotesList([...list]);
  };

  return (
    <div className={styles.AnecdotesTrainingsPage}>
      <h2>Anecdotes trainings</h2>
      {!languages.length && (
        <h3 className={styles.warning}>No language found</h3>
      )}
      {languages.length && (
        <ChooseLanguages
          languages={languages}
          onLanguageChange={onLanguageChange}
        />
      )}

      {!anecdotesList.length && (
        <h3 className={styles.warning}>
          Anecdotes are missing from the database
        </h3>
      )}
      {anecdotesList.length && (
        <AnecdotesTrainings anecdotesList={anecdotesList} />
      )}
    </div>
  );
}
