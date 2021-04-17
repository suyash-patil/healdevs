import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';
import Navbar from './Navbar';


const Landing = ({ history, user, setUser }) => {
    return (
        <div>
            <div class="landing-home" style={{ backgroundImage: '../images/img1.jpg' }}>
                <div class="container">
                    <div class="first-content">
                        <h1>Mental Therapay Space</h1>
                        <span><em>By</em> HealDevs</span>
                        <a class="fa fa-angle-down page-scroll" href="#about"></a>
                        <Navbar />
                    </div>
                </div>
            </div>
            <Link to="/patient">Fill the form</Link>
        </div>
    )
}

export default Landing
