import React from 'react';
import './Login.css';



function Login() {

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
    <h4>Login</h4>
    <label>Username: <br /><input value={username} onChange={changeUsername} type="text" /></label>
<br />
<br />
<label>Password: <br /><input onChange={changePassword} value={password} type="password" /></label>

<br />
<p>Always remember me <input type="checkbox" className="form-check" /></p>
<button onClick={onLogin}>Login</button>

</form>
</div>

 


    );
    
}

export default Login;