import React, {useState} from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import InputField from 'components/shared/input-field';

const SignIn = () => {

    const history = useHistory();
    const location = useLocation();
    const [username, changeUsername] = useState('');
    const [password, changePassword] = useState('');
    console.log(location.pathname);

    const onSignIn = () => {
        fetch('http://localhost:4000/users')
            .then(res => res.json())
            .then(users => {
                const user = users.find(user => (user.username.toLowerCase() === username.toLowerCase() && user.password === password));

                if (user) {
                    history.push('/home');
                } else {
                    alert('Invalid username password');
                    changeUsername('');
                    changePassword('');
                }
            });
    };

    return (
        <div>
            <h1>Sign In</h1>
            <InputField
                title={'Username:'}
                value={username}
                onChangeHandler={changeUsername}
            />
            <InputField
                title={'Password:'}
                type={'password'}
                value={password}
                onChangeHandler={changePassword}
            />
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