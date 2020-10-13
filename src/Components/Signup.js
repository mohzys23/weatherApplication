import React from 'react';
import './Login.css';

function Signup() {
   

        const [username, setUsername] = React.useState("");
const [password, setPassword] = React.useState("");

const changeUsername = (event) => {
    setUsername(event.target.value);
};

const changePassword = (event) => {
    setPassword(event.target.value);
};

const onLogin = (event) => {
    alert(`Hello, your username is: ${username}. \nYour Password is ${password}`);
    event.preventDefault();
};

return (

<div className="box">
<form method="" >
    <h4>Sign Up</h4>
    <label>Fullname: <br /><input value={username} onChange={changeUsername} type="text" /></label>
<br />
<br />
<label>Username: <br /><input value={username} onChange={changeUsername} type="text" /></label>
<br />
<br />
<label>Email: <br /><input value={username} onChange={changeUsername} type="text" /></label>
<br />
<br />
<label>Password: <br /><input onChange={changePassword} value={password} type="password" /></label>

<br />
<div className="space"></div>
<button onClick={onLogin}>Sign up</button>

</form>
</div>




    );
    
}

export default Signup;