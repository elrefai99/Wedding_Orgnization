import React from 'react'
import { Link } from 'react-router-dom'
import '../About/about.css'
import {FaArrowLeft} from 'react-icons/fa'
const Contact = () => {
  return (
    <div className='about-container'>
    <div className="blank">
      <h3>Contact</h3>
      <h1>Developer</h1>
    </div>

    <div className="details">
      <h3>Page not available right now.....</h3>
      <small>please check back later</small>
    </div>
    

    <Link to='/collections' className='btn-container'>
      <span><FaArrowLeft /></span>
      <button className='back-home-btn'>Back Home</button>
    </Link>
  </div>
  )
}

export default Contact