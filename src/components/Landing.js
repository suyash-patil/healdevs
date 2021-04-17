import React from 'react';
import './landing.css';
import Navbar from './Navbar';
import { Wave } from 'react-animated-text';


const Landing = () => {
    return (
        <div>
            <div class="landing-home" style={{ backgroundImage: '../images/img1.jpg' }}>
                <div class="container">
                    <div class="first-content">
                        <Wave text="Mental Therapay Space" 
                        effect="fadeOut"
                        effectDuration="8"
                        style={{color: "red"}}/>
                        <span><em>By</em> HealDevs</span>
                        <a class="fa fa-angle-down page-scroll" href="#about"></a>
                        <Navbar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
