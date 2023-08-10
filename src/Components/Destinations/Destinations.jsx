import React from 'react'
import "./Destinations.css"

// Import Icons
import { MdLocationPin } from "react-icons/md"
import { BsFillCreditCardFill } from "react-icons/bs"
import { BsFillCalendarDateFill } from "react-icons/bs"
import { BiSearchAlt } from "react-icons/bi"



function Destinations() {
  return (
    <div className='destination section container'>
      <div className="secContainer">

        <div className="">
          <span className="redText">Explore Now</span>
          <h3>Find Your Dream Destination</h3>
          <p>Fill in the fields below to find the best spot for your next tour</p>
        </div>

        <div className="searchField grid">

          <div className="inputField flex">
            <MdLocationPin className="icon"/>
            <input type="text" placeholder='Location'/>
          </div>

          <div className="inputField flex">
            <BsFillCreditCardFill className="icon"/>
            <input type="text" placeholder='Budget'/>
          </div>

          <div className="inputField flex">
            <BsFillCalendarDateFill className="icon"/>
            <input type="text" placeholder='Date'/>
          </div>

          <button className="btn flex"><BiSearchAlt className='icon'/>Search</button>

        </div>

      </div>
    </div>
  )
}

export default Destinations