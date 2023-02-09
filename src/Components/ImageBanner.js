import React from 'react'
import Hexs from '../images/hex-row.svg'

export default function ImageBanner(props) {
  return (
    <div className='image-banner'>
        <img src={props.image} alt='home-background'/>
        <div className='image-overlay'>
        <h3>{props.smallText}</h3>
        <h1>{props.bigText}</h1>
        {props.buttonText !== undefined && <button className='red-button'>{props.buttonText}</button>}
        <img src={Hexs} alt='hex art'></img>
        </div>
    </div>
  )
}
