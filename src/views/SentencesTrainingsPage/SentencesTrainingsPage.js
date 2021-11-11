import data from '../../database/anecdotes.json';
import { useState, useEffect } from 'react';
import SentencesTrainings from '../../components/SentencesTrainings/SentencesTrainings';
import ChooseLanguages from '../../components/ChooseLanguages/ChooseLanguages';
import styles from './SentencesTrainingsPage.module.css';

export default function SentencesTrainingsPage() {
  const languages = ['english', 'ukrainian', 'russian'];
  const [sentencesNoIdList, setSentencesNoIdList] = useState([]);
  const [sentencesList, setSentencesList] = useState([]);

  const onLanguageChange = (originalLanguage, translationLanguage) => {
    setSentencesNoIdList([]);
    [...data]
      .map(e => {
        return {
          id: e.id,
          original: e[`${originalLanguage}`],
          translation: e[`${translationLanguage}`],
        };
      })
      .map(e => {
        const originalArr = e.original.match(/[^.?!]+[.!?]+[\])'"`’”]*|.+/g);
        const translationArr = e.translation.match(
          /[^.?!]+[.!?]+[\])'"`’”]*|.+/g,
        );

        if (originalArr.length === translationArr.length) {
          const sentencesArr = originalArr.map((elem, id) => {
            return {
              original: elem,
              translation: translationArr[id],
            };
          });
          setSentencesNoIdList(prevState => [...sentencesArr, ...prevState]);
        }
        return true;
      });
  };

  useEffect(() => {
    const normalizeList = [...sentencesNoIdList]
      .map((e, id) => {
        return {
          id,
          original: e.original,
          translation: e.translation,
        };
      })
      .filter(e => e.original.length > 30)
      .sort(() => {
        return 0.5 - Math.random();
      });
    setSentencesList([...normalizeList]);
  }, [sentencesNoIdList]);

  return (
    <div className={styles.SentencesTrainingsPage}>
      <h2>Sentences trainings</h2>
      {!languages.length && (
        <h3 className={styles.warning}>No language found</h3>
      )}
      {languages.length && (
        <ChooseLanguages
          languages={languages}
          onLanguageChange={onLanguageChange}
        />
      )}

      {!sentencesList.length && (
        <h3 className={styles.warning}>
          Sentences are missing from the database
        </h3>
      )}
      {sentencesList.length && (
        <SentencesTrainings sentencesList={sentencesList} />
      )}
    </div>
  );
}
