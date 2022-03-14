import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAuth } from '../shared/auth';
import Button from '../shared/Button';
import Input from './Input'
import './login.css';
interface LoginProps {
    isAuth: boolean;
    setIsAuth: (state : boolean) => void;
}

const Login: React.FC<LoginProps> = (props : LoginProps) => {

    let navigate = useNavigate();

    const [userLogged, setUserLogged] = React.useState({
        login: '',
        password: ''
    });

    const login = () => {
        console.log('isAuth = ', props.isAuth);
        const valid = () => props.setIsAuth(true);
        checkAuth(userLogged.login, userLogged.password, valid);
    };

    const formIsNotEmpty = userLogged.login.length > 0 && userLogged.password.length > 0;

    React.useEffect(() => {
        console.log("useEffect Login Page")
        if (props.isAuth)
        {
            navigate('/movies');
        };
    }, [props.isAuth])

    return (
        <div className='container-login'>
            <div>
                <Input 
                        name='login'
                        label='Login' 
                        value={userLogged.login}
                        action={(e : React.ChangeEvent<HTMLInputElement>) => setUserLogged({...userLogged, login : e.target.value})} 
                        type='text'
                />
                <Input 
                        label='Password' 
                        value={userLogged.password}
                        action={(e : React.ChangeEvent<HTMLInputElement>) => setUserLogged({...userLogged, password : e.target.value})} 
                        type='password'      
                />
                <Button 
                    label='Se connecter' 
                    click={login} 
                    active={formIsNotEmpty}
                />
            </div>
        </div>
    )
};

export default Login;