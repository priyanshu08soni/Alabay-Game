import React from 'react'
import background from '../assets/Alabay Games/Alabay Guard prev gradient.png'
import GamePageToggle from '../components/GamePageToggle'
const GamePage1 = () => {
  return (
    <div>
      <img className='absolute w-full h-full' src={background} alt="" />
      <div className='relative game-page-outer-box'>
        <div className='gamepage-headings'>
            <h1 className='gamepage-heading1'>ALABAY GUARDIAN</h1>
            <h2 className='gamepage-heading2'>SHEPHERD OF THE STEPPES</h2>
        </div>
        <GamePageToggle/>
      </div>
    </div>
  )
}

export default GamePage1
