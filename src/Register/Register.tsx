import * as React from 'react';
import Button from '../shared/Button';
import Modal from '../shared/Modal';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Axios from 'axios';
import { IUser } from '../interface/IUser';

const Container = styled.div`
display: flex; 
flex-direction: column; 
align-items: center; 
justify-content: center; 
border: 1px solid white; 
min-width: 40vw; 
margin-bottom:40px;
height: 100vh;
`
;

const Register : React.FC = () => {

    let navigate = useNavigate();

    const [user, setUser] = React.useState<IUser>({
        lastname : '',
        firstname: '',
        city: '',
        postalCode: '',
        birthdate: null,
        email: '',
        password: '',
        biography: '',
        avatar: ''
    });

    const [error, setError] = React.useState<string | null>(null)

    const [showModal, setShowModal] = React.useState(false);

    const closeModal = () => setShowModal(false);

    const navigateToMovies = () => navigate('/movies');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const key = event.target.name;
        const value = event.target.value;
        setUser({...user, [key] : value});
    };

    const register = () => {
        Axios
        .post('https://api-ri7.herokuapp.com/api/users/register', user)
        .then(res => 
            {
                if (res.status == 200)
                {
                    navigate('/')
                }
            }
        )
        .catch(err => setError('Une erreur est survenue, merci de réessayer'))

    }

    return (
        <Container>
            { showModal ? 
                <Modal 
                    data={user}
                    closeModal={closeModal}
                    validateModal={navigateToMovies} 
                />
            : 
                <div>
                    <h3>Please create your account</h3>
                    {error != null &&
                        <p>{error}</p>
                    }
                    <Input  
                        label='Nom*'  
                        value={user.lastname}  
                        action={handleChange} 
                        name='lastname'
                        type='text'
                    />
                    <Input 
                        label='Prénom*' 
                        value={user.firstname}
                        action={handleChange} 
                        name='firstname'
                        type='text'
                    />
                    <Input 
                        label='Email*' 
                        value={user.email}
                        action={handleChange} 
                        name='email'
                        type='email'
                    />
                    <Input 
                        label='Password*' 
                        value={user.password != null ? user.password : ''}
                        action={handleChange} 
                        name='password'
                        type='password'
                    />
                    <Input 
                        label='Ville*' 
                        value={user.city}
                        action={handleChange} 
                        name='city'
                        type='text'
                    />
                    <Input 
                        label='Code postal*' 
                        value={user.postalCode}
                        action={handleChange} 
                        name='postalCode'
                        type='text'
                    />
                    {/* <Input 
                        label='Date de naissance' 
                        value={user.birthdate}
                        action={handleChange} 
                        name='birthdate'
                        type='date'
                    /> */}
                    <Input 
                        label='Biographie' 
                        value={user.biography}
                        action={handleChange} 
                        name='biography'
                        type='text-area'
                    />
                    <Button 
                        label={"S'inscrire"} 
                        click={register}
                        active={user.lastname.length > 0}    
                    />
                </div>
            }
        </Container>
    )
};

export default Register;