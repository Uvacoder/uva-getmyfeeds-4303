import { Route, Switch } from "react-router-dom";
import FeedContainer from "./containers/FeedContainer";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <FeedContainer url={`https://medium.com/feed/backchannel`} />
    </Route>
    <Route exact path="/matter">
      <FeedContainer url={`https://medium.com/feed/matter`} />
    </Route>
  </Switch>
);

export default Routes;
