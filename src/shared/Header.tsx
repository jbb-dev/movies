import * as React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClapperboard } from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios';
import { token } from '../Profile/Profile';
import { GlobalContext, IContext } from '../Context/Context';
import Button from './Button';
import { IUser } from './../interface/IUser';

const Header = () => {

    const { store, setStore } = React.useContext(GlobalContext) as IContext;

    const [user, setUser] = React.useState<IUser | null>(null);

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

    const changeTheme = () => {
        console.log('change theme');
        setStore({...store, theme: 'dark'});
    }

    React.useEffect(() => {
        console.log('useEffect Profile')
        getMyProfile();
    }, []);

    return (
            <div className='container-header'>
                <div className='container-logo'>
                    <FontAwesomeIcon icon={faClapperboard} className='logo' />
                    <Link style={{fontFamily: 'Nunito', fontSize: '30px', borderStyle: 'none'}}to={'/'}>Mooovies</Link>
                </div>
                <div className='header-menu'>
                    {store.user == null ?
                        <>
                            <Link to={'/'}>Login</Link>
                            <Link to={'/register'}>Register</Link>
                        </>
                    :
                        <>
                            <Link to={'/movies'}>Movies</Link>
                            <Link to={'/profile'}>Profile</Link>
                            <Link to={'/add-movie'}>Add</Link>
                        </>
                    }
                    {store.user != null &&
                        <p>Salut {store.user?.firstname}</p>
                    }
                    {/* <Button 
                        label='Change theme'
                        active={true}
                        click={changeTheme}
                    
                    /> */}

                </div>
            </div>
        )
};

export default Header;