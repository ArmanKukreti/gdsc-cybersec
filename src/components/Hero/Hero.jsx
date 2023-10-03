import React from 'react';
import './Hero.css';
import heroImg from './images/gustafdesign_1695121978664-removebg-preview.png';
import bgGlow from './images/Ellipse 3.png';

export default function Hero() {
  return (
    <div class="hero-container">
        <div class="hero-text">
            <h1 class="hero-heading">Dive into the <br/> world of <br/>
                Cyber Security</h1>
            <h2 class="hero-subheading">Cybersecurity Carnival</h2>
            <p class="hero-paragraph">Learn the Cyber Security with The Google ,<br/> Amazon Web Service And the <br/>Cyber Security Enthusiast..</p>
            <a href="/" class="hero-button">Learn More</a>
        </div>
        <div class="hero-image">
            <img id="hero-pg-elipse" src={bgGlow} alt=""/>
            <img src={heroImg} alt="Hero"/>
        </div>
    </div>
  )
}
