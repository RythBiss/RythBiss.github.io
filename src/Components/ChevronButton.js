import React from 'react'
import ChevronWhite from '../images/small-arrow-white.svg'
import ChevronBlack from '../images/small-arrow-black.svg'

export default function ChevronButton(props) {
  return (
    <button onClick={props.onClick} className={`${props.isWhite === true ? 'white-button' : 'red-button' }`} >
        {props.text}
        <img src={props.isWhite === true ? ChevronBlack : ChevronWhite} alt='chevron' />        
    </button>
  )
}
