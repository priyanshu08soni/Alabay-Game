import React from 'react'
import money from "../assets/money.png"
const Tokenomics = () => {
  return (
    <div className='tokenomics'>
      <h1 className="token-head mx-32">
        TOKENOMICS
      </h1>
      <div className='tokenomics-all'>
        <div className='tokens w-50'>
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
        <div className='w-50 px-5'>
            <img src={money} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Tokenomics
