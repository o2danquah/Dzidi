import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import background from "../assets/resturant1.jpg"
import PropTypes from "prop-types"

function Hero(props) {
  const [active, setAsActive] = useState(false)
   
  return (
    <div className="page-header vh-100">
  <span className="mask bg-gradient-dark opacity-5" />
  <div className="container1 d-flex align-items-center justify-content-center">
    <div className="" style={{opacity: "1"}}>
      <div className="d-flex text-center justify-content-center flex-column">
        <h1 className="text-white text-center">{props.heroTitle}</h1>
        <p className="text-white text-center opacity-8 lead">{props.heroCaption}</p>
        <div className="buttons text-align-center ">
          <button type="button" className={props.heroButton == null ? "none" : "heroButton btn"}>{props.heroButton}</button>
          {/* <button type="button" className="btn text-dark shadow-none mt-4">Read more</button> */}
        </div>
      </div>
    </div>
  </div>
</div>


  )
}
Hero.propTypes = {
  heroTitle: PropTypes.string,
  heroCaption: PropTypes.string,
  heroButton: PropTypes.string,
}

export default Hero