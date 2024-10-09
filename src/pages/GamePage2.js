import React from 'react'
import background from '../assets/Alabay Games/Alabay heritage prev gradient.png'
import GamePageToggle2 from '../components/GamePageToggle2'
const GamePage2 = () => {
  return (
    <div>
      <img className='absolute w-full h-full' src={background} alt="" />
      <div className='relative game-page-outer-box'>
        <div className='gamepage2-headings'>
            <h1 className='gamepage2-heading1'>ALABAY HERITAGE</h1>
            <h2 className='gamepage2-heading2'>THE LOST ADVENTURE</h2>
        </div>
        <div className='gamepage-descriptions'>
          <GamePageToggle2/>
        </div>
      </div>
    </div>
  )
}

export default GamePage2
