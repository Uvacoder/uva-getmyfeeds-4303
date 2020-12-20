import { Route, Switch } from "react-router-dom";
import FeedContainer from "./containers/FeedContainer";
import { useStore } from "./context";

const Routes = () => {
  const { feeds } = useStore();
  return (
    <Switch>
      {feeds.map((feed) => (
        <Route key={feed.name} exact path={`/${feed.name.toLowerCase()}`}>
          <FeedContainer url={feed.url} />
        </Route>
      ))}
    </Switch>
  );
};

export default Routes;
