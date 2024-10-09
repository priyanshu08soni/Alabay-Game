import React from 'react'
import money from "../assets/money.png"
import moneyMask from '../assets/Mask/moneymask.png'
const Tokenomics = () => {
  return (
    <div className='tokenomics'>
      <h1 className="token-head">
        TOKENOMICS
      </h1>
      <div className='tokenomics-all'>
        <div className='tokens'>
            <div className='token'>
                <h2>LIQUIDITY</h2>
                <h1>LOCKED</h1>
            </div>
            <div className='token'>
                <h2>CONTRACT</h2>
                <h1>RENOUNCED</h1>
            </div>
            <div className='token'>
                <h2>TAXES</h2>
                <h1>0%</h1>
            </div>
        </div>
        <div className='moneyImage px-5'>
            <img src={money} alt="money" />
            <img className='moneymask' src={moneyMask} alt="moneyMask" />
        </div>
      </div>
    </div>
  )
}

export default Tokenomics
