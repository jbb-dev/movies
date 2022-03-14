import * as React from 'react';
import Button from '../shared/Button';
import Modal from '../shared/Modal';
import Input from './Input';
import { useNavigate } from 'react-router-dom';

interface IUser {
    civility: string;
    name: string;
    firstName: string;
    city: string;
    postalCode: string;
    birthDate: Date | string;
    email: string;
}


const Register : React.FC = () => {

    let navigate = useNavigate();

    const [user, setUser] = React.useState<IUser>({
        civility: '',
        name : '',
        firstName: '',
        city: '',
        postalCode: '',
        birthDate: '',
        email: '',
    });

    const [showModal, setShowModal] = React.useState(false);

    const closeModal = () => setShowModal(false);

    const navigateToMovies = () => navigate('/movies');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                                action={handleChange} 
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
                        action={handleChange} 
                        name='name'
                        type='text'
                    />
                    <Input 
                        label='Prénom' 
                        value={user.firstName}
                        action={handleChange} 
                        name='firstName'
                        type='text'
                    />
                    <Input 
                        label='Email' 
                        value={user.email}
                        action={handleChange} 
                        name='email'
                        type='email'
                    />
                    <Input 
                        label='Ville' 
                        value={user.city}
                        action={handleChange} 
                        name='city'
                        type='text'
                    />
                    <Input 
                        label='Code postal' 
                        value={user.postalCode}
                        action={handleChange} 
                        name='postalCode'
                        type='text'
                    />
                    <Input 
                        label='Date de naissance' 
                        value={user.postalCode}
                        action={handleChange} 
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