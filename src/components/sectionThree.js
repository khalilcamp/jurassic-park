import React from 'react';
import './sectionThree.css';
import ingenLogo from './assets/images/ingenlogo.png'
import jurasLogo from './assets/images/jurassic-park-2-logo-png-transparent.png'
import worldLogo from './assets/images/jurassic-world-logo-EA7977625D-seeklogo.com (1).png'

function SectionThree() {
  return (
    <div className="sectionThree">
        <div className="sectionThree-container">
        <div className="sectionThree-text"><h2>Nossos projetos e parceiros!</h2></div>
            <div class="slider">
            <div class="slide-track">
            <div class="slide">
                <img src={ingenLogo} height="100" width="100" alt="" />
            </div>
            <div class="slide">
                <img src={jurasLogo} height="120" width="120" alt="" />
            </div>
            <div class="slide">
                <img src={worldLogo} height="100" width="100" alt="" />
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SectionThree
