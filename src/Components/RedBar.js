import React from 'react'
import Chevron from '../images/small-arrow-white.svg'

export default function RedBar(props) {
  return (
    <div className='red-bar'>
        {props.icon &&
          <img src={props.icon} alt='icon' />        }
        <h2>{props.text}</h2>
        {props.clickable === true &&
          <img src={Chevron} alt='chevron' />
        }
    </div>
  )
}
