import React from 'react';
import './App.css';
import './Components/Header.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
<Header />

    <Router>        
    <Switch>
          <Route  exact path='/signup' component ={Signup} />
          <Route  exact path='/login' component = {Login} />
          <Route  path='/' component ={Home} />
        </Switch>
    </Router>

</div>

  );
}

export default App;
