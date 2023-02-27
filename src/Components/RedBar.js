import React from 'react'
import Chevron from '../images/small-arrow-white.svg'
import { motion } from 'framer-motion'

export default function RedBar(props) {
  return (
    <motion.button className='red-bar'
    whileHover={{
      scale: 1.05
    }}

    onClick={props.onClick}
    >
        {props.icon &&
          <img src={props.icon} alt='icon' />        }
        <h2>{props.text}</h2>
        {props.clickable === true &&
          <img src={Chevron} alt='chevron' />
        }
    </motion.button>
  )
}
