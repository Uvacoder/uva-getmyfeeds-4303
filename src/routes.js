import { Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useStore } from "./context";

//Lazy Loading routes to allow faster loads
const MainPage = lazy(() => import("./pages/MainPage"));
const DetailPage = lazy(() => import("./pages/DetailPage"));
const BookmarksPage = lazy(() => import("./pages/BookmarksPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const HomePage = lazy(() => import("./pages/HomePage"));

const Routes = () => {
  const { feeds } = useStore();
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        {/* Looping through the array for the feeds, as they aren't always going to be constant, due to the ability of 
          feed additions introduced in the app
        */}
        {feeds.map((feed) => (
          <Route key={feed.name} exact path={`/${feed.name.toLowerCase()}`}>
            <MainPage url={feed.url} />
          </Route>
        ))}
        <Route path="/story/:id">
          <DetailPage />
        </Route>
        <Route path="/bookmarks">
          <BookmarksPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
