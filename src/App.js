import React from 'react';
import './App.css';
import './Components/Header.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Header';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Landing from './Components/Landing';


function App() {
  return (
    <div className="App">
    <Router>
    <Header />
    
     <Switch>
      <Route exact path='/Landing' component = {Landing} />
          <Route exact path='/Signup' component = {Signup} />
          <Route  exact path='/Login' component = {Login} />
          <Route  path='/' component ={Home} />
        </Switch>
    </Router>
 

</div>

  );
}

export default App;
