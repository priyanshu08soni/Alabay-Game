import React from 'react'
import faded_1 from "../assets/faded_1.png"
import faded_2 from "../assets/faded_2.png"
import faded_3 from "../assets/faded_3.png"
import faded_4 from "../assets/faded_4.png"
const FadedCards = () => {
  return (
    <div className="card-container">
    <div className="card card-1">
      <div className="card-heading ">
        <h1>Community Building</h1>
        <h2>and Initial Launch</h2>
      </div>
      <img src={faded_1} alt="Card 1"/>
      <div className='overlay'></div>
    </div>
    <div className="card card-2">
      <div className="card-heading ">
        <h1>Merchandise</h1>
        <h2>Store Launch</h2>
      </div>
      <img src={faded_2} alt="Card 2"/>
      <div className='overlay'></div>
    </div>
    <div className="card card-3">
      <div className="card-heading ">
        <h1>Community Events</h1>
        <h2>and contests</h2>
      </div>
      <img src={faded_3} alt="Card 3"/>
      <div className='overlay'></div>
    </div>
    <div className="card card-4">
      <div className="card-heading ">
        <h1>Expansion and New</h1>
        <h2>Features</h2>
      </div>
      <img src={faded_4} alt="Card 4"/>
      <div className='overlay'></div>
    </div>
  </div>
  )
}

export default FadedCards
