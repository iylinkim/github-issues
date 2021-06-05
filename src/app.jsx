import "styles/app.scss";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Header from "./components/Header";

function App({api}) {
  return (
    <div className="wrap">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home api={api}/>
          </Route>
          <Route exact path="/:id">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
