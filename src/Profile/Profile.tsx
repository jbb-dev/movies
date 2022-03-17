import * as React from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import Button from '../shared/Button';
import { Audio as Loader} from  'react-loader-spinner'
import Input from '../Register/Input';
import { ENDPOINT } from '../shared/api';
import { GlobalContext, IContext } from '../Context/Context';
import { IUser } from '../interface/IUser';

interface ContainerProps {
    light: boolean;
}

const Container = styled.div<ContainerProps>`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: ${props => props.light ? 'wheat' : '#434240'}
`;

const UserProfile = styled.div`
width: 400px;
border: 1px solid white;
justify-content: center;
display: flex;
flex-direction: column;
align-items: center;
`;

const Avatar = styled.img`
width: 150px;
height: 150px;
border-radius: 50%;
`;

export const token = sessionStorage.getItem('token');

const Profile = () => {


    const { store, setStore } = React.useContext(GlobalContext) as IContext;

    const [isUpdating, setIsUpdating] = React.useState<boolean>(false);

    const config = {
        headers: { 
            Authorization: `Bearer ${token}` 
        }
    };

    const updateProfile = () => {
        if (isUpdating)
        {
            Axios
            .put(`${ENDPOINT}/api/users/profile`, store.user, config)
            // .then(res => setUser(res.data))
            // .catch(err => console.log('error => ', err))
        }
        setIsUpdating(!isUpdating);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (store.user != null)
        {
            const key = event.target.name;
            const value = event.target.value;
            // setStore({...store, [key] : value});
        };
    };

    return (

        <Container light={store.theme == 'light'}>
            { store.user != null ?
                <>
                    { isUpdating ? 
                        <>
                            <Input  
                                label='Nom*'  
                                value={store.user.lastname}  
                                action={handleChange} 
                                name='lastname'
                                type='text'
                            />
                            <Input 
                                label='Prénom*' 
                                value={store.user.firstname}
                                action={handleChange} 
                                name='firstname'
                                type='text'
                            />
                                <Input 
                                    label='Photo' 
                                    value={store.user.avatar}
                                    action={handleChange} 
                                    name='avatar'
                                    type='text'
                                />
                            <textarea
                                name='biography' 
                                rows={5}
                                cols={20}
                            >
                                {store.user.biography}
                            </textarea>
                        </>
                    :
                        <UserProfile>
                            <Avatar 
                                src={store.user.avatar} 
                                alt='avatar' 
                            />
                            <p>{store.user.lastname}</p>
                            <p>{store.user.firstname}</p>
                            <p>{store.user.email}</p>
                            <p>{store.user.postalCode}</p>
                            <p>{store.user.city}</p>
                            <p>{store.user.biography}</p>
                            {/* <p>{value.theme}</p> */}
                        </UserProfile>
                    }
                    <Button 
                        label={isUpdating ? 'Enregistrer' : 'Modifier'}
                        active={true}
                        click={updateProfile}
                    />
                </>
            : 
                <Loader
                    height="100"
                    width="100"
                    color='grey'
                    ariaLabel='loading'
                />
            }
        </Container>
    )
}

export default Profile