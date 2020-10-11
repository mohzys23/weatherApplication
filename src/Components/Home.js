import React from 'react';
import sunny from '../Assets/sunny.svg';
import './Home.css';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';

function Home() {
    return (

<div className="homeSection">
<div className="aside-left">
<h1>Get accurate weather forecast here.</h1>
<img src={sunny} alt="" />




<p>Weather forecase for the day is displayed 24/7 and is automatically refreshed.</p>

</div>

<div className="aside-right">
<h3>Current Location</h3>
</div>


</div>


    );
    
}

export default Home;