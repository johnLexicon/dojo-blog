import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <CreatePost />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
