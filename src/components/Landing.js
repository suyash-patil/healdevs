import React from 'react';
import './landing.css';
import Navbar from './Navbar';


const Landing = () => {
    return (
        <div>
            <div class="landing-home" style={{ backgroundImage: '../image/home.webp' }}>
                <div class="container">
                    <div class="first-content">
                        <h1>HEALDEVS</h1>
                        <span><em>By</em> HealDevs</span>
                        <a class="fa fa-angle-down page-scroll" href="#about"></a>
                    </div>
                </div>
            </div>

            <Navbar />
            <h2>This is Landing

            </h2>
        </div>
    )
}

export default Landing
