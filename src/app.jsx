import "./app.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Header from "./components/Header";

function App({api}) {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home api={api}/>
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
