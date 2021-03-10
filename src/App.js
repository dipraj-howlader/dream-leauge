import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import LeaugeDetails from './Components/LeaugeDetails/LeaugeDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/league/:idLeague">
        <LeaugeDetails></LeaugeDetails>
        </Route>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="*">
        <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
