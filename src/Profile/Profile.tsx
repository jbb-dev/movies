import * as React from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import Button from '../shared/Button';
import { Audio as Loader} from  'react-loader-spinner'
import Input from '../Register/Input';

const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`;

const UserProfile = styled.div`
width: 400px;
border: 1px solid white;
justify-content: center;
display: flex;
flex-direction: column;
align-items: center;
`;

const token = sessionStorage.getItem('token');

interface IUser {
    avatar: string | null;
    biography: string | null;
    birthdate: Date | null;
    city: string;
    email: string;
    firstname: string;
    id: number;
    lastname: string;
    postalCode: string;
}

const Profile = () => {

    const [user, setUser] = React.useState<IUser | null>(null);
    const [isUpdating, setIsUpdating] = React.useState<boolean>(false);

    const config = {
        headers: { 
            Authorization: `Bearer ${token}` 
        }
    };

    const getMyProfile = () => {
        Axios
        .get('https://api-ri7.herokuapp.com/api/users/profile', config)
        .then(res => setUser(res.data))
        .catch(err => console.log(err))
    };

    const updateProfile = () => {
        if (isUpdating)
        {
            console.log('je veux enregistrer les modifications mon profil');
            Axios
            .put('https://api-ri7.herokuapp.com/api/users/profile', user, config)
            .then(res => console.log("UPDATE RESPONSE = ", res))
            .catch(err => console.log('error => ', err))
        }
        setIsUpdating(!isUpdating);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (user != null)
        {
            const key = event.target.name;
            const value = event.target.value;
            setUser({...user, [key] : value});
        };
    };

    React.useEffect(() => {
        getMyProfile();
    }, []);

    return (

        <Container>
            { user != null ?
                <>
                    { isUpdating ? 
                        <>
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
                            <textarea
                                name='biography' 
                                rows={5}
                                cols={20}
                            >
                                {user.biography}
                            </textarea>
                        </>
                    :
                        <UserProfile>
                            <img 
                                src={user.avatar != null ? user.avatar : ''} 
                                alt='avatar' 
                            />
                            <p>{user.lastname}</p>
                            <p>{user.firstname}</p>
                            <p>{user.email}</p>
                            <p>{user.postalCode}</p>
                            <p>{user.city}</p>
                            <p>{user.biography}</p>
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