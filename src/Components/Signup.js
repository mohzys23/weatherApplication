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
alert(`Hello, your username is: ${username}. \nYour Password is ${password}. \n Please login below to use full weather access.`, <Link to="/" style={{textDecoration:'none', color: 'white'}}>Home</Link>);
    event.preventDefault();
};

return (

<div className="box">
<form method="" >
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
<label>Password: <br /><input required onChange={changePassword} value={password} type="password" /></label>

<br />
<div className="space"></div>
<button onClick={onLogin} ><Link to="/Login">Sign up</Link></button>

</form>
</div>




    );
    
}

export default Signup;