import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { useStore } from "./context";
import DetailPage from "./pages/DetailPage";
import BookmarksPage from "./pages/BookmarksPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

const Routes = () => {
  const { feeds } = useStore();
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
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
  );
};

export default Routes;
