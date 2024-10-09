import React from 'react'
import background from '../assets/Alabay Games/Alabay heritage prev gradient.png'
import GamePageToggle from '../components/GamePageToggle'
const GamePage2 = () => {
  return (
    <div>
      <img className='absolute w-full h-full' src={background} alt="" />
      <div className='relative'>
        <div className='gamepage-headings'>
            <h1 className='gamepage-heading1'>ALABAY HERITAGE</h1>
            <h2 className='gamepage-heading2'>THE LOST ADVENTURE</h2>
        </div>
        <GamePageToggle/>
      </div>
    </div>
  )
}

export default GamePage2
