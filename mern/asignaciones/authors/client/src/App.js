import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './views/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthorForm from './views/AuthorForm';
import AuthorsList from './views/AuthorsList';

function App() {
  return (
    <div className="container">

      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/new">
            <AuthorForm />
          </Route>
          <Route exact path="/edit/:id">
            <AuthorForm />
          </Route>
          <Route exact path="/authors">
            <AuthorsList />
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
