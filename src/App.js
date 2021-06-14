import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import PostDetails from './components/PostDetails';
function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <div className="container-md container-fluid">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <CreatePost />
            </Route>
            <Route path="/posts/:id">
              <PostDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
