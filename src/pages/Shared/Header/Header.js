import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
// import useFirebase from '../../../Hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { handleLogout, user } = useAuth()
    return (
        <div className='nb-bg'>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="d-flex text-white">
                            <h3>DONTO..</h3>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ms-auto">
                                <Link to="/home" className="nav-link text-white">Home</Link>
                                <Link to="/doctors" className="nav-link text-white">Doctors</Link>
                                <Link to="/blog" className="nav-link text-white">Blogs</Link>
                                {
                                    user?.email ? <span className='mt-2 text-warning'> {user.displayName} </span> : (<span></span>)
                                }
                                {
                                    user?.email ? (<button className='logoutBtn' onClick={handleLogout}>LogOut</button>) :
                                        <Link to="/login" className="nav-link text-white">login</Link>
                                }
                                <Link to="/register" className="nav-link text-white">Register</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;