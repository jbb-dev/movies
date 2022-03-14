import * as React from 'react';


interface InputProps {
    name?: string;
    label: string;
    type: string;
    value: string;
    action: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = (props : InputProps) => {
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