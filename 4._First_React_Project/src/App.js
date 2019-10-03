import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfilePage from './components/profile/ProfilePage'; 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>

            <Route path="/">
              <div>This is the home page</div>
            </Route>
          <Route path="/profile" >
              {/* <ProfilePage /> */}
              <div>test</div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
