import React from 'react'
import './button.css'

const Button = (props) => {

  return (
    <button 
        onClick={props.click}
        // onClick={() => console.log('active = ', props.active)}
        className={props.active ? 'active' : 'passive'}
        // style={{border: 'none', backgroundColor: 'green', color: 'white'}}
    >
        {props.label}
    </button>
  )
}

export default Button;