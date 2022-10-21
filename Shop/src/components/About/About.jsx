import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'
import {FaArrowLeft} from 'react-icons/fa'


const About = () => {
  return (
    <div className='about-container'>
      <div className="blank">
        <h3>About</h3>
        <h1>Wedding Store</h1>
      </div>

      <div className="details">
        <h3>Details coming soon.....</h3>
        <small>Stay Tuned</small>
      </div>
      

      <Link to='/collections' className='btn-container'>
        <span><FaArrowLeft /></span>
        <button className='back-home-btn'>Back Home</button>
      </Link>
    </div>
  )
}

export default About