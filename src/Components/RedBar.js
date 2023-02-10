import React from 'react'
import Chevron from '../images/small-arrow-white.svg'

export default function RedBar(props) {
  return (
    <div className='red-bar'>
        <img src={props.icon} alt='icon' />
        <h2>{props.text}</h2>
        <img src={Chevron} alt='chevron' />
    </div>
  )
}
