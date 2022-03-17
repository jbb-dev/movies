import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAuth } from '../shared/auth';
import Button from '../shared/Button';
import Input from './Input'
import styled from 'styled-components';
import Axios from 'axios';
import { GlobalContext, IContext } from '../Context/Context';
import { token } from '../Profile/Profile';
import { ENDPOINT } from '../shared/api';

const Container = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;
interface LoginProps {
    isAuth: boolean;
    setIsAuth: (state : boolean) => void;
}

export const config = 
{
    headers: 
    { 
        Authorization: `Bearer ${token}` 
    }
};

const Login: React.FC<LoginProps> = (props : LoginProps) => {

    const { store, setStore } = React.useContext(GlobalContext) as IContext;

    let navigate = useNavigate();

    const [userLogged, setUserLogged] = React.useState({
        email: '',
        password: ''
    });
    
    const [err, setErr] = React.useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const key = event.target.name;
        const value = event.target.value;
        setUserLogged({...userLogged, [key] : value});
    };

    const getMyProfile = () => {
        Axios
        .get(`${ENDPOINT}/api/users/profile`, config)
        .then(res => setStore({...store, user: res.data}))
        .catch(err => console.log(err))
    };

    const login = () => {
        Axios
        .post('https://api-ri7.herokuapp.com/api/users/login', userLogged)
        .then(res => {
            if (res.data?.token != null)
            {
                const token = res.data.token;
                sessionStorage.setItem('token', token);
                props.setIsAuth(true);
                getMyProfile();
            }
        })
        .catch(err => setErr('Erreur, veuillez rééssayer'))
    };

    const formIsNotEmpty = userLogged.email.length > 0 && userLogged.password.length > 0;

    React.useEffect(() => {
        console.log("useEffect Login Page")
        if (props.isAuth && store.user != null)
        {
            navigate('/movies');
        };
    }, [props.isAuth, store.user])

    return (
        <Container>
            <div>
            <p>{err}</p>
                <Input 
                        name='email'
                        label='Email' 
                        value={userLogged.email}
                        action={handleChange} 
                        type='text'
                />
                <Input 
                        name='password'
                        label='Password' 
                        value={userLogged.password}
                        action={handleChange} 
                        type='password'      
                />
                <Button 
                    label='Se connecter' 
                    click={login} 
                    active={formIsNotEmpty}
                />
            </div>
        </Container>
    )
};

export default Login;