import React from 'react';
import './Login.css';
import { Link } from "react-router-dom";

function Signup() {
   

const [username, setUsername] = React.useState("");
const [password, setPassword] = React.useState("");
const [fullname, setFullname] = React.useState("");
const [email, setEmail] = React.useState("");

const changeUsername = (event) => {
    setUsername(event.target.value);
};

const changePassword = (event) => {
    setPassword(event.target.value);
};

const changeFullname = (event) => {
    setFullname(event.target.value);
};

const changeEmail = (event) => {
    setEmail(event.target.value);
};


const onLogin = (event) => {
alert(`Hello, your username is: ${username}. \nYour Password is ${password}. \n Please click ok to login and use full weather access.`, <Link to="/" style={{textDecoration:'none', color: 'white'}}>Home</Link>);
    event.preventDefault();
};

return (

<div className="box">
<form>
    <h4>Sign Up</h4>
    <label>Fullname: <br /><input value={fullname} onChange={changeFullname} type="text" required/></label>
<br />
<br />
<label>Username: <br /><input value={username} onChange={changeUsername} type="text" required/></label>
<br />
<br />
<label>Email: <br /><input value={email} onChange={changeEmail} type="text" required/></label>
<br />
<br />
<label>Password: <br /><input  onChange={changePassword} value={password} type="password" required/></label>

<br />
<div className="space"></div>
<button onClick={onLogin} style={{textDecoration: 'none', color: 'white', backgroundColor: '#0000005e'}}><Link to="/Login">Sign up</Link></button>

</form>
</div>




    );
    
}

export default Signup;