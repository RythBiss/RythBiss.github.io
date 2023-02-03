import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
        <img src={props.image} alt='image' className='card-image'/>
        <h4 className='card-text'>{props.text}</h4>
    </div>
  )
}
