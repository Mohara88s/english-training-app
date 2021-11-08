import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import styles from './ChooseLanguages.module.css';
import PropTypes from 'prop-types';

export default function ChooseLanguages({ languages, onLanguageChange }) {
  const [originalLanguage, setOriginalLanguage] = useState(languages[0]);
  const [translationLanguage, setTranslationLanguage] = useState(languages[1]);

  const onClickButtonOriginalLanguage = e => {
    const { value } = e.currentTarget;
    setOriginalLanguage(value);
  };

  const onClickButtonTranslationLanguage = e => {
    const { value } = e.currentTarget;
    setTranslationLanguage(value);
  };

  useEffect(() => {
    onLanguageChange(originalLanguage, translationLanguage);
  }, [originalLanguage, translationLanguage]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.ChooseLanguages}>
      <ul className={styles.ChooseLanguagesList}>
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
    </div>
  );
}

ChooseLanguages.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLanguageChange: PropTypes.func.isRequired,
};
