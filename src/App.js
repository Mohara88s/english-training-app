import { lazy, Suspense } from 'react';
import AppBar from './components/AppBar/AppBar';
import Loader from 'react-loader-spinner';

import NotFoundView from './views/NotFoundView/NotFoundView';
import { Route, Switch } from 'react-router-dom';
import 'modern-normalize/modern-normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage.js' /* webpackChunkName:"HomePage" */),
);
const AnecdotesTrainingsPage = lazy(() =>
  import(
    './views/AnecdotesTrainingsPage/AnecdotesTrainingsPage.js' /* webpackChunkName:"AnecdotesTrainingsPage" */
  ),
);

export default function App() {
  return (
    <>
      <AppBar />

      <Suspense
        fallback={
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        }
      >
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/anecdotes-trainings">
            <AnecdotesTrainingsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
