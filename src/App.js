import { lazy, Suspense } from 'react';
import AppBar from './components/AppBar/AppBar';
import Loader from 'react-loader-spinner';

import NotFoundView from './views/NotFoundView/NotFoundView';
import { Route, Switch } from 'react-router-dom';
import '../node_modules/modern-normalize';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage.js' /* webpackChunkName:"HomePage" */),
);
const AnecdotesTrainingsPage = lazy(() =>
  import(
    './views/AnecdotesTrainingsPage/AnecdotesTrainingsPage.js' /* webpackChunkName:"AnecdotesTrainingsPage" */
  ),
);
const SentencesTrainingsPage = lazy(
  () =>
    import(
      './views/SentencesTrainingsPage/SentencesTrainingsPage.js'
    ) /* webpackChunkName:"SentencesTrainingsPage" */,
);

export default function App() {
  return (
    <div className={styles.App}>
      <AppBar />

      <Suspense
        fallback={
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
            className={styles.loader}
          />
        }
      >
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/anecdotes-trainings">
            <AnecdotesTrainingsPage />
          </Route>

          <Route exact path="/sentences-trainings">
            <SentencesTrainingsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
