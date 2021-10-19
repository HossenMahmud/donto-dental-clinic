import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Register.css';
const Register = () => {
    const { handleUserRegister, error, handleGoogleLogin, handleGithubLogin } = useFirebase();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const hanldeName = (e) => {
        setName(e.target.value);
    };
    const hanldeEmail = (e) => {
        setEmail(e.target.value);
    };
    const hanldePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleRegister = () => {
        handleUserRegister(email, password, name);
    };

    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-5 col-sm-12 col-md-12 col-12 mx-auto">
                        <div className='form'>
                            <div className='text-center register-title py-1'>
                                <h2>Register</h2>
                            </div>
                            <h3>{error}</h3>
                            <div className='px-3 py-2'>
                                <label>Name</label>
                                <input onChange={hanldeName} type="text" id="lname" placeholder="Your Name" />
                                <label>Email</label>
                                <input onChange={hanldeEmail} type="email" id="lname" placeholder="Your Email" />
                                <label>Password</label>
                                <input onChange={hanldePassword} type="password" id="lname" placeholder="Password" />
                                <input onClick={handleRegister} type="submit" value="Submit" />
                            </div>
                            <div className='px-3 py-2 text-center'>
                                <span>If Already Registered Please </span><Link to='/login'>Login</Link>
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

export default Register;