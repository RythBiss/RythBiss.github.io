import React from 'react'
import ChevronWhite from '../images/small-arrow-white.svg'
import ChevronBlack from '../images/small-arrow-black.svg'
import { motion } from 'framer-motion'


export default function ChevronButton(props) {
  return (
    <motion.button onClick={props.onClick} className={`${props.isWhite === true ? 'white-button' : 'red-button' }`}
    whileHover={{
      opacity: '0.8',
      transition: { duration: 1 }
    }}
    >
        {props.text}
        <img src={props.isWhite === true ? ChevronBlack : ChevronWhite} alt='chevron' />        
    </motion.button>
  )
}
