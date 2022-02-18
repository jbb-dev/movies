import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { checkAuth } from '../shared/auth';
import Button from '../shared/Button';
import Input from './Input'

const Login = (props) => {

    let navigate = useNavigate();

    const [userLogged, setUserLogged] = useState({
        login: '',
        password: ''
    });

    const login = () => {
        const valid = () => props.setIsAuth(true);
        checkAuth(userLogged.login, userLogged.password, valid);
    };

    const formIsNotEmpty = userLogged.login.length > 0 && userLogged.password.length > 0;

    useEffect(() => {
        console.log("useEffect Login Page")
        if (props.isAuth)
        {
            navigate('/movies');
        };
    }, [props.isAuth])

    return (
        <div>
            <>
                <Input 
                    label='Login' 
                    value={userLogged.login}
                    action={(e) => setUserLogged({...userLogged, login : e.target.value})} 
                    type='text'
                />
                <Input 
                    label='Password' 
                    value={userLogged.password}
                    action={(e) => setUserLogged({...userLogged, password : e.target.value})} 
                    type='password'      
                />
            </>
            <Button 
                label='Se connecter' 
                click={login} 
                active={formIsNotEmpty}
            />
        </div>
    )
};

export default Login;