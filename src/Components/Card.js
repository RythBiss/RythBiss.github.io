import React from 'react'

export default function Card(props) {
  return (
    <button onClick={props.onClick} className='card'>
        {props.image && 
        <div className='card-frame' >
          <img src={props.image} alt='image' className='card-image'/>  
        </div>}
        <h4 className='card-text'>{props.text}</h4>
    </button>
  )
}
