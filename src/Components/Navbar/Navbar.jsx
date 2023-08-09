import React, { useState } from 'react'
import "./Navbar.css"


// Imported Icons
import { BiLogoMediumOld } from 'react-icons/bi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { PiDotsNineBold } from 'react-icons/pi'


const Navbar = () => {

  // State to track Update navbar
  const [navBar, setNavbar] = useState("menu");

  // Function to show Navbar
  const showNavbar = () =>{
    setNavbar("menu showNavbar");
  }

  const removeNavbar = () =>{
    setNavbar("menu");
  }




  return (
    <div className='navBar'>

      <div className='logoDiv'>
        <BiLogoMediumOld className="icon"/>
        <span>IBS-Trips</span>
      </div>

      <div className={navBar}>
        <ul>
          <li className="navList">Destination</li>
          <li className="navList">About Us</li>
          <li className="navList">Testimonial</li>
          <li className="navList">Gallery</li>
        </ul>

        {/* Icon to Remove Navbar */}
        <AiFillCloseCircle className="icon closeIcon" onClick={removeNavbar}/>
      </div>
      <button className="signUpBtn btn">Sign Up</button>
      {/* Icon to Toggle Navbar */}
      <PiDotsNineBold className="icon menuIcon" onClick={showNavbar}/>
    </div>
  )
}

export default Navbar