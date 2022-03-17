import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;
width: 300px;
`;

const StyledInput = styled.input`
height: 40px;
`;

const Label = styled.label`
margin-bottom: 5px;
`;

interface InputProps {
    name?: string;
    label: string;
    type: string;
    value: string | null;
    action: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = (props : InputProps) => {
  return (
    <Container>
        <Label>
            {props.label}
        </Label>
        <StyledInput
            type={props.type}
            placeholder={props.label}
            name={props.name}
            value={props.value != null ? props.value : ''}
            onChange={event => props.action(event)}
        />
    </Container>
  )
}


interface InputDateProps {
    name?: string;
    label: string;
    value: string;
    action: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputDate: React.FC<InputDateProps> = (props : InputDateProps) => {
    return (
      <Container>
          <Label>
              {props.label}
          </Label>
          <input
              type='date'
              placeholder={props.label}
              name={props.name}
              value={props.value}
              onChange={event => props.action(event)}
          />
      </Container>
    )
  }

export default Input;