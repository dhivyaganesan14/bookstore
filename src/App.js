import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/signup";



function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/signup"}>Sign up</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <div className="outer">
        <div className="inner">
          
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            
          </Switch>
        </div>
      </div>
      
    </div>
    
    
    </Router>
  );
}

export default App;
