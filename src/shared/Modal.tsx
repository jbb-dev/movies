import * as React from 'react';
import Button from './Button';
import './modal.css';

type ModalProps = {
    data: any;
    closeModal: () => void;
    validateModal: () => void;
}

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <div className='container-modal'>
        <div className='body-modal'>
            <p>{props.data.firstName}</p>
            <p>{props.data.name}</p>
            <p>{props.data.city}</p>
            <p>{props.data.postalCode}</p>
            <p>{props.data.birthdate}</p>
            {/* <Button 
                label={'Close'} 
                click={props.closeModal}    
            />
            <Button 
                label={'Validate'} 
                click={props.validateModal}    
            /> */}
        </div>
    </div>
  )
}

export default Modal;