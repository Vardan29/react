import {Link, useHistory, useLocation} from 'react-router-dom';
import React, {useState} from 'react';
import {logInUser} from "../../core/controllers/login";

const SignIn = () => {

    const history = useHistory();
    const location = useLocation();
    const [username, changeUsername] = useState('');
    const [password, changePassword] = useState('');
    console.log(location.pathname);

    const checkUser = (users) => {
        const user = users.find(user => (user.username === username.toLowerCase() && user.password === password));

        if (user) {
            history.push('/home');
        } else {
            alert('Invalid username password');
            changeUsername('');
            changePassword('');
        }
    }

    const onSignIn = () => {
        logInUser(checkUser);
    };

    return (
        <div>
            <h1>Sign In</h1>

            Username:
            <input
                type='text'
                value={username}
                onChange={(e) => changeUsername(e.target.value)}
            /><br/>
            Password:
            <input
                type='password'
                value={password}
                onChange={(e) => changePassword(e.target.value)}
            /><br/>

            <button onClick={onSignIn}>
                Sign In
            </button>

            <Link to={'/signUp'}>
                <button>Sign Up</button>
            </Link>
        </div>
    )
};

export default SignIn;