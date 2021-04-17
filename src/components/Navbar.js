// this is navbar
import React from 'react'
import Login from '../auth/Login'
import './navbar.css'
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <h2>This is navbar</h2>
            <Link to='/login'>
                Login
            </Link>
        </div>
    )
}

export default Navbar
