import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
const Login = () => {
    const { handleUserLogin, handleGoogleLogin, handleGithubLogin } = useFirebase();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const hanldeEmail = (e) => {
        setEmail(e.target.value);
    };
    const hanldePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleLogin = () => {
        handleUserLogin(email, password);
    };

    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-5 col-sm-12 col-md-12 col-12 mx-auto">
                        <div className='form'>
                            <div className='text-center register-title py-1'>
                                <h2>Login</h2>
                            </div>
                            <div className='p-3'>
                                <label>Email</label>
                                <input onChange={hanldeEmail} type="email" id="lname" placeholder="Your Email" />
                                <label>Password</label>
                                <input onChange={hanldePassword} type="password" id="lname" placeholder="Password" />
                                <input onClick={handleLogin} type="submit" value="Submit" />
                            </div>
                            <div className='px-3 py-2 text-center'>
                                <span>If Are NOt Registered Please </span><Link to='/register'>Register</Link>
                            </div>
                            <div className='p-3 text-center'>
                                <h5 className='loginBtn-title'>Login With:</h5>
                                <button className='loginBtn' onClick={handleGoogleLogin}>Google</button>
                                <button className='loginBtn' onClick={handleGithubLogin}>GitHub</button>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </div >
    );
};

export default Login;