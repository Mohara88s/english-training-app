import { useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from './AnecdotesTrainingsPage.module.css';

const anecdot = {
  english: `A porter in a British hotel comes upon an American tourist impatiently jabbing at the button for the lift. “Sir, the lift will be here in a moment.” “Lift? Lift?” replies the American. “Oh, you mean the elevator.” “No sir, here we call it a lift.” “Well, as it was invented in the United States, it’s called an elevator.” “Yes sir, but as the language was invented here, it’s called a lift.”`,
  russian: `В британском отеле портье подходит к американскому туристу, нетерпеливо жмущему на кнопку лифта. — Сэр, лифт скоро будет здесь. — Лифт? Лифт? — отвечает американец. — О, вы имеете в виду элеватор. — Нет, сэр, здесь мы называем это лифт. — Но поскольку он был изобретён в Америке, он называется элеватор. — Да, сэр, но поскольку язык был изобретён здесь, то это называется лифт.`,
};

const buttonsArray = anecdot.russian.split('.').filter(e => e.length);
const mixedArray = [...buttonsArray].sort(() => {
  return 0.5 - Math.random();
});
const resolvedArray = [];

export default function AnecdotesTrainingsPage() {
  const [actualId, setActualId] = useState(0);
  const [losts, setLosts] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [resolved, setResolved] = useState(false);

  const onClickButton = e => {
    const buttonValue = e.currentTarget.getAttribute('value');
    const id = Number.parseInt(e.currentTarget.getAttribute('data-id'));

    if (buttonValue === buttonsArray[actualId]) {
      onRightButtonClick(e.currentTarget, id, buttonValue);
    } else {
      onWrongButtonClick(e.currentTarget);
    }
    setAttempts(prevState => prevState + 1);
    if (actualId >= buttonsArray.length - 1) {
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
    }, 500);
  };

  const onRightButtonClick = (button, id, value) => {
    button.classList.remove('btn-primary');
    button.classList.add('btn-success');
    setTimeout(() => {
      button.classList.remove('btn-success');
      button.classList.add('btn-primary');
      mixedArray.splice(id, 1);
      resolvedArray.push(value);
      setActualId(prevState => prevState + 1);
    }, 500);
  };

  const onPositiveTrainingResult = () => {
    setResolved(true);
  };

  return (
    <div className={styles.AnecdotesTrainingsPage}>
      <h2>Anecdotes trainings</h2>
      <h3>Сurrent statistics</h3>

      <p>Attempts: {attempts}</p>
      <p>Losts: {losts}</p>

      <h3>Anecdot in english</h3>
      <p>{anecdot.english}</p>

      <h3>Anecdot in russian</h3>
      {resolved && <h3 className={styles.congratulations}>Congratilations</h3>}
      <ul className={styles.list}>
        {mixedArray.map((elem, id) => (
          <li key={id} className={styles.list__item}>
            <Button
              variant="primary"
              data-id={id}
              onClick={onClickButton}
              value={elem}
            >
              {elem}
            </Button>
          </li>
        ))}
      </ul>

      <h3>Resolved anecdot</h3>
      <ul className={styles.list}>
        {resolvedArray.map((elem, id) => (
          <li key={id} className={styles.list__item}>
            <Button
              variant="primary"
              data-id={id}
              onClick={onClickButton}
              value={elem}
            >
              {elem}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
