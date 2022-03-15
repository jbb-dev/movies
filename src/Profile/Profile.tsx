import * as React from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import Button from '../shared/Button';
import { Audio } from  'react-loader-spinner'

const Container = styled.div`
height: 100vh;
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

    const getMyProfile = () => {
        const config = {
            headers: { 
                Authorization: `Bearer ${token}` 
            }
        };
        Axios
        .get('https://api-ri7.herokuapp.com/api/users/profile', config)
        .then(res => setUser(res.data))
        .catch(err => console.log(err))
    };

    React.useEffect(() => {
        console.log("useEffect Profile")
        getMyProfile();
    }, []);

    return (

        <Container>
            <Button 
                label='profil'
                click={() => console.log(user)}
                active={true}
            />
            { user != null ?
                <>
                    <p>Nom: {user.lastname}</p>
                    <p>Prénom : {user.firstname}</p>
                    <p>Ville : {user.city}</p>
                </>
            : 

            <Audio
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