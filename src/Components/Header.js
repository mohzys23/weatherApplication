import React from 'react';
import './Header.css';
import img from '../Assets/logo.svg';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Home';
import Signup from './Signup';
import Login from './Login';



function Header() {
return (

<div className = "header">

<div className="header-container">

<div className="header-logo">
       <img src={img} alt="" />
    </div>

<div div className = "header-links" >    
              
<Router>
              <Link to="/" style={{textDecoration:'none'}}><button>Home</button></Link>
              <Link to="/login" style={{textDecoration: 'none'}}><button>Login</button></Link>
              <Link to="/signup" style={{textDecoration: 'none'}}><button>Signup</button></Link>
  
    </Router>

</div>
  <div className="search-bar">
<input type="search" name="search bar" placeholder="Search"  aria-label="search bar" />
</div> 

</div>
      
        

</div>
);

}

export default Header;