import React from 'react'
import '../styles/about.css'
import logo from '../assets/logo.mp4'

const About = () => {
  return (
    <div className='container'>
      <div className='main'>
      <h2>About Us</h2>
      <div className='about-container'>
        <p>Our story started just about 200 years back when Cyrus and James made a shoe from sheepskin off-cuts. At the time it was notable; a mix of development and craftsmanship that is stayed at the core of what we do.</p>
        <p>Furthermore, while now, as usual, each match of our shoes starts with a last cut by hand from a solitary square of hornbeam, propelled development strategies, innovations and contemporary materials enable us to convey flawlessness customized for the cutting edge world.
        </p>
      <video src={logo} autoPlay loop muted/> 
 
      </div>
    </div>
    </div>
  )
}

export default About