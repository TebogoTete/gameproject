import React from 'react'
import '../../styles/hero.css'

 import darkImg from '../../images/console-dark.png'
 import lightImg from '../../images/console-light.png'

 const Hero = ({theme}) => {
    return <section className='hero_section' id='home'>
      <div className="container">
          <div className="hero_wrapper">
              <div className="hero_img">
                  <img src={theme==='light-theme' ? lightImg : darkImg} alt="hero-img" />
              </div>
          </div>
          <div className="hero_content">
                  <div>
                  <h2>Your One-Stop</h2>
                  <h2>Video Game </h2>
                  <h2 className='highlights'>Centre</h2>
                  </div>
              </div> 
      </div>
    </section>
  }
  
  export default Hero