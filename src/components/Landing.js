import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';
import Navbar from './Navbar';
import { Wave } from 'react-animated-text';
import PatientForm from './PatientForm';
import Quote from './quotes';


const Landing = ({ history, user, setUser }) => {
    return (
        <div>
            <div class="landing-home" style={{ backgroundImage: '../images/img1.jpg' }}>
                <div class="container">
                    <div class="first-content">
                        <h1>Mental Therapy Space</h1>
                        <span><em>By</em> HealDevs</span>
                        <a class="fa fa-angle-down page-scroll" href="#about"></a>
                        <Navbar />
                    </div>
                    <Quote />
                </div>
            </div>
            <div class="graph-card">
                <div className="flourish-embed flourish-chart card" data-src="visualisation/5875049"></div>
            </div>
        </div>
    )
}
export default Landing
