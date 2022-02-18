import React from 'react'

const Input = (props) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px', width: '300px'}}>
        <label htmlFor={props.name} style={{marginBottom: '5px'}}>
            {props.label}
        </label>
        <input 
            type={props.type}
            placeholder={props.label}
            name={props.name}
            value={props.value}
            onChange={event => props.action(event)}
        />
    </div>
  )
}

export default Input;