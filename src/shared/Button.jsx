import React from 'react'
import './button.css'

const Button = (props) => {

  return (
    <button 
        onClick={props.click}
        className={props.active ? 'active' : 'passive'}
    >
        {props.label}
    </button>
  )
}

export default Button;