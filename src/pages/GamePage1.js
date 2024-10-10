import React from 'react'
import background from '../assets/AlabayGames/AlabayGuardprevgradient.png'
import GamePageToggle from '../components/GamePageToggle'
const GamePage1 = () => {
  return (
    <div className='game-page-container'>
      {/* <img className='absolute w-full h-full' src={background} alt="" /> */}
      <div className='relative game-page-outer-box'>
        <div className='gamepage-headings'>
            <h1 className='gamepage-heading1'>ALABAY GUARDIAN</h1>
            <h2 className='gamepage-heading2'>SHEPHERD OF THE STEPPES</h2>
        </div>
        <div className='gamepage-descriptions'>
          <GamePageToggle/>
        </div>
      </div>
    </div>
  )
}

export default GamePage1
