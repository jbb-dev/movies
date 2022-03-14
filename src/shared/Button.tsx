import * as React from 'react';
import './button.css'

interface ButtonProps {
    label: string;
    click: () => void;
    active: boolean;
}

const Button: React.FC<ButtonProps> = (props : ButtonProps) => {

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