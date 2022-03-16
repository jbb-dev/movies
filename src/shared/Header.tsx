import * as React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClapperboard } from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios';
import { token } from '../Profile/Profile';

interface IUser {
    avatar: string;
    biography: string | null;
    birthdate: Date | null;
    city: string;
    email: string;
    firstname: string;
    id: number;
    lastname: string;
    postalCode: string;
}

const Header = () => {

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

    React.useEffect(() => {
        console.log('useEffect Profile')
        getMyProfile();
    }, []);

    return (
            <div className='container-header'>
                <div className='container-logo'>
                    <FontAwesomeIcon icon={faClapperboard} className='logo'/>
                    <h1 style={{fontFamily: 'Nunito'}}>Mooovies</h1>
                </div>
                <div className='header-menu'>
                    <Link to={'/'}>Register</Link>
                    <Link to={'/movies'}>Movies</Link>
                    <Link to={'/profile'}>My Profile</Link>
                    <p>Salut {user?.firstname}</p>
                </div>
            </div>
        )
};

export default Header;