import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Loader from "./pages/Loader";

import Home from "./pages/HomePage";

const AsyncMovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const AsyncMoviesPage = lazy(() => import("./pages/MoviesPage"));

const App = () => (
  <>
    <Nav />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies/:movieId" component={AsyncMovieDetailsPage} />
        <Route path="/movies" component={AsyncMoviesPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </>
);

export default App;
