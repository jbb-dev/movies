import React, { useState } from 'react'
import Button from '../shared/Button';
import Modal from '../shared/Modal';
import Input from './Input';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        civility: '',
        name : '',
        firstName: '',
        city: '',
        postalCode: '',
        birthDate: '',
        email: '',
    });

    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);

    const navigateToMovies = () => navigate('/movies');

    const handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        setUser({...user, [key] : value});
    };

    return (
        <div style={{display: 'flex', flexDirection:'column', alignItems:'center', justifyContent: "center", border: '1px solid white', minWidth: '40vw', marginBottom:'40px', height:'70vh'}}>
            { showModal ? 
                <Modal 
                    data={user}
                    closeModal={closeModal}
                    validateModal={navigateToMovies} 
                />
            : 
                <div>
                    <h3>Please create your account</h3>
                    <div>
                        <div style={{display: 'flex', width: '300px'}}>
                            <Input 
                                label='Homme'  
                                type='radio'
                                name="civility" 
                                value="Homme"
                                action={(e) => handleChange(e)} 
                            />
                            <Input 
                                label='Femme'  
                                type='radio'
                                name="civility" 
                                value="Femme"
                                action={(e) => handleChange(e)} 
                            />
                        </div>
                    </div>
                    <Input  
                        label='Nom'  
                        value={user.name}  
                        // action={(e) => setUser({...user, name: e.target.value})} 
                        action={(e) => handleChange(e)} 
                        name='name'
                        type='text'
                    />
                    <Input 
                        label='Prénom' 
                        value={user.firstName}
                        action={(e) => handleChange(e)} 
                        name='firstName'
                        type='text'
                    />
                    <Input 
                        label='Email' 
                        value={user.email}
                        action={(e) => handleChange(e)} 
                        name='email'
                        type='email'
                    />
                    <Input 
                        label='Ville' 
                        value={user.city}
                        action={(e) => handleChange(e)} 
                        name='city'
                        type='text'
                    />
                    <Input 
                        label='Code postal' 
                        value={user.postalCode}
                        action={(e) => handleChange(e)} 
                        name='postalCode'
                        type='text'
                    />
                    <Input 
                        label='Date de naissance' 
                        value={user.postalCode}
                        action={(e) => handleChange(e)} 
                        name='birthDate'
                        type='date'
                    />
                    <Button 
                        label={'Valider'} 
                        click={() => setShowModal(true)}
                        active={user.name.length > 0}    
                    />
                </div>
            }
        </div>

    )
};

export default Register;