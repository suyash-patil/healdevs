// this is navbar
import React from 'react'
import Login from '../auth/Login'
import './navbar.css'
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="button">
            <Link to='/login' className="Login">
                Start
            </Link>
        </div>
    )
}

export default Navbar
