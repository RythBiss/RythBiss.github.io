import React from 'react'
import { motion } from 'framer-motion'

export default function Card(props) {
  return (
    <motion.button onClick={props.onClick} className='card'
      whileHover={{
        scale: 1.05,
      }}
    >
        {props.image && 
        <div className='card-frame' >
          <img src={props.image} alt='image' className='card-image'/>  
        </div>}
        <div className='card-text'>
          <h4 >{props.text}</h4>
        </div>
    </motion.button>
  )
}
