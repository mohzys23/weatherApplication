import React from 'react';
import './Header.css';
import { BrowserRouter as Link } from "react-router-dom";



function Buttons() {
    return (

<div>
<button><Link to="/" style={{textDecoration:'none', color: 'white'}}>Home</Link></button>
              <button><Link to="/Login" style={{textDecoration: 'none', color: 'white'}}>Login</Link></button>
              <button><Link to="/Signup" style={{textDecoration: 'none', color: 'white'}}>Signup</Link></button>
             
</div>
              

   

    );
}

export default Buttons;