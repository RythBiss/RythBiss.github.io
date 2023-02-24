import React from 'react'
import { motion } from 'framer-motion'


export default function AnimatedButton(props) {
  return (
    <motion.button className={props.className} onClick={props.onClick}
    whileHover={{
        opacity: '0.8',
      }}
    >
        {props.text !== undefined &&
          props.text
        }
        {props.image !== undefined &&
        <img src={props.image} />
        }
    </motion.button>
  )
}
