import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './views/Home'
import PlayerList from './views/PlayerList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FormPlayer from './views/FormPlayer';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/players/list">
            <PlayerList />
          </Route>
          <Route exact path="/players/addplayer">
            <FormPlayer />
          </Route>
        
        </Switch>

      </Router>

    </div>
  );
}

export default App;
