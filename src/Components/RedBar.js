import React from 'react'

export default function RedBar(props) {
  return (
    <div className='red-bar'>
        <img src={props.icon} alt='icon' />
        <h2>{props.text}</h2>
    </div>
  )
}
