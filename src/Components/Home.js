import React from 'react'
import Background from '../images/concrete-1.jpg'
import Hexs from '../images/Hexs.svg'

export default function Home() {
  return (
    <main>
      <div className='image-banner'>
        <img src={Background} alt='home-background'/>
        <div className='image-overlay'>
          <h3>American Made, Rental Tough</h3>
          <h1>Your source for high quality equipment</h1>
          <img src={Hexs} alt='hex art'></img>
        </div>
      </div>
      <div id='products-div'>
        <div id='appfinder-quicklink'>
          <h2>Try our application solver tool</h2>
          <button>but</button>
        </div>
      </div>
    </main>
  )
}
