import "./app.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/detail">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
